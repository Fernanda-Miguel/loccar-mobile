import * as React from 'react';
import { Text, View, Button, StyleSheet, ScrollText } from 'react-native';
import useAxios from 'axios-hooks';

import { Card } from 'react-native-paper';

export default function App() {
   const [{ data, loading, error }, refetch] = useAxios(
   
    //para fazer a listagem da api necessario hospedar o sistema
    'https://loccar123.000webhostapp.com/app/api/api.php',
    {
      manual: true,
    }
  )

  if (loading) return <Text style={styles.button}>Carregando...</Text>
  if (error) return <ScrollText>{JSON.stringify(error, null, 2)}</ScrollText>

    return (
      <View style={styles.container}>
        <Button color={"#249ea4"} onPress={()=> refetch({
          data: {
            delay: 2
          }
        })} title="Carregar os dados" />
        <Text style={styles.paragraph}>{JSON.stringify(data, null, 2)}</Text>
      </View>
    );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  paragraph: {
    marginTop: 8,
    color: "#fff",
  },
  button: {
     color: "#fff",
     fontSize: 30,
  }
});
