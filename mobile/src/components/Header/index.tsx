import React from 'react';
import { SimpleLineIcons } from '@expo/vector-icons'; 
import { DrawerActions, useNavigation } from '@react-navigation/native';

import { HeaderContainer, Title } from './styles';
import { RectButton } from 'react-native-gesture-handler';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {

  const { dispatch } = useNavigation();

  function openMenu() {
    dispatch(DrawerActions.openDrawer());
  }

  return (
    <HeaderContainer>
      <RectButton onPress={openMenu}>
        <SimpleLineIcons name="menu" size={24} color="#8685EF" />
      </RectButton>
      <Title>{title}</Title>
    </HeaderContainer>
  );
} 
export default Header;