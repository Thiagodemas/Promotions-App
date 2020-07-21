/* Core */
import React from 'react';

/* Presentational */
import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from './styles';

const Tabs = () => (
  <View style={styles.container}>

    <Feather name="copy" size={16} style={[styles.icon, styles.active]} />
    <Feather name="search" size={16} style={styles.icon} />
    <View style={styles.main}>
      <Feather name="plus" size={16} style={styles.mainIcon} />
    </View>
    <Feather name="bell-off" size={16} style={styles.icon} />
    <Feather name="user" size={16} style={styles.icon} />
  </View>
);

export default Tabs;
