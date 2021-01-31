import React from 'react';
import { Image } from 'react-native';
import { AntDesign  } from '@expo/vector-icons';

import { Container, ButtonContainer } from './styles';
import { Button, ButtonTitle } from '../../styles/template/button';


import logo from '../../assets/logo.png';
import bg from '../../assets/bg.png';

import { useNavigation } from '@react-navigation/native';

const Home = () => {

  const { navigate } = useNavigation();

  function goToNewAccount() {
    console.log('ok');
  }

  function goToLogin() {
    navigate('Login');
  }

  return (
    
    <Container source={bg} resizeMode="cover">

      <Image 
        source={logo}
        resizeMode="contain"
        style={{ marginTop: 30 }}
      />

      <ButtonContainer>
        <Button onPress={goToLogin}>
          <ButtonTitle>Entrar</ButtonTitle>
          <AntDesign 
            style={{ position: 'absolute', right: 0, marginRight: 30 }} 
            name="arrowright" 
            size={24} 
            color="#FAF8FF" 
          />
        </Button>

        <Button>
          <ButtonTitle>Cadastro</ButtonTitle>
          <AntDesign 
            style={{ position: 'absolute', right: 0, marginRight: 30 }} 
            name="plus" 
            size={24} 
            color="#FAF8FF" 
          />
        </Button>
      </ButtonContainer>

    </Container>
  );
}
export default Home;