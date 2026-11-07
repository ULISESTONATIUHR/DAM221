/*1.Zona Importaciones */

import { StyleSheet, View, Text, Button} from 'react-native';
import { useState} from 'react';
import TarjetasScreen from './TarjetasScreen';
import SafeScreen from './SafeScreen';
import PressableScreen from './PressableScreen';
import Modal from './Modal';
import TexttInput from './TexttInput';
import FlattList from './FlattList';
import ActivitScreen from './ActivitScreen';








/*2.Zona Render o Main*/
export default function App() {
    const [screen,setScreen]=useState('menu');
    switch(screen){
        case 'tarjetas': 
            return <TarjetasScreen />;
        case 'ActivityIndicatorScreen':
            return <ActivityIndicatorScreen />;
        case 'safe': 
            return <SafeScreen />;
            
        case 'Pressable':
          return <PressableScreen/>;
        case 'FlattList':
          return <FlattList />;
        case 'ImageBackground':
          return <ImageBackground />;
        case 'Modal ':
          return <Modal />;
        case 'ActivitScreen':
          return <ActivitScreen/>;
        case 'TexttInput':
          return <TexttInput />;
          case 'menu':''
           default:
                 return (
                   <View style={styles.container}>
                    <Text>Menu de Practicas</Text>
                    <Button title="Practica :Tarjetas" onPress={ ()=>setScreen('tarjetas')}></Button>
                    <Button title="Practica :SafeAreaView" onPress={ ()=>setScreen('safe')}></Button>
                    <Button title="Practica :Pressable" onPress={ ()=>setScreen('Pressable')}></Button>
                    <Button title="Practica :TexttInput" onPress={ ()=>setScreen('TexttInput')}></Button>
                    <Button title="Practica :FlattList" onPress={ ()=>setScreen('FlattList')}></Button>
                    <Button title="Practica :ImageBackground" onPress={ ()=>setScreen('ImageBackground')}></Button>
                    <Button title="Practica :Modal" onPress={ ()=>setScreen('Modal')}></Button>
                    <Button title="Regresar" onPress={ ()=>setScreen('menu')}></Button>
                         <Button title="Practica :ActivityIndicator" onPress={ ()=>setScreen('ActivitScreen')}></Button>
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