/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View } from 'react-native';
import Product from './Product';
import { useNavigation } from '@react-navigation/native'

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
        promotion: '-30%',
        imageCompany: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAAAmCAMAAAD+1/mbAAAAh1BMVEX////3mlr3mVl3lMv3mln3mFb/+/n3l1P+8er6wZ76v5v2kUf3lE7+9/P5s4X82sb97OL5tov5r3/3o2v4qnX3nV9uk8/7yqv19/uKo9H3oGZpisf8mlHv8fj959v83877zrOrnrH71L36upPYnoffnn7Vqp2Cota3p7SlnLSlk6b9kz7alnchDxVbAAAEBElEQVRYhe2YWZfrJgyAgWsWB7wmHt+6U+za3dv///uqBWfxZNqZm5ycPFy9BLAkPoQscIT4oIzT7pB/VPmKFCDmBvt3xIRg7e4Gew+y3I/n6DdT8iYueZv9u36/hcvEql/c83FVPlhfPyFXkHLlsoD4hFxiAhnvjnU7112lqGN05oLLRXem4GKsi0sb4+pV4z+4TB1rszYuJ2R/hyTDbz8k+f2PNFN1CFh17H5KXLlbOhgY0n6YvKPnLffzbpDOLRkMyZ76nZJSDcOgamHgp8O63IBWXZCWqkTdWGh0yWFsccKwr6CtWV5/efnC8vLnK3PlXkuUzB6YSw3awkxSewpILaknM80JnVtlS9ZQHsB2/FgpBfpGaUXxLkGrVawVlmAzdBjI4eQ19sA/WNPU8gLLElf0qGKt1egPuaTKJBlaDIfoAFvBYxjwE3GBvlIanWehAC6ZxBenOlGCvk5+JLSpESaaEIYtkcJCtlg/20wTF7q1bd8vBz+tXAEg0V0Jz2dIHt3lfWkRzzBXFvZlg2BhFDtPYLAyby65ZAg6UCyTQ4sn1EFD6PtqgtXbXGyjZbPEBWr6wMno0j7uR2cqjEoLo62WSmPqTpYwOF4xpTtEwDl+4upabOI1OxNBSXVVctjAKxQy3ghYsDqI7SZCLJlrr88LA+c9tgbFXJAimg7iAgM7EVemENT4tNXndfWMS0nyrzjuAvrIhaABl1VjAonLTXzF3DhypXgduXarP+QCNwxaaF4ocukPcWXrfrRnXBTl+sS1xVq5YJ+kPVTmoVz4Xjri2mziiSunDA++jI/j0mXTNPRmiG20gIvrl/OK32XfPoxLUi3FWcUbLPn661dyVXkujDI0D+NSq4grWC/MJYodVLm1Lj6ES3WriCtYX74eX8NxwVVAdXpg3rO8wYLuiQvIUL16ZJ04cW2wLrjMe1xwjvFAYe/CRQEYz7m2WBdcLryzj1B31f4solzvjwPzZ7nqwOfRkesNFnO5oa9iHMH8et5jfbNNjDPesvDmQ+djX40TTMQnykglqZrnj3AJ9GOX6FysmllcwWKu0dsAovmYfsvl4FoCdTcEle4DVIjBBquLosDRiQIq7Ye4psD2KIu4gsVcpEaFFbPRZNmGS8zp3giXpqFYuViUr2gzBtLA7TYy+z8u0YZstd+Lv/72Sf75cRXiygN8/eHlaV+L8+94CQ0+z8fBowKsjg5Rvn+hTbAzJ0ltqRvMyb7FBjGvfvDuTICiJ3UbvC3hlrTKT0dhp0Wc+yWfYsp/kGJtrGUmTvnSV+lzAPNe1nO+5NXxDxJT5bt8dmf2xWruzhvFqt7vdv0c7/oHy7FOPJl85/qcfOf6nDwvl7bhGbm6Mp/v5exfgltYzsGsZJEAAAAASUVORK5CYII='

      },
      {
        id: 2,
        image: 'https://images3.kabum.com.br/produtos/fotos/78913/78913_1529333246_index_gg.jpg',
        title: 'Computador Gamer G-Fire AMD A6-7400K',
        description: '8GB, HD 1TB, Radeon R5 integrada, Linux - HTAVA R83',
        price: 'R$3.370,00',
        promotion: '-50%',
        imageCompany: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAAAmCAMAAAD+1/mbAAAAh1BMVEX////3mlr3mVl3lMv3mln3mFb/+/n3l1P+8er6wZ76v5v2kUf3lE7+9/P5s4X82sb97OL5tov5r3/3o2v4qnX3nV9uk8/7yqv19/uKo9H3oGZpisf8mlHv8fj959v83877zrOrnrH71L36upPYnoffnn7Vqp2Cota3p7SlnLSlk6b9kz7alnchDxVbAAAEBElEQVRYhe2YWZfrJgyAgWsWB7wmHt+6U+za3dv///uqBWfxZNqZm5ycPFy9BLAkPoQscIT4oIzT7pB/VPmKFCDmBvt3xIRg7e4Gew+y3I/n6DdT8iYueZv9u36/hcvEql/c83FVPlhfPyFXkHLlsoD4hFxiAhnvjnU7112lqGN05oLLRXem4GKsi0sb4+pV4z+4TB1rszYuJ2R/hyTDbz8k+f2PNFN1CFh17H5KXLlbOhgY0n6YvKPnLffzbpDOLRkMyZ76nZJSDcOgamHgp8O63IBWXZCWqkTdWGh0yWFsccKwr6CtWV5/efnC8vLnK3PlXkuUzB6YSw3awkxSewpILaknM80JnVtlS9ZQHsB2/FgpBfpGaUXxLkGrVawVlmAzdBjI4eQ19sA/WNPU8gLLElf0qGKt1egPuaTKJBlaDIfoAFvBYxjwE3GBvlIanWehAC6ZxBenOlGCvk5+JLSpESaaEIYtkcJCtlg/20wTF7q1bd8vBz+tXAEg0V0Jz2dIHt3lfWkRzzBXFvZlg2BhFDtPYLAyby65ZAg6UCyTQ4sn1EFD6PtqgtXbXGyjZbPEBWr6wMno0j7uR2cqjEoLo62WSmPqTpYwOF4xpTtEwDl+4upabOI1OxNBSXVVctjAKxQy3ghYsDqI7SZCLJlrr88LA+c9tgbFXJAimg7iAgM7EVemENT4tNXndfWMS0nyrzjuAvrIhaABl1VjAonLTXzF3DhypXgduXarP+QCNwxaaF4ocukPcWXrfrRnXBTl+sS1xVq5YJ+kPVTmoVz4Xjri2mziiSunDA++jI/j0mXTNPRmiG20gIvrl/OK32XfPoxLUi3FWcUbLPn661dyVXkujDI0D+NSq4grWC/MJYodVLm1Lj6ES3WriCtYX74eX8NxwVVAdXpg3rO8wYLuiQvIUL16ZJ04cW2wLrjMe1xwjvFAYe/CRQEYz7m2WBdcLryzj1B31f4solzvjwPzZ7nqwOfRkesNFnO5oa9iHMH8et5jfbNNjDPesvDmQ+djX40TTMQnykglqZrnj3AJ9GOX6FysmllcwWKu0dsAovmYfsvl4FoCdTcEle4DVIjBBquLosDRiQIq7Ye4psD2KIu4gsVcpEaFFbPRZNmGS8zp3giXpqFYuViUr2gzBtLA7TYy+z8u0YZstd+Lv/72Sf75cRXiygN8/eHlaV+L8+94CQ0+z8fBowKsjg5Rvn+hTbAzJ0ltqRvMyb7FBjGvfvDuTICiJ3UbvC3hlrTKT0dhp0Wc+yWfYsp/kGJtrGUmTvnSV+lzAPNe1nO+5NXxDxJT5bt8dmf2xWruzhvFqt7vdv0c7/oHy7FOPJl85/qcfOf6nDwvl7bhGbm6Mp/v5exfgltYzsGsZJEAAAAASUVORK5CYII='


      },
      {
        id: 3,
        image: 'https://images7.kabum.com.br/produtos/fotos/107267/monitor-gamer-led-lg-34-ultrawide-full-hd-ips-2-hdmi-displayport-freesync-144hz-1ms-altura-ajustavel-34gl750_monitor-gamer-led-lg-34-ultrawide-full-hd-ips-2-hdmi-displayport-freesync-144hz-1ms-altura-ajustavel-34gl750_1572618373_gg.jpg',
        title: 'Monitor Gamer LED LG 34',
        description: 'UltraWide Curvo, Full HD, IPS, 2 HDMI, DisplayPort, FreeSync, 144Hz, 1ms, Altura Ajustável - 34GL750',
        price: 'R$4.430,00',
        promotion: '-60%',
        imageCompany: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAAAmCAMAAAD+1/mbAAAAh1BMVEX////3mlr3mVl3lMv3mln3mFb/+/n3l1P+8er6wZ76v5v2kUf3lE7+9/P5s4X82sb97OL5tov5r3/3o2v4qnX3nV9uk8/7yqv19/uKo9H3oGZpisf8mlHv8fj959v83877zrOrnrH71L36upPYnoffnn7Vqp2Cota3p7SlnLSlk6b9kz7alnchDxVbAAAEBElEQVRYhe2YWZfrJgyAgWsWB7wmHt+6U+za3dv///uqBWfxZNqZm5ycPFy9BLAkPoQscIT4oIzT7pB/VPmKFCDmBvt3xIRg7e4Gew+y3I/n6DdT8iYueZv9u36/hcvEql/c83FVPlhfPyFXkHLlsoD4hFxiAhnvjnU7112lqGN05oLLRXem4GKsi0sb4+pV4z+4TB1rszYuJ2R/hyTDbz8k+f2PNFN1CFh17H5KXLlbOhgY0n6YvKPnLffzbpDOLRkMyZ76nZJSDcOgamHgp8O63IBWXZCWqkTdWGh0yWFsccKwr6CtWV5/efnC8vLnK3PlXkuUzB6YSw3awkxSewpILaknM80JnVtlS9ZQHsB2/FgpBfpGaUXxLkGrVawVlmAzdBjI4eQ19sA/WNPU8gLLElf0qGKt1egPuaTKJBlaDIfoAFvBYxjwE3GBvlIanWehAC6ZxBenOlGCvk5+JLSpESaaEIYtkcJCtlg/20wTF7q1bd8vBz+tXAEg0V0Jz2dIHt3lfWkRzzBXFvZlg2BhFDtPYLAyby65ZAg6UCyTQ4sn1EFD6PtqgtXbXGyjZbPEBWr6wMno0j7uR2cqjEoLo62WSmPqTpYwOF4xpTtEwDl+4upabOI1OxNBSXVVctjAKxQy3ghYsDqI7SZCLJlrr88LA+c9tgbFXJAimg7iAgM7EVemENT4tNXndfWMS0nyrzjuAvrIhaABl1VjAonLTXzF3DhypXgduXarP+QCNwxaaF4ocukPcWXrfrRnXBTl+sS1xVq5YJ+kPVTmoVz4Xjri2mziiSunDA++jI/j0mXTNPRmiG20gIvrl/OK32XfPoxLUi3FWcUbLPn661dyVXkujDI0D+NSq4grWC/MJYodVLm1Lj6ES3WriCtYX74eX8NxwVVAdXpg3rO8wYLuiQvIUL16ZJ04cW2wLrjMe1xwjvFAYe/CRQEYz7m2WBdcLryzj1B31f4solzvjwPzZ7nqwOfRkesNFnO5oa9iHMH8et5jfbNNjDPesvDmQ+djX40TTMQnykglqZrnj3AJ9GOX6FysmllcwWKu0dsAovmYfsvl4FoCdTcEle4DVIjBBquLosDRiQIq7Ye4psD2KIu4gsVcpEaFFbPRZNmGS8zp3giXpqFYuViUr2gzBtLA7TYy+z8u0YZstd+Lv/72Sf75cRXiygN8/eHlaV+L8+94CQ0+z8fBowKsjg5Rvn+hTbAzJ0ltqRvMyb7FBjGvfvDuTICiJ3UbvC3hlrTKT0dhp0Wc+yWfYsp/kGJtrGUmTvnSV+lzAPNe1nO+5NXxDxJT5bt8dmf2xWruzhvFqt7vdv0c7/oHy7FOPJl85/qcfOf6nDwvl7bhGbm6Mp/v5exfgltYzsGsZJEAAAAASUVORK5CYII='


      },
      {
        id: 4,
        image: 'https://images0.kabum.com.br/produtos/fotos/111540/notebook-gamer-asus-amd-ryzen-5-2500u-gtx-1050-8gb-1tb-windows-10-home-m509da_1583853005_gg.jpg',
        title: 'Notebook Asus AMD Ryzen 5 3500U',
        description: 'Vega 8, 8GB, 1TB, 15.6", Windows 10 Home - M509DA',
        price: 'R$3.370,00',
        promotion: '-10%',
        imageCompany: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAAAmCAMAAAD+1/mbAAAAh1BMVEX////3mlr3mVl3lMv3mln3mFb/+/n3l1P+8er6wZ76v5v2kUf3lE7+9/P5s4X82sb97OL5tov5r3/3o2v4qnX3nV9uk8/7yqv19/uKo9H3oGZpisf8mlHv8fj959v83877zrOrnrH71L36upPYnoffnn7Vqp2Cota3p7SlnLSlk6b9kz7alnchDxVbAAAEBElEQVRYhe2YWZfrJgyAgWsWB7wmHt+6U+za3dv///uqBWfxZNqZm5ycPFy9BLAkPoQscIT4oIzT7pB/VPmKFCDmBvt3xIRg7e4Gew+y3I/n6DdT8iYueZv9u36/hcvEql/c83FVPlhfPyFXkHLlsoD4hFxiAhnvjnU7112lqGN05oLLRXem4GKsi0sb4+pV4z+4TB1rszYuJ2R/hyTDbz8k+f2PNFN1CFh17H5KXLlbOhgY0n6YvKPnLffzbpDOLRkMyZ76nZJSDcOgamHgp8O63IBWXZCWqkTdWGh0yWFsccKwr6CtWV5/efnC8vLnK3PlXkuUzB6YSw3awkxSewpILaknM80JnVtlS9ZQHsB2/FgpBfpGaUXxLkGrVawVlmAzdBjI4eQ19sA/WNPU8gLLElf0qGKt1egPuaTKJBlaDIfoAFvBYxjwE3GBvlIanWehAC6ZxBenOlGCvk5+JLSpESaaEIYtkcJCtlg/20wTF7q1bd8vBz+tXAEg0V0Jz2dIHt3lfWkRzzBXFvZlg2BhFDtPYLAyby65ZAg6UCyTQ4sn1EFD6PtqgtXbXGyjZbPEBWr6wMno0j7uR2cqjEoLo62WSmPqTpYwOF4xpTtEwDl+4upabOI1OxNBSXVVctjAKxQy3ghYsDqI7SZCLJlrr88LA+c9tgbFXJAimg7iAgM7EVemENT4tNXndfWMS0nyrzjuAvrIhaABl1VjAonLTXzF3DhypXgduXarP+QCNwxaaF4ocukPcWXrfrRnXBTl+sS1xVq5YJ+kPVTmoVz4Xjri2mziiSunDA++jI/j0mXTNPRmiG20gIvrl/OK32XfPoxLUi3FWcUbLPn661dyVXkujDI0D+NSq4grWC/MJYodVLm1Lj6ES3WriCtYX74eX8NxwVVAdXpg3rO8wYLuiQvIUL16ZJ04cW2wLrjMe1xwjvFAYe/CRQEYz7m2WBdcLryzj1B31f4solzvjwPzZ7nqwOfRkesNFnO5oa9iHMH8et5jfbNNjDPesvDmQ+djX40TTMQnykglqZrnj3AJ9GOX6FysmllcwWKu0dsAovmYfsvl4FoCdTcEle4DVIjBBquLosDRiQIq7Ye4psD2KIu4gsVcpEaFFbPRZNmGS8zp3giXpqFYuViUr2gzBtLA7TYy+z8u0YZstd+Lv/72Sf75cRXiygN8/eHlaV+L8+94CQ0+z8fBowKsjg5Rvn+hTbAzJ0ltqRvMyb7FBjGvfvDuTICiJ3UbvC3hlrTKT0dhp0Wc+yWfYsp/kGJtrGUmTvnSV+lzAPNe1nO+5NXxDxJT5bt8dmf2xWruzhvFqt7vdv0c7/oHy7FOPJl85/qcfOf6nDwvl7bhGbm6Mp/v5exfgltYzsGsZJEAAAAASUVORK5CYII='


      },
      {
        id: 5,
        image: 'https://images7.kabum.com.br/produtos/fotos/70037/70037_index_gg.jpg',
        title: 'Monitor Philips LED',
        description: 'LCD 18.5", HDMI, VGA - UltraWide Curvo, Full HD, IPS, 2 HDMI, DisplayPort, FreeSync, 144Hz,',
        price: 'R$413,00',
        promotion: '-20%',
        imageCompany: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAAAmCAMAAAD+1/mbAAAAh1BMVEX////3mlr3mVl3lMv3mln3mFb/+/n3l1P+8er6wZ76v5v2kUf3lE7+9/P5s4X82sb97OL5tov5r3/3o2v4qnX3nV9uk8/7yqv19/uKo9H3oGZpisf8mlHv8fj959v83877zrOrnrH71L36upPYnoffnn7Vqp2Cota3p7SlnLSlk6b9kz7alnchDxVbAAAEBElEQVRYhe2YWZfrJgyAgWsWB7wmHt+6U+za3dv///uqBWfxZNqZm5ycPFy9BLAkPoQscIT4oIzT7pB/VPmKFCDmBvt3xIRg7e4Gew+y3I/n6DdT8iYueZv9u36/hcvEql/c83FVPlhfPyFXkHLlsoD4hFxiAhnvjnU7112lqGN05oLLRXem4GKsi0sb4+pV4z+4TB1rszYuJ2R/hyTDbz8k+f2PNFN1CFh17H5KXLlbOhgY0n6YvKPnLffzbpDOLRkMyZ76nZJSDcOgamHgp8O63IBWXZCWqkTdWGh0yWFsccKwr6CtWV5/efnC8vLnK3PlXkuUzB6YSw3awkxSewpILaknM80JnVtlS9ZQHsB2/FgpBfpGaUXxLkGrVawVlmAzdBjI4eQ19sA/WNPU8gLLElf0qGKt1egPuaTKJBlaDIfoAFvBYxjwE3GBvlIanWehAC6ZxBenOlGCvk5+JLSpESaaEIYtkcJCtlg/20wTF7q1bd8vBz+tXAEg0V0Jz2dIHt3lfWkRzzBXFvZlg2BhFDtPYLAyby65ZAg6UCyTQ4sn1EFD6PtqgtXbXGyjZbPEBWr6wMno0j7uR2cqjEoLo62WSmPqTpYwOF4xpTtEwDl+4upabOI1OxNBSXVVctjAKxQy3ghYsDqI7SZCLJlrr88LA+c9tgbFXJAimg7iAgM7EVemENT4tNXndfWMS0nyrzjuAvrIhaABl1VjAonLTXzF3DhypXgduXarP+QCNwxaaF4ocukPcWXrfrRnXBTl+sS1xVq5YJ+kPVTmoVz4Xjri2mziiSunDA++jI/j0mXTNPRmiG20gIvrl/OK32XfPoxLUi3FWcUbLPn661dyVXkujDI0D+NSq4grWC/MJYodVLm1Lj6ES3WriCtYX74eX8NxwVVAdXpg3rO8wYLuiQvIUL16ZJ04cW2wLrjMe1xwjvFAYe/CRQEYz7m2WBdcLryzj1B31f4solzvjwPzZ7nqwOfRkesNFnO5oa9iHMH8et5jfbNNjDPesvDmQ+djX40TTMQnykglqZrnj3AJ9GOX6FysmllcwWKu0dsAovmYfsvl4FoCdTcEle4DVIjBBquLosDRiQIq7Ye4psD2KIu4gsVcpEaFFbPRZNmGS8zp3giXpqFYuViUr2gzBtLA7TYy+z8u0YZstd+Lv/72Sf75cRXiygN8/eHlaV+L8+94CQ0+z8fBowKsjg5Rvn+hTbAzJ0ltqRvMyb7FBjGvfvDuTICiJ3UbvC3hlrTKT0dhp0Wc+yWfYsp/kGJtrGUmTvnSV+lzAPNe1nO+5NXxDxJT5bt8dmf2xWruzhvFqt7vdv0c7/oHy7FOPJl85/qcfOf6nDwvl7bhGbm6Mp/v5exfgltYzsGsZJEAAAAASUVORK5CYII='


      },
      {
        id: 6,
        image: 'https://images3.kabum.com.br/produtos/fotos/113373/computador-gamer-easypc-intel-core-i5-2400-8gb-1tb-nvidia-gt-210-linux-33676_1591197212_gg.jpg',
        title: 'Computador Gamer EasyPC',
        description: 'Intel Core i5-2400, 8GB, 1TB, NVIDIA GT 210, Linux - 33676',
        price: 'R$2.209,00',
        promotion: '-20%',
        imageCompany: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAE0ATQMBEQACEQEDEQH/xAAaAAEAAgMBAAAAAAAAAAAAAAAAAwQBAgUG/8QAMBAAAQQBAgYABAQHAAAAAAAAAQACAwQRBRITFCExUWEGQYGRFXFy4SIyQmOSocH/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAgMFBAEG/8QAMhEAAQQBAgIGCAcAAAAAAAAAAAECAxEEEiETUQUxQWFx4QYUIkNSkZKxM0RUcoLB8P/aAAwDAQACEQMRAD8AqdfJX39Hw46+SlAdfJSgOvkpQHXyUoDr5KUB18lKA6+SlAdfJSgOvkpQMIeBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEBNHVsS1pbMcEjoISBJIBkNz2yoOlY16MVd16iaRvVqvRNkM8na5eKxy8hhlfw43hvR7vA8lecaPUrL3TdT3hP0o6tlLU+h6tXY58+nWGMawyOcWdA0dyfCqZm471pr05FjsSdiW5i8zEWh6tNXjsRadYfFJjY4M757H8vaOzMdrlar0tAmJO5qORi0prW0fU7YmNajPJwXFsmGfyuHcfn6Xr8uBlanIlnjMWZ96Wrsay6XqELJXy0p2Nia10hczG0O7Er1uTC5URrk3PHY8rUVVauxDy0/Km3wn8sH8My4/h3YzhWcRmvh3v10Q4btGutuYs1bFQsFqF8RkYHsDxjc09ikcrJL0LdB8b46R6VZCpkAgPXfDGp09N+HLfObJGT2xFLDkbnRlgBIH1P2WLnwSTZTdG1JaL32a+FPHFju19q1XdR1aeu6S6pQkBZDUp3xHDG4jeI+EWh5H6nZyuOTDyNb063Oba8ru6+SHUzLg0MW6RrqTnVVZEHGnV1/ndcrWxaryOrwixuJHXrj5dwMD/AIp/iPh4cSt0qlrRHeNs2uRFtFpLLlezDqXxNR1ClrsfLPYAKDZDvztOW7O2Pnk+FS+N0OK6J8W/xdnXzLmvSXIbIyTbl5FK9J+IUOX07V4NOlp3bBsNkmMeQZHEO9/v6V0TeDJqkjV6Oa2tr7E27imReKzTG9Gq1y3vXau5c1K7Q1KXVqEeo1WPt1YOFLJIAxxG7PXz2+6qgjlhSOVWL7Kre2/YWTSRSrJGj09pEpfmcaLTon/D1zQvxTTxbittsB5mxG5pYB0d912OyHJktyeG7SqV1b9ZyNhauO7H1pqRb69in8bzV5rmnipYjsMjosYXxuyMgn7Lp6La9GP1pSq5SnpJzXPZpW9jza0zNCAuQUONWE/N1WZJHDfJhw+ixc7pr1SZYuBI/va20+dmji9Hess18Vjf3LS/YrSx8N2N7He2nKqZ0+jvy0qfw8zRb6Oq7f1qH6/IgL8f0n6BaMWdxfduTxQsT0ZX9XD9fkdpnxxq9em2vDExpawRtmZXG8NAwBnt/pQTozHkfqW+dKux0uwMiNmlMmHxR2/2OAy2ZHHdBMDnu5q1eHpTZUMSXotWbrMxfB1/0Wo2cT5tb+roqnLRmyt4ff4Ewq/3oP8AJccudw/duXwQ5+MnwqaSx8JwG9jsjOWHKlh5frTVdoc2lr2kr/IWNdqS6I11kggCAYHhBQwEFIEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQBAEAQG232vLJUNvtLFDb7SxQ2+0sUNvtLFDb7SxQ2+0sUNvtLFDb7SxQ2+0sUf/Z'

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
