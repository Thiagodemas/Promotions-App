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
  containerProducts: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 50,
    marginHorizontal: 'auto',
    textAlign: 'center'
  },
  titleText: {
    fontSize: 30,
    marginBottom: 16,
    marginTop: 48,
    color: '#13131a',
    fontWeight: 'bold',
    textAlign: 'center'
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
