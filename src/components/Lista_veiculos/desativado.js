import React, { useState } from "react";
import { FlatList, SafeAreaView, Text, TouchableOpacity } from "react-native";
import styles from './style'; //exportando css style 

//importando a api
import api from '../../services/api';

const [veiculos, setVeiculos] = React.useState([]);

React.useEffect( () => {

  api.get("/api.php").then((response) => {

    //console.log(response.veiculos)
    setVeiculos(response.data);
  });

}, [])


const DATA = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: " {veiculos[]?.marca} ",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },

];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
  {/*  <Text style={[styles.title, textColor]}>{item.title}</Text> */}
  <Text style={[styles.title, textColor]}>veiculo: {veiculos[0].marca}{""}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#fff" : "#249ea4";
    const color = item.id === selectedId ? 'black' : 'white';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

export default App;