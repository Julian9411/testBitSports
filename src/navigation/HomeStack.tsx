import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Details} from '../screens';
import routes from './routes';
import {HomeStackParamList} from './types';
import {colors} from '../styles/colors';

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack: FC = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {backgroundColor: colors.BLACK},
      headerTintColor: colors.WITHE,
      headerBackTitleVisible: false,
    }}>
    <Stack.Screen
      name={routes.HOME}
      options={{title: 'Home'}}
      component={Home}
    />
    <Stack.Screen
      name={routes.DETAILS}
      options={({route}) => ({
        title: route.params.item.name,
      })}
      component={Details}
    />
  </Stack.Navigator>
);

export default HomeStack;
