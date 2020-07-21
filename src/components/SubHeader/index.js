import React from 'react';
import {View, Text, Image} from 'react-native';



import styles from './styles';
import Button from './../Button';


const SubHeader = () => (
  <View style={styles.container}>
    <View style={styles.profileContainer}>
      <Image
        style={styles.avatar}
        source={{ uri: 'https://abri.com.br/wp-content/uploads/2019/10/telefone-shoptime.jpg' }}
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
