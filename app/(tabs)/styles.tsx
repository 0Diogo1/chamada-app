import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
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
    },
    textColorVariant1:{
        color:'white'
    },
    cardContainer: {
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    buttonContainer: {
        alignItems: 'center',
        minWidth:140,

    },
    buttonText: {
        marginTop: 8, 
        fontSize: 16,
        color: 'purple',
    },
    cardRow:{
        flexDirection:'row',
        flexWrap:'wrap',
        gap:16,
        justifyContent:'center',
        marginBottom: 20
    },
    camera: {
        flex: 0.4,
        width:300,
    },
    message: {
        textAlign: 'center',
        paddingBottom: 10,
      },
      button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
      },
      text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
      },
      resultContainer: {
        marginTop: 20,
        alignItems: 'center',
      },
      resultText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
      },
      errorText: {
        color: 'red',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 20,
      },
});

export default styles;
