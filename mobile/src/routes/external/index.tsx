import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../../pages/Home';
import Login from '../../pages/Login';
import Select from '../../pages/Register/Select';

// Register Client
import Step1Client from '../../pages/Register/Client/Step1';
import Step2Client from '../../pages/Register/Client/Step2';

// Register Barber
import Step1Barber from '../../pages/Register/Barber/Step1';
import Step2Barber from '../../pages/Register/Barber/Step2';
import Step3Barber from '../../pages/Register/Barber/Step3';
import Step4Barber from '../../pages/Register/Barber/Step4';
import Step5Barber from '../../pages/Register/Barber/Step5';

const ExternalRoutes = () => {

  const { Navigator, Screen } = createStackNavigator();

  return (
      <Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Screen component={Home} name="Home"/>
        <Screen component={Login} name="Login"/>
        <Screen component={Select} name="Select"/>

        <Screen component={Step1Client} name="client-step1"/>
        <Screen component={Step2Client} name="client-step2"/>

        <Screen component={Step1Barber} name="barber-step1"/>
        <Screen component={Step2Barber} name="barber-step2"/>
        <Screen component={Step3Barber} name="barber-step3"/>
        <Screen component={Step4Barber} name="barber-step4"/>
        <Screen component={Step5Barber} name="barber-step5"/>
      </Navigator>
  )
}

export default ExternalRoutes;