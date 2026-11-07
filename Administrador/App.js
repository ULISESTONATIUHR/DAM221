/*1.Zona Importaciones */

import { StyleSheet, View, Text, Button} from 'react-native';
import { useState} from 'react';
import Interfaz1 from './Interfaz1';
import Interfaz2 from './Interfaz2';
import Interfaz3 from './Interfaz3';
import Interfaz4 from './Interfaz4';
import Interfaz5 from './Interfaz5';




/*2.Zona Render o Main*/
export default function App() {
    const [screen,setScreen]=useState('menu');
    switch(screen){
        case 'Interfaz1': 
            return <Interfaz1 />;
        case 'Interfaz2': 
            return <Interfaz2/>;
        case 'Interfaz3':
          return <Interfaz3/>;
        case 'Interfaz4':
          return <Interfaz4/>;
        case 'Interfaz5':
          return <Interfaz5/>;
       
          case 'menu':''
           default:
                 return (
                   <View style={styles.container}>
                    <Text>Menu de Interfaces Administrador</Text>
                    <Button title="Interfaz1" onPress={ ()=>setScreen('Interfaz1')}></Button>
                    <Button title="Interfaz2" onPress={ ()=>setScreen('Interfaz2')}></Button>
                    <Button title="Interfaz3 " onPress={ ()=>setScreen('Interfaz3')}></Button>
                    <Button title="Interfaz4" onPress={ ()=>setScreen('Interfaz4')}></Button>
                    <Button title="Interfaz5" onPress={ ()=>setScreen('Interfaz5')}></Button>
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