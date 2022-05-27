import { Text, View } from 'react-native'
import  React from 'react'
import styles from './style'; //exportando css style 
import Icon from 'react-native-vector-icons/FontAwesome';
export default function Title_home() {
    
    //aqui fica o titulo dos forms

    return (

      <View style={styles.boxTitle}>

        <Icon name="automobile" size={100} color="#fff" />

        <Text style={styles.textTitle}>Loccar</Text>

      </View>

    );
  }