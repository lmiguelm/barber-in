import React, { useState, useEffect } from 'react';
import { Platform, Keyboard, Text } from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Container, TextContainer, Title, SubTitle,FormContainer } from '../styles';
import { Button, ButtonTitle } from '../../../../styles/template/button';
import { Input } from '../../../../styles/template/input';

const Step1 = () => {

  const { navigate } = useNavigation();

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [showkeyboard, setShowKeyboard] = useState(false);
  const [enablebutton, setEnableButton] = useState(false);

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => setShowKeyboard(true));
    Keyboard.addListener('keyboardDidHide', () => setShowKeyboard(false));
  }, []);

  useEffect(() => {
      if(lastName != '' && name != '' ) 
        setEnableButton(true);
      else
      setEnableButton(false);
  }, [name, lastName])

  function goToNextStep() {
    navigate('client-step2', { name, lastName });
  }

  return (
    <Container behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>
      
      {!showkeyboard && (
        <TextContainer>
          <Title>Preencha o formulário de cadastro</Title>
          <SubTitle><Text style={{ color: '#8685EF', fontWeight: 'bold' }}>Atenção!</Text> Preencha todos os campos para prosseguir</SubTitle>
        </TextContainer>
      )}

      <FormContainer>
        
        <Input
          placeholder="Nome"
          autoCompleteType="name"
          value={name}
          onChangeText={value => setName(value)}
        />
        <Input
          placeholder="Sobrenome"
          autoCompleteType="name"
          value={lastName}
          onChangeText={value => setLastName(value)}
        />

        <Button 
          onPress={goToNextStep}
          disabled={!enablebutton}
          style={{ marginTop: 30 }}
        >
          <ButtonTitle>Avançar</ButtonTitle>
          <AntDesign 
            style={{ position: 'absolute', right: 0, marginRight: 30 }} 
            name="arrowright" 
            size={24} 
            color="#FAF8FF" 
          />
        </Button>
      
      </FormContainer>
    </Container>
  )
}
export default Step1;