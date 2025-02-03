import * as React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';

interface SubmitButtonProps {
  startLogin: () => void;
}

const SubmitButton:React.FC<SubmitButtonProps> = ({startLogin}) => (
  <Button mode="contained" onPress={startLogin}>
    Entrar
  </Button>
);



export default SubmitButton;