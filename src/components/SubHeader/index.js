import React from 'react';
import {View, Text, Image} from 'react-native';



import styles from './styles';
import Button from './../Button';


const SubHeader = () => (
  <View style={styles.container}>
    <Image style={styles.avatar}
           source={{uri: 'https://avatars0.githubusercontent.com/u/6172978?s=460&u=429ed7767e15d8e5202b1ea7f92b585cd5e2294f&v=4'}}/>
    <View style={styles.profileInfo}>
      <Text style={styles.name}>Thiago Demas</Text>
      <Text style={styles.bio}>Head de Programação na Rocketseat fazendo live de layout.</Text>

      <View style={styles.buttonContainer}>
        <Button style={styles.firstButton}>Message</Button>
        <Button type="outline">Follow</Button>
      </View>

      </View>

    </View>
);

export default SubHeader;
