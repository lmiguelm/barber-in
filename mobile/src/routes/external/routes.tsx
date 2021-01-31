import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../../pages/Home';

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
      </Navigator>
    </NavigationContainer>
  )
}

export default ExternalRoutes;