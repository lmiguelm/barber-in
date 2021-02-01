import React,{ useState, useEffect } from 'react';
import { Platform, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {AntDesign} from '@expo/vector-icons';

import { Container, TextContainer, Title, SubTitle, FormContainer } from '../styles';
import { Input, TextArea, InputMask } from '../../../../styles/template/input';
import { Button, ButtonTitle } from '../../../../styles/template/button';

interface Step2Props {
  route: any;
}

const Step2: React.FC<Step2Props> = ({ route }) => {

  const { navigate } = useNavigation();
  
  const [showkeyboard, setShowKeyboard] = useState(false);
  const [enablebutton, setEnableButton] = useState(false);
  
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [about, setAbout] = useState('');

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => setShowKeyboard(true));
    Keyboard.addListener('keyboardDidHide', () => setShowKeyboard(false));
  }, []);

  useEffect(() => {
    if(name != '' && whatsapp.length == 15 && about != '') 
      setEnableButton(true)
    else
      setEnableButton(false);
  }, [name, whatsapp, about]);

  function nextStep() {
    const { latitude, longitude } = route.params;
    navigate('barber-step3', {
      latitude,
      longitude,
      name,
      whatsapp,
      about
    });
  }

  return (
    <Container behavior={Platform.OS == 'ios' ? 'padding' : 'height'}>

      {!showkeyboard && ( 
        <TextContainer>
          <Title>Preencha o formulário de cadastro</Title>
          <SubTitle>Atenção! Preencha todos os campos para prosseguir</SubTitle>
        </TextContainer>
      )}

      <FormContainer>
        <Input
          placeholder="Nome da barbearia"
          value={name}
          onChangeText={value => setName(value)}
        />

        <InputMask
          type="cel-phone"
          placeholder="WhatsApp"
          options={{
            withDDD: true,
            maskType: 'BRL',
            dddMask: '(99)'
          }}
          value={whatsapp}
          onChangeText={value => setWhatsapp(value)}
        />

        <TextArea
          multiline={true}
          numberOfLines={15}
          placeholder="Sobre"
          value={about}
          onChangeText={value => setAbout(value)}
        />
        <Button 
          onPress={nextStep}
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
export default Step2;