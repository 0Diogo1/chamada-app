import React, { ButtonHTMLAttributes, useEffect } from 'react'
import { GestureResponderEvent, Pressable, View } from 'react-native'
import { Avatar, Button, Text } from 'react-native-paper'
import styles from '../styles'
import { useData } from '@/src/DataProvider'

const screenAlunos = () => {
  const { aluno } = useData()

  const handleAction = (id: string, event: GestureResponderEvent) => {
    if (id === 'confirmar') {
      alert('Solicitação enviada')
    } else {
      alert('Solicitação cancelada')
    }
  }

  return (
    <View style={styles.container}>
      <Avatar.Icon size={100} icon='account' />
      <View style={styles.groupTextForAluno}>
        <Text variant="titleLarge">Nome: {aluno?.nome}</Text>
        <Text variant="titleLarge">Turma: {aluno?.turma}</Text>
        <Text variant="titleLarge">Horário: {aluno?.horario}</Text>
      </View>
      <View style={styles.groupButtonInRow}>
          <Button mode='outlined' icon='check-bold' 
          onPress={(event) => handleAction('confirmar', event)}>Cornfirmar</Button>
       
          <Button mode='outlined' icon='clock-remove' id='cancelar' 
          onPress={(event) => handleAction('cancelar', event)}>Cancelar</Button>
      </View>
    </View>
  )
}

export default screenAlunos