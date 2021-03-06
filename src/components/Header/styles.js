import { StyleSheet } from 'react-native';
import { metrics, fonts, colors } from '../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 100,
    paddingTop: metrics.headerPadding,
    paddingHorizontal: metrics.padding,
    borderBottomWidth: 1,
    borderColor: colors.lighter,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerText: {
    height: 120,
    paddingTop: metrics.headerPadding,
    paddingHorizontal: metrics.padding,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 20,
    color: '#13131a',
    fontWeight: 'bold'
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#737380'
  },
  icon: {
    color: 'white',
  },

  title: {
    fontSize: fonts.big,
    color: 'white',

  },
});

export default styles;
