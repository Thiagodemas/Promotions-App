import React from 'react';
import {View, Text} from 'react-native';
import { Feather } from '@expo/vector-icons';



import styles from './styles';


const Header = () => (
  <View style={styles.container}>
    <Feather name="chevron-left" size={16} color="#E02041"/>
    <Text style={styles.title}>Profile</Text>
    <Feather name="more-horizontal" size={16} color="#E02041"/>
  </View>
);

export default Header;
