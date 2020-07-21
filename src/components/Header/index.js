import React from 'react';
import {View, Text} from 'react-native';
import { Feather } from '@expo/vector-icons';



import styles from './styles';


const Header = () => (
  <View style={styles.container}>
    <Feather name="chevron-left" size={24} style={styles.icon}/>
    <Text style={styles.title}>Profile </Text>
    <Feather name="shopping-cart" size={24} style={styles.icon}/>
  </View>
);

export default Header;
