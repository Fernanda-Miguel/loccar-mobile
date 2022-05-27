import React, {useContext} from 'react';
import { View, Text, Button } from 'react-native';

import {useNavigation} from '@react-navigation/native';

//importando style
import styles from './style'

//importano os dados 
import { AuthContext } from '../../contexts/auth'
import Title_home from '../../components/Titulo_home';

export default function Home() {
  const navigation = useNavigation();

  //pegando os dados
  const {user} = useContext(AuthContext)

  return (
   <View style={styles.container}>
     
     <Title_home/>

     <Text style={styles.text}>Bem-vindo: {user.email}</Text>
     <Text style={styles.text}>Status: {user.status}</Text>

     <Button 
     title="Acessar pedidos" color={"#249ea4"}
     onPress={() => navigation.navigate("Pedidos")}
     />

   </View>
  );
}

