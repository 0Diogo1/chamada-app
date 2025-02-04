import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    background: {
        flex: 1, // Faz a imagem de fundo cobrir toda a tela
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.1)', // Overlay escuro com 50% de transparência
    },
    safeArea: {
        flex: 1, // Ocupa toda a tela
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    centerContainer: {
        flex: 1,
        justifyContent: 'center', // Centraliza verticalmente
        paddingHorizontal: 30, // Espaçamento horizontal
    },
    margin16: {
        marginBottom: 16, // Margem abaixo do texto "Login"
    },
    boxLink: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16,
    },
    textColor: {
        color: 'purple'
    }
});
