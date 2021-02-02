import React, { useState, useEffect } from 'react';
import { Platform, Keyboard, Text } from 'react-native';
import {AntDesign, Entypo} from '@expo/vector-icons';


import { Container, TextContainer, Title, SubTitle, FormContainer } from '../styles';
import { Button, ButtonTitle } from '../../../../styles/template/button';
import { Input, InputContainer } from '../../../../styles/template/input';
import { RectButton } from 'react-native-gesture-handler';

interface Step5Props {
  route: any;
}

const Step5: React.FC<Step5Props> = ({ route }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [showkeyboard, setShowKeyboard] = useState(false);
  const [enablebutton, setEnableButton] = useState(false);
  const [showPass, setShowPass] = useState(false);

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => setShowKeyboard(true));
    Keyboard.addListener('keyboardDidHide', () => setShowKeyboard(false));
  }, []);

  useEffect(() => {
    if(email != '' && password != '' && password === confirmPass) 
      setEnableButton(true)
    else
      setEnableButton(false);
  }, [email, password, confirmPass]);

  async function handleCreateAccount() {
    const { name, lastName } = route.params;

    console.log({ name, lastName, email, password });
  }

  return(
    <Container>
      <TextContainer>
        <Title>Preencha o formulário de cadastro</Title>
        <SubTitle>Atenção! Preencha todos os campos para prosseguir</SubTitle>
      </TextContainer>

      <FormContainer>
        
        <Input
          placeholder="E-mail"
          autoCompleteType="email"
          value={email}
          onChangeText={value => setEmail(value)}
        />

        <InputContainer>
          <Input
            secureTextEntry={!showPass}
            placeholder="Senha"
            autoCompleteType="password"
            value={password}
            onChangeText={value => setPassword(value)}
          />
          <RectButton
            style={{ position: 'absolute', right: 0, marginRight: 30, marginTop: 30 }}
            onPress={() => setShowPass(!showPass)} 
          >
            { showPass ? (
              <Entypo  
                name="eye-with-line" 
                size={24} 
                color="#8685EF"
              />
            ) : (
              <Entypo  
                name="eye" 
                size={24} 
                color="#2222"
              />
            )}
          </RectButton>
        </InputContainer>

        <InputContainer>
          <Input
            secureTextEntry={showPass}
            placeholder="Confirmação de senha"
            autoCompleteType="password"
            value={confirmPass}
            onChangeText={value => setConfirmPass(value)}
          />
          <RectButton
            style={{ position: 'absolute', right: 0, marginRight: 30, marginTop: 30 }}
            onPress={() => setShowPass(!showPass)} 
          >
            { showPass ? (
              <Entypo  
                name="eye-with-line" 
                size={24} 
                color="#8685EF"
              />
            ) : (
              <Entypo  
                name="eye" 
                size={24} 
                color="#2222"
              />
            )}
          </RectButton>
        </InputContainer>

        <Button 
          onPress={handleCreateAccount}
          disabled={!enablebutton}
          style={{ marginTop: 30 }}
        >
          <ButtonTitle>Finalizar</ButtonTitle>
          <AntDesign 
            style={{ position: 'absolute', right: 0, marginRight: 30 }} 
            name="check" 
            size={24} 
            color="#FAF8FF" 
          />
        </Button>
      
      </FormContainer>

    </Container>
  )
}
export default Step5;