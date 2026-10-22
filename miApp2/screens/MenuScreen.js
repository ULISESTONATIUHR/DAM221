/*1.Zona Importaciones */

import { StyleSheet, View, Text, Button} from 'react-native';
import { useState} from 'react';
import TarjetasScreen from './TarjetasScreen';
import SafeScreen from './SafeScreen';




/*2.Zona Render o Main*/
export default function MenuScreen() {
    const [screen,setScreen]=useState('menu');
    

    switch(screen){
        case 'tarjetas': 
            return <TarjetasScreen />;
        case 'safe': 
            return <SafeScreen />;
        case 'menu':''
            default:
                 return (
                   <View style={styles.container}>
                    <Text>Menu de Practicas</Text>
                    <Button title="Practica :Tarjetas" onPress={ ()=>setScreen('tarjetas')}></Button>
                    <Button title="Practica :SafeAreaView" onPress={ ()=>setScreen('safe')}></Button>
                    <Button title="Practica :Pressable"  ></Button>
                   </View>
                );

}
}
/*3.Zona de estilos y posicionamientos */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    alignContent: 'space-evenly ',
  },
  

});