import React from 'react';
import {View, Text} from "react-native";


import Header from '../../components/Header';
import SubHeader from '../../components/SubHeader';

export default function Main() {
  return(
    <View style={{flex: 1}}>
      <Header />
      <SubHeader />
    </View>
  );
}
