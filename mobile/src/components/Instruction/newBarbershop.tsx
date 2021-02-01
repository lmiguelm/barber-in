import React from 'react';
import { Image, Text } from 'react-native';

import { Container, Title } from './styles';
import hand from '../../assets/hand.png';

interface InstructionProps {
  callback(show: boolean): void;
}

const Instruction: React.FC<InstructionProps> = ({ callback }) => {
  return (
    <Container onPress={() => callback(false)}>
      <Image source={hand} />
      <Title>Toque no mapa para adicionar o local de sua barbearia</Title>
    </Container>
  );
}
export default Instruction;