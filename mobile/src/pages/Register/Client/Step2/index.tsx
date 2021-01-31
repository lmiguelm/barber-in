import React, { useState, useEffect } from 'react';
import { Platform, Keyboard, Text } from 'react-native';
import {AntDesign, Entypo} from '@expo/vector-icons';
import { Route, useNavigation } from '@react-navigation/native';

import { Container, TextContainer, Title, SubTitle,FormContainer } from '../styles';
import { Button, ButtonTitle } from '../../../../styles/template/button';
import { Input, InputContainer } from '../../../../styles/template/input';
import { RectButton } from 'react-native-gesture-handler';

interface Step2Props {
  route: any;
}

const Step2: React.FC<Step2Props> = ({ route }) => {

  const { navigate } = useNavigation();

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

  return (
    <Container behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
      
      {!showkeyboard && (
        <TextContainer>
          <Title>Dados de segurança para acessar o app</Title>
          <SubTitle><Text style={{ color: '#8685EF', fontWeight: 'bold' }}>Atenção!</Text> Preencha todos os campos para finalizar seu cadastro</SubTitle>
        </TextContainer>
      )}

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
export default Step2;