/*1.Zona Importaciones */

import { StyleSheet, View, text } from 'react-native';



/*2.Zona Render o Main*/
export default function SafeScreen() {
  return (
    <View style={styles.container}>
      

<text>Practica 10</text>
<text>Diego o Saul</text>
     
    </View>
  );

}
/*3.Zona de estilos y posicionamientos */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    alignContent: 'space-evenly ',
  },
  

});