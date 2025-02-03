import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Pressable, SafeAreaView, StyleSheet, View } from 'react-native';
import { Card, Provider as PaperProvider } from 'react-native-paper';
import EmailInput from '@/components/Inputs/emailInput';
import { greenTheme} from '../../components/Theme/theme';
import PasswordInput from '@/components/Inputs/passwordInput';
import { Text } from 'react-native-paper';
import SubmitButton from '@/components/Buttons/SubmitButton';
import { useState } from 'react';
import { auth } from '@/src/firebase.config';
import { signInWithEmailAndPassword } from 'firebase/auth';

const backGoundImage = require('../../assets/images/cupulaTeatro.jpg')


export default function App() {
  const [userEmail, setUserEmail] = useState('');
  const [userPass, setUserPass] = useState('');

  const userLogin = () => {
    signInWithEmailAndPassword(auth, userEmail, userPass)
    .then((userCredential) => {
      const user = userCredential.user;
      alert('login efetuado')
      console.log(user)
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
    })
  }

  return (
    <PaperProvider theme={greenTheme}>
      <ImageBackground
        source={backGoundImage}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <SafeAreaView style={styles.safeArea}>
            <View style={styles.centerContainer}>
              <Card>
                <Card.Content>
                  <Text variant="headlineMedium" style ={styles.margin16}>Login</Text>
                  <EmailInput userEmail={userEmail} setEmail={setUserEmail} />
                  <PasswordInput userPass={userPass} setUserPass={setUserPass}/>
                  <SubmitButton startLogin={userLogin}/>
                  <View style={styles.boxLink}>  
                    <Pressable>
                      <Text style={styles.textColor}>esqueci minha senha</Text>
                    </Pressable>
                    <Pressable>
                      <Text style={styles.textColor}>novo usuário</Text>
                    </Pressable>
                  </View>
                </Card.Content>
              </Card>
            </View>
          </SafeAreaView>
        </View>
      </ImageBackground>

    </PaperProvider>

  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1, // Faz a imagem de fundo cobrir toda a tela
    padding:0
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.1)', // Overlay escuro com 50% de transparência
  },
  safeArea: {
    flex: 1, // Ocupa toda a tela
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
    color:'purple'
  }
});