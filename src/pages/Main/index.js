import React, {Component} from 'react';
import {ScrollView, Text, View} from 'react-native';
import { Feather } from '@expo/vector-icons';

import ProductList from '../../components/ProductList';
import Tabs from '../../components/Tabs';
import styles from "../../components/Header/styles";
import Seller from "../../components/ProductList/Seller";


export default class Main extends Component {
  state = {
    products: [
      {
        id: 1,
        image: 'https://cdn.desconto.com.br/img/merchants/118701/360-logo/v1/shoptime-descontos.png',
        title: 'Computador Gamer BRX Powered By Asus',
        description: 'Intel Core i3-9100F, 8GB, SSD 240GB, Asus NVIDIA GeForce GTX 1650 4GB, Windows 10 Pro',
        price: 'R$4.050,00',
        promotion: '-30%',

      },
      {
        id: 2,
        image: 'https://img.ibxk.com.br/2019/11/25/25163659465126.jpg?w=1120&h=420&mode=crop&scale=both',
        title: 'Computador Gamer G-Fire AMD A6-7400K',
        description: '8GB, HD 1TB, Radeon R5 integrada, Linux - HTAVA R83',
        price: 'R$3.370,00',
        promotion: '-50%',
 
      },
      {
        id: 3,
        image: 'https://lh3.googleusercontent.com/29dRafseDDukId_o-0nnghHhwJy8aOdIwaS4U2_BWHFecl9WcDL1BPKDf3WevdSZxLo',
        title: 'Monitor Gamer LED LG 34',
        description: 'UltraWide Curvo, Full HD, IPS, 2 HDMI, DisplayPort, FreeSync, 144Hz, 1ms, Altura Ajustável - 34GL750',
        price: 'R$4.430,00',
        promotion: '-60%',
      },
    ],
  };
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#F8F8FA' }}>
        <View style={styles.container}>
          <Feather name="align-justify" size={24} style={styles.icon}/>
          <Text style={styles.title}>Página Principal </Text>
          <Feather name="shopping-cart" size={24} style={styles.icon}/>

        </View>
        <View style={styles.containerText}>
          <Text style={ styles.titleText}>Bem-vindo!</Text>
          <Text style={styles.description}>Escolha a empresa e aproveite as promoções.</Text>
        </View>

        <ScrollView>
          <View style={styles.containerProducts}>
            { this.state.products.map(product =>
              <Seller key={product.id}
                       product={product} />)
            }
          </View>
        </ScrollView>
        <Tabs />
      </View>
    );
  }

}
