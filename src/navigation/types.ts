import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {IDataResponse} from '../screens/Home/home.props';
import routes from './routes';

export type HomeStackParamList = {
  [routes.DETAILS]: {item: IDataResponse};
  [routes.HOME]: undefined;
};

export type HomeStackNavigationProp<T extends keyof HomeStackParamList> =
  NativeStackNavigationProp<HomeStackParamList, T>;
