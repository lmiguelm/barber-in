import React from 'react';
import { Image } from 'react-native';
import Button from '../../components/Button';
import { AntDesign  } from '@expo/vector-icons';

import { Container, ButtonContainer } from './styles';
import logo from '../../assets/logo.png'
import bg from '../../assets/bg.png'


const Home = () => {
  return (
    
    <Container source={bg} resizeMode="cover">

      <Image 
        source={logo}
        resizeMode="contain"
        style={{ marginTop: 30 }}
      />

      <ButtonContainer>
        <Button 
          disabled={false}
          color="#8685EF"
          icon={
            <AntDesign 
              style={{ position: 'absolute', right: 0, marginRight: 30 }} 
              name="arrowright" 
              size={24} 
              color="#FAF8FF" 
            />
          }
        >
          Entrar
        </Button>
        
        <Button 
          disabled={false}
          color="#8685EF"
          icon={
            <AntDesign 
              style={{ position: 'absolute', right: 0, marginRight: 30 }} 
              name="plus" 
              size={24} 
              color="#FAF8FF" 
            />
          }
        >
          Cadastro
        </Button>
      </ButtonContainer>

    </Container>
  );
}
export default Home;