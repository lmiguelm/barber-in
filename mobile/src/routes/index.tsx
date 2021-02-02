import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; 

import ExternalRoutes from './external';
import InternalRoutes from './internal';

const signed = true;

const Routes = () => {

  return (
    <NavigationContainer>
      {signed ? (
        <InternalRoutes/>
      ) : (
        <ExternalRoutes/>
      )}
    </NavigationContainer>
  ); 
}
export default Routes;