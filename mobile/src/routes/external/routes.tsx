import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../../pages/Home';
import Login from '../../pages/Login';
import Select from '../../pages/Register/Select';

// Register Client
import Step1 from '../../pages/Register/Client/Step1';
import Step2 from '../../pages/Register/Client/Step2';


const ExternalRoutes = () => {

  const { Navigator, Screen } = createStackNavigator();

  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Screen component={Home} name="Home"/>
        <Screen component={Login} name="Login"/>
        <Screen component={Select} name="Select"/>

        <Screen component={Step1} name="client-step1"/>
        <Screen component={Step2} name="client-step2"/>
      </Navigator>
    </NavigationContainer>
  )
}

export default ExternalRoutes;