import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "#003d40",
    },
    title:{
      marginBottom: 14,
      fontSize: 20,
      marginTop: 10,
      fontSize: 24,
      color:"#fff",
    },
    input:{ //input text
      width: '90%',
      height: 45,
      backgroundColor: '#fff',
      borderRadius: 4,
      marginBottom: 14,
      padding: 8,
    },
    button:{ //botao acessar
      width: '90%',
      height: 45,
      backgroundColor: '#249ea4',
      borderRadius: 4,
      justifyContent: 'center',
      alignItems: 'center'
    },
    buttonText:{
      fontSize: 20,
      color: '#FFF'
    }
  })

  export default styles