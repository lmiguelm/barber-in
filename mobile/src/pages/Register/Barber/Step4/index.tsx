import React, { useState } from 'react';
import {AntDesign} from '@expo/vector-icons';
import {TextContainer, Title, SubTitle, FormImage, Scroll } from '../styles';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';

import ImageCard from '../../../../components/ImageCard';
import { Button, ButtonTitle } from '../../../../styles/template/button';

interface Step4Props { 
  route: any
}

const Step4: React.FC<Step4Props> = ({ route }) => {

  const { navigate } = useNavigation();

  const [images, setImages] = useState<string[]>([]);

  async function handleSelectImages() {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if(status !== 'granted') {
      alert('Eita, precisamos de acesso as suas fotos...');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if(result.cancelled) return;

    const { uri: image } = result;

    setImages([...images, image]);
  }

  function nextStep() {
    const { 
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
    } = route.params;

    navigate('barber-step5', {
      latitude,
      longitude,
      name,
      whatsapp,
      about,
      gap,
      dayInitial,
      dayFinish,
      scheduleInitial,
      scheduleFinish,
      images
    });
  }

  return (
    <Scroll>
      <TextContainer>
        <Title>Selecione imagens de sua barbearia</Title>
        <SubTitle>Atenção! Você pode selecionar uma ou mais imagens</SubTitle>
      </TextContainer>

      <FormImage onPress={handleSelectImages}>
        <AntDesign name="plus" size={24} color="#8685EF" />
      </FormImage>
    
      {images.map((image, index) => (
        <ImageCard 
          index={index} 
          image={image}
          callback={indexImageDeleted => {
            setImages(
              images.filter((image, index) => index != indexImageDeleted)
            );
          }}
        />
      ))}
      
      <Button 
        onPress={nextStep}
        disabled={true} 
        style={{ marginBottom: 90, marginTop: 30 }}
      >
        <ButtonTitle>Avançar</ButtonTitle>
        <AntDesign 
          style={{ position: 'absolute', right: 0, marginRight: 30 }} 
          name="arrowright" 
          size={24} 
          color="#FAF8FF" 
        />
      </Button>

    </Scroll>
  )
}
export default Step4;