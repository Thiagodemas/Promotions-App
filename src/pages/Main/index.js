import React from 'react';
import { ScrollView, View } from 'react-native';


import Header from '../../components/Header';
import SubHeader from '../../components/SubHeader';
import ProductList from '../../components/ProductList';
import Tabs from '../../components/Tabs';


export default function Main() {
  return(
    <View style={{ flex: 1, backgroundColor: '#F8F8FA' }}>
      <Header />
      <ScrollView>
        <SubHeader />
        <ProductList />
      </ScrollView>
      <Tabs />
    </View>
  );
}
