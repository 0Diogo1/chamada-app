import React from 'react'
import { View } from 'react-native'
import { Avatar, Text } from 'react-native-paper'
import styles from '../styles'

const screenAlunos = () => {
  return (
    <View style={styles.container}>
      <Avatar.Image size={100}  source={require('../../../assets/images/avatar.png')}/>
      <Text>nome</Text>
      <Text>turma</Text>
      <Text>Horário</Text>
    </View>
  )
}

export default screenAlunos