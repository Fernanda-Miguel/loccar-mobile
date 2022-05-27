import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

//importando style
import styles from './style'

//pegando os dados para o login
import {AuthContext} from '../../contexts/auth'

export default function Login() {
 const [email, setEmail] = useState('');
 const [senha, setSenha] = useState('');

 //usando o signin do auth
 const {signIn} = useContext (AuthContext);

 function handleLogin(){
  signIn(email, senha)
 }

 return (
   <View style={styles.container}>
     <Icon name="automobile" size={100} color="#fff" />
     <Text style={styles.title}>Seja bem-vindo(a)!</Text>

     <TextInput
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder="Digite seu email"
     />

     <TextInput
        style={styles.input}
        value={senha}
        onChangeText={(text) => setSenha(text)}
        placeholder="Digite sua senha"
     />

     <TouchableOpacity style={styles.button} onPress={handleLogin}>
       <Text style={styles.buttonText}>Acessar</Text>
     </TouchableOpacity>
   </View>
  );
}

