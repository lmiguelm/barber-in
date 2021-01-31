import React, { useState } from 'react';
import {AntDesign} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Container, Title, ButtonContainer, Icon } from './styles';
import { Button, ButtonTitle } from '../../../styles/template/button';

import hairStyle from '../../../assets/hairstyle.png';
import razor from '../../../assets/razor.png';

const Select = () => {

  const { navigate } = useNavigation();

  const [barberSelected, setBarberSelected] = useState(false);
  const [clientSelected, setClientSelected] = useState(false);

  function handleClientSelected() {
    setBarberSelected(false);
    setClientSelected(true);
  }
  function handleBarberSelected() {
    setBarberSelected(true);
    setClientSelected(false);
  }

  function goToNextStep() {
    if(barberSelected) 
      console.log('barber');
    else
      navigate('client-step1');
  }

  return (
    <Container>
      <Title>Selecione como deseja utilizar o app</Title>

      <ButtonContainer>

        <Button 
          onPress={handleClientSelected}
          color={clientSelected ? '#00E26E' : '#383645'}
        >  
          <ButtonTitle>Cliente</ButtonTitle>
          <Icon source={hairStyle} />
        </Button>

        <Button 
          onPress={handleBarberSelected}
          color={barberSelected ? '#00E26E' : '#383645'}
        >  
          <ButtonTitle>Barbeiro</ButtonTitle>
          <Icon source={razor} />
        </Button>

        <Button 
          onPress={goToNextStep}
          disabled={barberSelected || clientSelected ? false : true} 
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

      </ButtonContainer>
    </Container>
  );
}
export default Select;