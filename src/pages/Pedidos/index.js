import React from 'react';
import { View, Text } from 'react-native';
import Lista_veiculos from '../../components/Lista_veiculos/index'

//importando style
import styles from './style'

//pegando dados do auth
export default function Pedidos(){

 return (
   <View style={styles.container}>
    
    <Lista_veiculos/>

   </View>
  );
}

