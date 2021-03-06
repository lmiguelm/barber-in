import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text} from 'react-native';

import { useFonts, Poppins_400Regular, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';

import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/styles/theme';

import Routes from './src/routes/index';

export default function App() {

  let [fontsLoader] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold
  });

  if(!fontsLoader) {
    return (
      <Text>Carregando</Text>
    )
  } else {
    return (
      <ThemeProvider theme={theme}>
        <Routes/>
        <StatusBar style="light" />
      </ThemeProvider>
    );
  }

}
