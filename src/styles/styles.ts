import {StyleSheet} from 'react-native';
import {colors} from './colors';

export default StyleSheet.create({
  title: {
    fontWeight: '700',
    fontSize: 17,
    lineHeight: 20,
  },
  listContainer: {
    backgroundColor: '#fff',
    width: '100%',
    alignContent: 'center',
    paddingHorizontal: 16,
    flex: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.BORDER_COLOR,
  },
});
