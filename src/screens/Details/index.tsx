import React, {FC} from 'react';
import {View, Text} from 'react-native';
import styles from '../../styles/styles';
import {IDetails} from './details.props';
import style from './style';

export const Details: FC<IDetails> = ({route}) => {
  const {
    params: {
      item: {hair_color, skin_color, eye_color, birth_year, vehicles},
    },
  } = route;

  const generalInfo = {
    hair_color,
    skin_color,
    eye_color,
    birth_year,
  };

  const renderData = [
    {name: 'General Information', values: Object.entries(generalInfo)},
    {name: 'Vehicles', values: vehicles},
  ];

  return (
    <View style={styles.listContainer}>
      {renderData.map(data => (
        <View key={data.name}>
          {data.values.length > 0 && (
            <View style={style.containerTitle}>
              <Text style={styles.title}>{data.name}</Text>
              {data.values.map(item => {
                const dataIsArray = Array.isArray(item);
                return (
                  <View
                    key={dataIsArray ? item[0] : item}
                    style={styles.itemContainer}>
                    <>
                      <Text
                        style={[
                          styles.title,
                          style.capitalize,
                          style.colorTitle,
                        ]}>
                        {dataIsArray ? item[0].replace('_', ' ') : item}
                      </Text>
                      {dataIsArray && (
                        <Text style={[styles.title, style.capitalize]}>
                          {item[1]}
                        </Text>
                      )}
                    </>
                  </View>
                );
              })}
            </View>
          )}
        </View>
      ))}
    </View>
  );
};
