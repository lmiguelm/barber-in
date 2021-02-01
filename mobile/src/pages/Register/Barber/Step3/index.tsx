import React,{ useState, useEffect } from 'react';
import { Platform, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {AntDesign} from '@expo/vector-icons';

import { Container, TextContainer, Title, SubTitle, FormContainer } from '../styles';
import { Input, TextArea, InputMask } from '../../../../styles/template/input';
import { Button, ButtonTitle } from '../../../../styles/template/button';
import { Select } from '../../../../styles/template/picker';

interface Step2Props {
  route: any;
}

const daysInitial = [
  {id: 0, name: 'Selecione o dia de inicio'},
  {id: 1, name: 'Domingo'},
  {id: 2, name: 'Segunda-Feira'},
  {id: 3, name: 'Terça-Feira'},
  {id: 4, name: 'Quarta-Feira'},
  {id: 5, name: 'Quinta-Feira'},
  {id: 6, name: 'Sexta-Feira'},
  {id: 7, name: 'Sábado'},
];
const daysFinish = [
  {id: 0, name: 'Selecione o dia final'},
  {id: 1, name: 'Domingo'},
  {id: 2, name: 'Segunda-Feira'},
  {id: 3, name: 'Terça-Feira'},
  {id: 4, name: 'Quarta-Feira'},
  {id: 5, name: 'Quinta-Feira'},
  {id: 6, name: 'Sexta-Feira'},
  {id: 7, name: 'Sábado'},
];

const Step2: React.FC<Step2Props> = ({ route }) => {

  const { navigate } = useNavigation();
  
  const [showkeyboard, setShowKeyboard] = useState(false);
  const [enablebutton, setEnableButton] = useState(false);

  const [gap, setGap] = useState('');
  const [dayInitial, setDayInitial] = useState('');
  const [dayFinish, setDaysFinish] = useState('');
  const [scheduleInitial, setScheduleInitial] = useState('');
  const [scheduleFinish, setScheduleFinish] = useState('');
  

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () => setShowKeyboard(true));
    Keyboard.addListener('keyboardDidHide', () => setShowKeyboard(false));
  }, []);

  function nextStep() {
    const { latitude, longitude, name, whatsapp, about } = route.params;
    navigate('barber-step4', {
      latitude,
      longitude,
      name,
      whatsapp,
      about,
      gap,
      dayInitial,
      dayFinish,
      scheduleInitial,
      scheduleFinish
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
        
        <Select
          selectedValue={dayInitial}
          onValueChange={value => setDayInitial(value as string)}
        >
          {daysInitial.map(day => (
            <Select.Item 
              key={day.id}
              label={day.name} 
              value={day.name}
            />
          ))} 
        </Select>

        <Select
          selectedValue={dayFinish}
          onValueChange={value => setDaysFinish(value as string)}
        >
          {daysFinish.map(day => (
            <Select.Item 
              key={day.id}
              label={day.name} 
              value={day.id}
            />
          ))} 
        </Select>

        <InputMask
          placeholder="Horário de abertura"
          type="datetime"
          options={{
            format: 'HH:mm'
          }}
          value={scheduleInitial}
          onChangeText={value => setScheduleInitial(value)}
        />
        <InputMask
          type="datetime"
          placeholder="Horário de fechamento"
          options={{
            format: 'HH:mm'
          }}
          value={scheduleFinish}
          onChangeText={value => setScheduleFinish(value)}
        />
        <InputMask
          type="datetime"
          placeholder="Espaçamento entre horários"
          options={{
            format: 'HH:mm'
          }}
          value={gap}
          onChangeText={value => setGap(value)}
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