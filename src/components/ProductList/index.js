/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View } from 'react-native';
import Product from './Product';

import styles from './styles';

export default class ProductList extends Component {
  state = {
    products: [
      {
        id: 1,
        image: 'https://images8.kabum.com.br/produtos/fotos/112748/computador-gamer-brx-powered-by-asus-intel-core-i3-9100f-8gb-ssd-240gb-asus-nvidia-geforce-gtx-1650-4gb-windows-10-pro-pci39100f8gb24_1589483436_gg.jpg',
        title: 'Computador Gamer BRX Powered By Asus',
        description: 'Intel Core i3-9100F, 8GB, SSD 240GB, Asus NVIDIA GeForce GTX 1650 4GB, Windows 10 Pro',
        price: 'R$4.050,00',
        promotion: '-30%'

      },
      {
        id: 2,
        image: 'https://images3.kabum.com.br/produtos/fotos/78913/78913_1529333246_index_gg.jpg',
        title: 'Computador Gamer G-Fire AMD A6-7400K',
        description: '8GB, HD 1TB, Radeon R5 integrada, Linux - HTAVA R83',
        price: 'R$3.370,00',
        promotion: '-50%'

      },
      {
        id: 3,
        image: 'https://images7.kabum.com.br/produtos/fotos/107267/monitor-gamer-led-lg-34-ultrawide-full-hd-ips-2-hdmi-displayport-freesync-144hz-1ms-altura-ajustavel-34gl750_monitor-gamer-led-lg-34-ultrawide-full-hd-ips-2-hdmi-displayport-freesync-144hz-1ms-altura-ajustavel-34gl750_1572618373_gg.jpg',
        title: 'Monitor Gamer LED LG 34',
        description: 'UltraWide Curvo, Full HD, IPS, 2 HDMI, DisplayPort, FreeSync, 144Hz, 1ms, Altura Ajustável - 34GL750',
        price: 'R$4.430,00',
        promotion: '-60%'

      },
      {
        id: 4,
        image: 'https://images0.kabum.com.br/produtos/fotos/111540/notebook-gamer-asus-amd-ryzen-5-2500u-gtx-1050-8gb-1tb-windows-10-home-m509da_1583853005_gg.jpg',
        title: 'Notebook Asus AMD Ryzen 5 3500U',
        description: 'Vega 8, 8GB, 1TB, 15.6", Windows 10 Home - M509DA',
        price: 'R$3.370,00',
        promotion: '-10%'

      },
      {
        id: 5,
        image: 'https://images7.kabum.com.br/produtos/fotos/70037/70037_index_gg.jpg',
        title: 'Monitor Philips LED',
        description: 'LCD 18.5", HDMI, VGA - UltraWide Curvo, Full HD, IPS, 2 HDMI, DisplayPort, FreeSync, 144Hz,',
        price: 'R$413,00',
        promotion: '-20%'

      },
      {
        id: 6,
        image: 'https://images3.kabum.com.br/produtos/fotos/113373/computador-gamer-easypc-intel-core-i5-2400-8gb-1tb-nvidia-gt-210-linux-33676_1591197212_gg.jpg',
        title: 'Computador Gamer EasyPC',
        description: 'Intel Core i5-2400, 8GB, 1TB, NVIDIA GT 210, Linux - 33676',
        price: 'R$2.209,00',
        promotion: '-20%'
      }
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        { this.state.products.map(product => <Product key={product.id} product={product} />) }
      </View>
    );
  }
}
