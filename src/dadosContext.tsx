import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";
import { Aluno } from "./type";

interface dadosContext {
    aluno: Aluno;
    setAluno:Dispatch<SetStateAction<Aluno>>;
}

const dadosContext = createContext<dadosContext>({} as dadosContext);

export const dadosProvider = ({ children }: { children: ReactNode }) => {
    const [aluno, setAluno] = useState<Aluno>({id:'', nome: '', turma: '', horario: '' })

    return(
        <dadosContext.Provider value={{aluno, setAluno}}>
            {children}
        </dadosContext.Provider>
    )
}

export const useDados = () => {
    const context = useContext(dadosContext);


    if(!context){
        throw new Error('dadosContext deve ser usado dentro de um dadosProvider')
    }
    return context
}