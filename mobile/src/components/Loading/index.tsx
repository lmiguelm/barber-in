import React from 'react';

import { Container, Title } from './styles';

import { ActivityIndicator, Text } from 'react-native';

interface LoadingProps {
  title: string;
}

const Loading: React.FC<LoadingProps> = ({title}) => {
  return (
    <Container>
      <ActivityIndicator size="large" color="#8685EF" />
      <Title>{title}</Title>
    </Container>
  )
}
export default Loading;