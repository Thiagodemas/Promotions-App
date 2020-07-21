import React from 'react';
import {View, Text, Image} from 'react-native';



import styles from './styles';
import Button from './../Button';


const SubHeader = () => (
  <View style={styles.container}>
    <View style={styles.profileContainer}>
      <Image
        style={styles.avatar}
        source={{ uri: 'https://cdn.desconto.com.br/img/merchants/118701/360-logo/v1/shoptime-descontos.png' }}
      />

      <View style={styles.profileInfo}>
        <Text style={styles.name}>Shoptime</Text>
        <Text style={styles.bio}>Confira nossas promoções de Computadores, e compre hoje mesmo seu produto. Encontre e compre aqui!</Text>

        <View style={styles.buttonContainer}>
          <Button style={styles.firstButton}>Message</Button>
          <Button type="outline">Follow</Button>
        </View>
      </View>
    </View>
  </View>
);

export default SubHeader;
