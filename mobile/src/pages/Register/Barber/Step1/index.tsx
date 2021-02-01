import React, {useState, useEffect} from 'react';
import { MapEvent, Marker} from 'react-native-maps';
import {AntDesign} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import * as Location from 'expo-location';

import { ButtonContainer } from '../styles';
import { Container, Map } from '../../../../styles/template/map';
import { Button, ButtonTitle } from '../../../../styles/template/button';

import pin from '../../../../assets/pin.png';

import Instruction from '../../../../components/Instruction/newBarbershop';
import Loading from '../../../../components/Loading';


const initialPostition = {
  latitude: -23.6815315,
  longitude: -46.8754811
}

const Step1 = () => {

  const { navigate } = useNavigation();

  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const [initialPosition, setInitialPosition] = useState(initialPostition);
  const [loading, setLoading] = useState(true);
  const [showInstruction, setShowInstruction] = useState(true);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setInitialPosition(initialPostition);
        setLoading(false);
        return;
      }

      let { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync({});
      setInitialPosition({latitude, longitude});
      setLoading(false);
    })();
  }, []);

  function handleSelectMapPosition(event: MapEvent) {
    setPosition(event.nativeEvent.coordinate);
  }

  function nextStep() {
    navigate('barber-step2',  {...position});
  }

  if(loading) {
    return <Loading title="Carregando mapa..."/>
  } else {
    return (
      <>  
        {showInstruction && (
          <Instruction callback={res => setShowInstruction(res)} />
        )}

        <Container style={{ zIndex: -1 }}>
          <Map
            initialRegion={{
              latitude: initialPosition.latitude,
              longitude: initialPosition.longitude,
              latitudeDelta: 0.020,
              longitudeDelta: 0.020,
            }}
            onPress={handleSelectMapPosition}
          >
            { position.latitude !== 0 && (
              <Marker 
                icon={pin}
                coordinate={{ latitude: position.latitude, longitude: position.longitude }}
              />
            )}
          </Map>

          {position.latitude !== 0 && (
            <ButtonContainer>
              <Button onPress={nextStep}>
                <ButtonTitle>Avançar</ButtonTitle>
                <AntDesign 
                  style={{ position: 'absolute', right: 0, marginRight: 30 }} 
                  name="arrowright" 
                  size={24} 
                  color="#FAF8FF" 
                />
              </Button>
            </ButtonContainer>
          )}

        </Container>
      </>
    )
  }
}
export default Step1;