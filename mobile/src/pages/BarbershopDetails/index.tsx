import React, { useState } from 'react';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { View, TouchableHighlight, Alert, Modal, Text, StyleSheet } from 'react-native';

import { HourText, HourContainer, Description, RouteText, ButtonContainer, Container, Header, Title, Content, Image, Carousel, Slider, Pagination, PaginationContainer, MapContainer } from './styles';
import { ModalContainer, ModalText, ModalView, Close, CloseText, ModalTextHightLight } from '../../styles/template/modal';
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

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <ModalContainer>
        <Modal
          animationType="slide"
          transparent={true}
          visible={showModal}
        >
          <ModalContainer>
            <ModalView>
              <ModalText><ModalTextHightLight>Segunda:</ModalTextHightLight> 08:00 às 18:00</ModalText>
              <ModalText><ModalTextHightLight>Terça:</ModalTextHightLight> 08:00 às 18:00</ModalText>
              <ModalText><ModalTextHightLight>Quarta:</ModalTextHightLight> 08:00 às 18:00</ModalText>
              <ModalText><ModalTextHightLight>Quinta:</ModalTextHightLight> 08:00 às 18:00</ModalText>
              <ModalText><ModalTextHightLight>Sexta:</ModalTextHightLight> 08:00 às 18:00</ModalText>

              <TouchableHighlight 
                onPress={() => setShowModal(!showModal)}
                style={{
                  marginTop: 30,
                  width: 100,
                  height: 40,
                  backgroundColor: '#222',
                  borderRadius: 8,
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'center',
                }}
              >
                <CloseText>Entendi</CloseText>
              </TouchableHighlight>

            </ModalView>
          </ModalContainer>
        </Modal>
      </ModalContainer>

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
          <TouchableOpacity onPress={() => setShowModal(true)}>
            <HourContainer>
              <AntDesign 
                size={20} 
                name="clockcircleo" 
                color="#00E26E" 
              />{'   '}
              <HourText>Ver horários</HourText>
            </HourContainer>
          </TouchableOpacity>

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
    </>
  )
}
export default BarbershopDetails;