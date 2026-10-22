
/*1.Zona Importaciones */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, } from 'react-native';

import {Perfil} from '../components/Perfil';


/*2.Zona Render o Main*/
export default function TarjetasScreen() {
  return (
    <View style={styles.container}>
      

      <Perfil style={styles.tarjetas1} nombre="lulu" carrera="ITTID" materia="Movil" cuatri="4"/>

      <Perfil style={styles.tarjetas2} nombre="Renata" carrera="ITTID" materia="Movil" cuatri="4"/>

      <Perfil style={styles.tarjetas3} nombre="Luisa" carrera="ITTID" materia="Movil" cuatri="4"/> 
      
      <StatusBar style="auto" />




      
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
  tarjetas1:{backgroundColor: '#467a03'},
    tarjetas2:{backgroundColor: '#bb630c'},
    tarjetas3:{backgroundColor: '#aa0d0d'},

});