import {StyleSheet} from 'react-native';
import {colors} from '../../styles/colors';

export default StyleSheet.create({
  nameCharacterColor: {
    color: colors.GRAY_LIGHT,
  },
  locationCharacter: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 17,
    color: colors.GRAY,
  },
  iconList: {
    fontWeight: '700',
    fontSize: 20,
    color: colors.GRAY_LIGHT,
  },
  loadingContainer: {
    alignItems: 'center',
    marginTop: 16,
  },
  loadingColor: {
    color: colors.GRAY,
  },
  errorContainer: {
    flex: 1,
    paddingTop: 16,
    backgroundColor: colors.WITHE,
    alignItems: 'center',
  },
  errorColor: {
    color: colors.RED,
  },
});
