import {View, Text, FlatList, Pressable, ActivityIndicator} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import routes from '../../navigation/routes';
import {useNavigation} from '@react-navigation/native';
import {HomeStackNavigationProp} from '../../navigation/types';
import {useGetCharacters} from './home.hooks';
import {IDataResponse} from './home.props';
import style from './style';
import styles from '../../styles/styles';

export const Home: FC = () => {
  const [characters, setCharacters] = useState<IDataResponse[]>([]);
  const [pageNumber, setPageNumber] = useState(1);
  const navigation = useNavigation<HomeStackNavigationProp<'HOME'>>();

  const {
    data,
    isLoading,
    refetch: refetchData,
    isRefetching,
    isError,
  } = useGetCharacters(pageNumber);

  useEffect(() => {
    if (!isLoading && !isError) {
      setCharacters(prev => [...prev, ...data]);
    }
  }, [data, isError, isLoading]);

  const refetch = () => {
    if (!isError) {
      setPageNumber(pageNumber + 1);
      refetchData();
    }
  };

  const renderItem = ({item}: {item: IDataResponse}) => (
    <Pressable
      onPress={() => navigation.navigate(routes.DETAILS, {item: item})}
      style={styles.itemContainer}>
      <View>
        <Text style={[styles.title, style.nameCharacterColor]}>
          {item.name}
        </Text>
        <Text
          style={
            style.locationCharacter
          }>{`${item.species} from ${item.homeworld}`}</Text>
      </View>
      <Text style={style.iconList}>{'>'}</Text>
    </Pressable>
  );

  const loading = () => (
    <View style={style.loadingContainer}>
      <Text style={[styles.title, style.loadingColor]}>
        <ActivityIndicator /> Loading
      </Text>
    </View>
  );

  const errorFetch = () => (
    <View style={style.errorContainer}>
      <Text style={[styles.title, style.errorColor]}>Failed to Load Data</Text>
    </View>
  );

  return (
    <>
      {!isLoading && !isError ? (
        <FlatList
          data={characters}
          renderItem={renderItem}
          onEndReached={refetch}
          ListFooterComponent={() => (isRefetching ? loading() : null)}
          style={styles.listContainer}
        />
      ) : !isError ? (
        loading()
      ) : (
        errorFetch()
      )}
    </>
  );
};
