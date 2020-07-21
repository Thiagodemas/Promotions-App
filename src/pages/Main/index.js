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
        imageCompany: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAAAmCAMAAAD+1/mbAAAAh1BMVEX////3mlr3mVl3lMv3mln3mFb/+/n3l1P+8er6wZ76v5v2kUf3lE7+9/P5s4X82sb97OL5tov5r3/3o2v4qnX3nV9uk8/7yqv19/uKo9H3oGZpisf8mlHv8fj959v83877zrOrnrH71L36upPYnoffnn7Vqp2Cota3p7SlnLSlk6b9kz7alnchDxVbAAAEBElEQVRYhe2YWZfrJgyAgWsWB7wmHt+6U+za3dv///uqBWfxZNqZm5ycPFy9BLAkPoQscIT4oIzT7pB/VPmKFCDmBvt3xIRg7e4Gew+y3I/n6DdT8iYueZv9u36/hcvEql/c83FVPlhfPyFXkHLlsoD4hFxiAhnvjnU7112lqGN05oLLRXem4GKsi0sb4+pV4z+4TB1rszYuJ2R/hyTDbz8k+f2PNFN1CFh17H5KXLlbOhgY0n6YvKPnLffzbpDOLRkMyZ76nZJSDcOgamHgp8O63IBWXZCWqkTdWGh0yWFsccKwr6CtWV5/efnC8vLnK3PlXkuUzB6YSw3awkxSewpILaknM80JnVtlS9ZQHsB2/FgpBfpGaUXxLkGrVawVlmAzdBjI4eQ19sA/WNPU8gLLElf0qGKt1egPuaTKJBlaDIfoAFvBYxjwE3GBvlIanWehAC6ZxBenOlGCvk5+JLSpESaaEIYtkcJCtlg/20wTF7q1bd8vBz+tXAEg0V0Jz2dIHt3lfWkRzzBXFvZlg2BhFDtPYLAyby65ZAg6UCyTQ4sn1EFD6PtqgtXbXGyjZbPEBWr6wMno0j7uR2cqjEoLo62WSmPqTpYwOF4xpTtEwDl+4upabOI1OxNBSXVVctjAKxQy3ghYsDqI7SZCLJlrr88LA+c9tgbFXJAimg7iAgM7EVemENT4tNXndfWMS0nyrzjuAvrIhaABl1VjAonLTXzF3DhypXgduXarP+QCNwxaaF4ocukPcWXrfrRnXBTl+sS1xVq5YJ+kPVTmoVz4Xjri2mziiSunDA++jI/j0mXTNPRmiG20gIvrl/OK32XfPoxLUi3FWcUbLPn661dyVXkujDI0D+NSq4grWC/MJYodVLm1Lj6ES3WriCtYX74eX8NxwVVAdXpg3rO8wYLuiQvIUL16ZJ04cW2wLrjMe1xwjvFAYe/CRQEYz7m2WBdcLryzj1B31f4solzvjwPzZ7nqwOfRkesNFnO5oa9iHMH8et5jfbNNjDPesvDmQ+djX40TTMQnykglqZrnj3AJ9GOX6FysmllcwWKu0dsAovmYfsvl4FoCdTcEle4DVIjBBquLosDRiQIq7Ye4psD2KIu4gsVcpEaFFbPRZNmGS8zp3giXpqFYuViUr2gzBtLA7TYy+z8u0YZstd+Lv/72Sf75cRXiygN8/eHlaV+L8+94CQ0+z8fBowKsjg5Rvn+hTbAzJ0ltqRvMyb7FBjGvfvDuTICiJ3UbvC3hlrTKT0dhp0Wc+yWfYsp/kGJtrGUmTvnSV+lzAPNe1nO+5NXxDxJT5bt8dmf2xWruzhvFqt7vdv0c7/oHy7FOPJl85/qcfOf6nDwvl7bhGbm6Mp/v5exfgltYzsGsZJEAAAAASUVORK5CYII='

      },
      {
        id: 2,
        image: 'https://img.ibxk.com.br/2019/11/25/25163659465126.jpg?w=1120&h=420&mode=crop&scale=both',
        title: 'Computador Gamer G-Fire AMD A6-7400K',
        description: '8GB, HD 1TB, Radeon R5 integrada, Linux - HTAVA R83',
        price: 'R$3.370,00',
        promotion: '-50%',
        imageCompany: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAAAmCAMAAAD+1/mbAAAAh1BMVEX////3mlr3mVl3lMv3mln3mFb/+/n3l1P+8er6wZ76v5v2kUf3lE7+9/P5s4X82sb97OL5tov5r3/3o2v4qnX3nV9uk8/7yqv19/uKo9H3oGZpisf8mlHv8fj959v83877zrOrnrH71L36upPYnoffnn7Vqp2Cota3p7SlnLSlk6b9kz7alnchDxVbAAAEBElEQVRYhe2YWZfrJgyAgWsWB7wmHt+6U+za3dv///uqBWfxZNqZm5ycPFy9BLAkPoQscIT4oIzT7pB/VPmKFCDmBvt3xIRg7e4Gew+y3I/n6DdT8iYueZv9u36/hcvEql/c83FVPlhfPyFXkHLlsoD4hFxiAhnvjnU7112lqGN05oLLRXem4GKsi0sb4+pV4z+4TB1rszYuJ2R/hyTDbz8k+f2PNFN1CFh17H5KXLlbOhgY0n6YvKPnLffzbpDOLRkMyZ76nZJSDcOgamHgp8O63IBWXZCWqkTdWGh0yWFsccKwr6CtWV5/efnC8vLnK3PlXkuUzB6YSw3awkxSewpILaknM80JnVtlS9ZQHsB2/FgpBfpGaUXxLkGrVawVlmAzdBjI4eQ19sA/WNPU8gLLElf0qGKt1egPuaTKJBlaDIfoAFvBYxjwE3GBvlIanWehAC6ZxBenOlGCvk5+JLSpESaaEIYtkcJCtlg/20wTF7q1bd8vBz+tXAEg0V0Jz2dIHt3lfWkRzzBXFvZlg2BhFDtPYLAyby65ZAg6UCyTQ4sn1EFD6PtqgtXbXGyjZbPEBWr6wMno0j7uR2cqjEoLo62WSmPqTpYwOF4xpTtEwDl+4upabOI1OxNBSXVVctjAKxQy3ghYsDqI7SZCLJlrr88LA+c9tgbFXJAimg7iAgM7EVemENT4tNXndfWMS0nyrzjuAvrIhaABl1VjAonLTXzF3DhypXgduXarP+QCNwxaaF4ocukPcWXrfrRnXBTl+sS1xVq5YJ+kPVTmoVz4Xjri2mziiSunDA++jI/j0mXTNPRmiG20gIvrl/OK32XfPoxLUi3FWcUbLPn661dyVXkujDI0D+NSq4grWC/MJYodVLm1Lj6ES3WriCtYX74eX8NxwVVAdXpg3rO8wYLuiQvIUL16ZJ04cW2wLrjMe1xwjvFAYe/CRQEYz7m2WBdcLryzj1B31f4solzvjwPzZ7nqwOfRkesNFnO5oa9iHMH8et5jfbNNjDPesvDmQ+djX40TTMQnykglqZrnj3AJ9GOX6FysmllcwWKu0dsAovmYfsvl4FoCdTcEle4DVIjBBquLosDRiQIq7Ye4psD2KIu4gsVcpEaFFbPRZNmGS8zp3giXpqFYuViUr2gzBtLA7TYy+z8u0YZstd+Lv/72Sf75cRXiygN8/eHlaV+L8+94CQ0+z8fBowKsjg5Rvn+hTbAzJ0ltqRvMyb7FBjGvfvDuTICiJ3UbvC3hlrTKT0dhp0Wc+yWfYsp/kGJtrGUmTvnSV+lzAPNe1nO+5NXxDxJT5bt8dmf2xWruzhvFqt7vdv0c7/oHy7FOPJl85/qcfOf6nDwvl7bhGbm6Mp/v5exfgltYzsGsZJEAAAAASUVORK5CYII='


      },
      {
        id: 3,
        image: 'https://lh3.googleusercontent.com/29dRafseDDukId_o-0nnghHhwJy8aOdIwaS4U2_BWHFecl9WcDL1BPKDf3WevdSZxLo',
        title: 'Monitor Gamer LED LG 34',
        description: 'UltraWide Curvo, Full HD, IPS, 2 HDMI, DisplayPort, FreeSync, 144Hz, 1ms, Altura Ajustável - 34GL750',
        price: 'R$4.430,00',
        promotion: '-60%',
        imageCompany: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAAAmCAMAAAD+1/mbAAAAh1BMVEX////3mlr3mVl3lMv3mln3mFb/+/n3l1P+8er6wZ76v5v2kUf3lE7+9/P5s4X82sb97OL5tov5r3/3o2v4qnX3nV9uk8/7yqv19/uKo9H3oGZpisf8mlHv8fj959v83877zrOrnrH71L36upPYnoffnn7Vqp2Cota3p7SlnLSlk6b9kz7alnchDxVbAAAEBElEQVRYhe2YWZfrJgyAgWsWB7wmHt+6U+za3dv///uqBWfxZNqZm5ycPFy9BLAkPoQscIT4oIzT7pB/VPmKFCDmBvt3xIRg7e4Gew+y3I/n6DdT8iYueZv9u36/hcvEql/c83FVPlhfPyFXkHLlsoD4hFxiAhnvjnU7112lqGN05oLLRXem4GKsi0sb4+pV4z+4TB1rszYuJ2R/hyTDbz8k+f2PNFN1CFh17H5KXLlbOhgY0n6YvKPnLffzbpDOLRkMyZ76nZJSDcOgamHgp8O63IBWXZCWqkTdWGh0yWFsccKwr6CtWV5/efnC8vLnK3PlXkuUzB6YSw3awkxSewpILaknM80JnVtlS9ZQHsB2/FgpBfpGaUXxLkGrVawVlmAzdBjI4eQ19sA/WNPU8gLLElf0qGKt1egPuaTKJBlaDIfoAFvBYxjwE3GBvlIanWehAC6ZxBenOlGCvk5+JLSpESaaEIYtkcJCtlg/20wTF7q1bd8vBz+tXAEg0V0Jz2dIHt3lfWkRzzBXFvZlg2BhFDtPYLAyby65ZAg6UCyTQ4sn1EFD6PtqgtXbXGyjZbPEBWr6wMno0j7uR2cqjEoLo62WSmPqTpYwOF4xpTtEwDl+4upabOI1OxNBSXVVctjAKxQy3ghYsDqI7SZCLJlrr88LA+c9tgbFXJAimg7iAgM7EVemENT4tNXndfWMS0nyrzjuAvrIhaABl1VjAonLTXzF3DhypXgduXarP+QCNwxaaF4ocukPcWXrfrRnXBTl+sS1xVq5YJ+kPVTmoVz4Xjri2mziiSunDA++jI/j0mXTNPRmiG20gIvrl/OK32XfPoxLUi3FWcUbLPn661dyVXkujDI0D+NSq4grWC/MJYodVLm1Lj6ES3WriCtYX74eX8NxwVVAdXpg3rO8wYLuiQvIUL16ZJ04cW2wLrjMe1xwjvFAYe/CRQEYz7m2WBdcLryzj1B31f4solzvjwPzZ7nqwOfRkesNFnO5oa9iHMH8et5jfbNNjDPesvDmQ+djX40TTMQnykglqZrnj3AJ9GOX6FysmllcwWKu0dsAovmYfsvl4FoCdTcEle4DVIjBBquLosDRiQIq7Ye4psD2KIu4gsVcpEaFFbPRZNmGS8zp3giXpqFYuViUr2gzBtLA7TYy+z8u0YZstd+Lv/72Sf75cRXiygN8/eHlaV+L8+94CQ0+z8fBowKsjg5Rvn+hTbAzJ0ltqRvMyb7FBjGvfvDuTICiJ3UbvC3hlrTKT0dhp0Wc+yWfYsp/kGJtrGUmTvnSV+lzAPNe1nO+5NXxDxJT5bt8dmf2xWruzhvFqt7vdv0c7/oHy7FOPJl85/qcfOf6nDwvl7bhGbm6Mp/v5exfgltYzsGsZJEAAAAASUVORK5CYII='


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
