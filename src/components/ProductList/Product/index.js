/* Core */
import React from 'react';

/* Presentational */
import { View, Image, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from './styles';

const Product = ({ product: { image, title, description, price, promotion } }) => (
  <View style={styles.container}>
      <Text style={styles.checkIcon}> {promotion}</Text>
    <View style={styles.imageContainer}>
      <Image source={{ uri: image }} style={styles.image} />
    </View>
    <View style={styles.infoContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
  </View>
);

export default Product;
