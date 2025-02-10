export interface User {
    id: string;
    email:string | null
    token:string;
}
export interface Aluno {
    id:string;
    nome:string
    turma:string;
    horario:string;
}

export interface Colaborador {
    nome:string;
    cargo:string;
}