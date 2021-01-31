import React, { useState, useEffect } from 'react';
import { Entypo } from '@expo/vector-icons'; 

import { Container, Logo, FormContainer } from './styles';
import { Input, InputContainer } from '../../styles/template/input';
import { LinkContainer, LinkTitle } from '../../styles/template/link';
import { Button, ButtonTitle } from '../../styles/template/button';

import logo from '../../assets/logo.png';
import { RectButton } from 'react-native-gesture-handler';

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [enableButton, setEnableButton] = useState(false);

  useEffect(() => {
    if(email != '' && password != '') {
      setEnableButton(true);
    } else {
      setEnableButton(false);
    }
  }, [email, password])

  async function handleLogin() {
    console.log({ email, password });
  }

  return (
    <Container>
      <Logo source={logo}/>
      
      <FormContainer>
        <InputContainer>
          <Input 
            placeholder="E-mail" 
            autoCompleteType="email"
            keyboardType="email-address"
            value={email}
            onChangeText={value => setEmail(value)}
          />
        </InputContainer>
        
        <InputContainer>
          <Input 
            secureTextEntry={showPass}
            style={{ marginBottom: 10 }} 
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

        <LinkContainer style={{ marginBottom: 10 }}> 
          <LinkTitle>Esqueci minha senha</LinkTitle>
        </LinkContainer>

        <Button disabled={!enableButton} onPress={handleLogin}>
          <ButtonTitle>Entrar</ButtonTitle>
        </Button>
      </FormContainer>
    </Container>
  )
}
export default Login;
