import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import { Callout, MapEvent, Marker} from 'react-native-maps';
import * as Location from 'expo-location';
import { useNavigation } from '@react-navigation/native';

import { Container, Map, CalloutContainer, CalloutText } from '../../styles/template/map';

import Header from '../../components/Header';
import Loading from '../../components/Loading';
import pin from '../../assets/pin.png';
import BarbershopDetails from '../BarbershopDetails';

const initialPostition = {
  latitude: -23.6815315,
  longitude: -46.8754811
}

const barbershops = [
  {
    id: 1,
    latitude: -21.808802,
    longitude: -48.1856368,
    name: 'BL Barbearia'
  },
  {
    id: 2,
    latitude: -21.8089264,
    longitude: -48.1868133,
    name: 'BL Barbearia'
  },
  {
    id: 3,
    latitude: -21.8082402,
    longitude: -48.1885064,
    name: 'BL Barbearia'
  }
]


const Dashboard = () => {

  const { navigate } = useNavigation();

  const [initialPosition, setInitialPosition] = useState(initialPostition);
  const [loading, setLoading] = useState(true);
  const [showBarbershop, setShowbarberhop] = useState(false);

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

  function goTobarberDetail() {
    setShowbarberhop(true);
  }
  

  if(loading) {
    return <Loading title="Carregando mapa..." />
  } else if (!showBarbershop) {
    return (
      <>
        <Header title="Explorar"/>
  
        <Container>
          <Map
            initialRegion={{
              latitude: initialPosition.latitude,
              longitude: initialPosition.longitude,
              latitudeDelta: 0.020,
              longitudeDelta: 0.020,
            }}
          >
            {barbershops.map(barbershop => (
              <Marker 
                key={barbershop.id}
                icon={pin}
                coordinate={{ latitude: barbershop.latitude, longitude: barbershop.longitude }}
              >
                <Callout 
                  tooltip
                  onPress={goTobarberDetail}
                >
                  <CalloutContainer>
                    <CalloutText>
                      {barbershop.name}
                    </CalloutText>
                  </CalloutContainer>
                </Callout>
              </Marker>
            ))}
          </Map>
        </Container>
      </>
    )
  } else {
    return <BarbershopDetails callback={res => setShowbarberhop(res)} />
  }
}
export default Dashboard;