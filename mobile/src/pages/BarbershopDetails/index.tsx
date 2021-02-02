import React from 'react';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';

import { HourText, HourContainer, Description, RouteText, ButtonContainer, Container, Header, Title, Content, Image, Carousel, Slider, Pagination, PaginationContainer, MapContainer } from './styles';
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';

import bg from '../../assets/bg.png';
import { Button, ButtonTitle } from '../../styles/template/button';
import { Map } from '../../styles/template/map';
import { Marker } from 'react-native-maps';

import pin from '../../assets/pin.png';

interface barbershopDetailsProps {
  callback(showBarbershop: boolean): void;
}

const BarbershopDetails: React.FC<barbershopDetailsProps> = ({ callback }) => {
  return (
    <Container>
      <Header>
        <Title>BL Barbearia</Title>
        <RectButton onPress={() => callback(false)}>
          <AntDesign size={24} name="close" color="#8685EF"/>
        </RectButton>
      </Header>

     
      <Carousel 
        horizontal 
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        <Slider>
          <Image source={bg} resizeMode="cover" />
          <PaginationContainer>
            <Pagination>1 de 3</Pagination>
          </PaginationContainer>
        </Slider>

        <Slider>
          <Image source={bg} resizeMode="cover" />
          <PaginationContainer>
            <Pagination>2 de 3</Pagination>
          </PaginationContainer>
        </Slider>
        
        <Slider>
          <Image source={bg} resizeMode="cover" />
          <PaginationContainer>
            <Pagination>3 de 3</Pagination>
          </PaginationContainer>
        </Slider>
        
      </Carousel>

      <Content>
        <HourContainer>
          <AntDesign 
            size={24} 
            name="clockcircleo" 
            color="#00E26E" 
          />{'   '}
          <HourText>Segunda-Feira à Sexta-Feira</HourText>
        </HourContainer>

        <Description>
          Ter barba não é uma escolha, Cuidar dela SIM
          Aqui na BLBarbearia você terá o melhor cuidado.
          Barba com toalha quente, cortes modernos e uma cerveja gelada
        </Description>
        
        <MapContainer>
          <Map 
            style={{
              height: 200
            }}
            initialRegion={{
              latitude: -21.808802,
              longitude: -48.1856368,
              latitudeDelta: 0.008,
              longitudeDelta: 0.008,
            }}
            zoomEnabled={false}
            pitchEnabled={false}
            scrollEnabled={false}
            rotateEnabled={false}
          >
            <Marker 
              icon={pin}
              coordinate={{
                latitude: -21.808802,
                longitude: -48.1856368,
              }}
            />
          </Map>
            
          <TouchableOpacity>
            <RouteText>Ver rotas no maps</RouteText>
          </TouchableOpacity>

        </MapContainer>

        <ButtonContainer>
          <Button>
            <AntDesign 
              size={24} 
              name="clockcircleo" 
              style={{ position: 'absolute', left: 0, marginLeft: 30 }}
              color="#FAF8FF" 
            />
            <ButtonTitle>Agendar Horário</ButtonTitle>
          </Button>
          
          <Button color="#00E26E">
            <FontAwesome5 
              size={24} 
              name="whatsapp" 
              style={{ position: 'absolute', left: 0, marginLeft: 30 }}
              color="#FAF8FF" 
            />
            <ButtonTitle>Entre em contato</ButtonTitle>
          </Button>
        </ButtonContainer>

      </Content>
    </Container>
  )
}
export default BarbershopDetails;