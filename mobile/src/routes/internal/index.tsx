import React from 'react';
import { createDrawerNavigator  } from '@react-navigation/drawer';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'; 

import Dashboard from '../../pages/Dashboard';

const InternalRoutes = () => {
  const { Navigator, Screen } = createDrawerNavigator();

  return (
    <Navigator
      initialRouteName="dashboard"
      drawerContentOptions={{
        activeTintColor: '#FAF8FF',
        activeBackgroundColor: '#8685EF',
        inactiveTintColor: '#FAF8FF',
        labelStyle: {
          fontFamily: 'Poppins_400Regular',
          fontSize: 18,
        },
      }}
      drawerStyle={{
        backgroundColor: '#383645',
        elevation: 0,
        shadowOpacity: 0,
        paddingVertical: 10,
      }}
    >
      <Screen 
        name="Explorar" 
        component={Dashboard}
        options={{
          drawerIcon: () => (
            <MaterialCommunityIcons name="google-maps" size={24} color="#FAF8FF"/>
          )
        }} 
      />

      <Screen 
        name="Agendamentos" 
        component={Dashboard} 
        options={{
          drawerIcon: () => (
            <AntDesign name="calendar" size={24} color="#FAF8FF"/>
          )
        }} 
      />

      <Screen 
        name="Perfil" 
        component={Dashboard} 
        options={{
          drawerIcon: () => (
            <MaterialCommunityIcons name="face-profile" size={24} color="#FAF8FF"/>
          )
        }} 
      />
    </Navigator>
  );
}
export default InternalRoutes;