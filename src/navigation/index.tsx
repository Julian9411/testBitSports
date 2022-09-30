import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeStack from './HomeStack';

const Navigation = () => (
  <NavigationContainer>
    <HomeStack />
  </NavigationContainer>
);

export default Navigation;
