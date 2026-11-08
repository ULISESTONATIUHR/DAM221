//1. Zona importaciones
import { StyleSheet, Text, View, Image, } from 'react-native';
import MenuScreen from './screens/MenuScreen';


//2. Zona Render o Main
export default function App() {
  return (
    //View es importante para cuando tengamos muchos componentes
    <View style={styles.container}>
      
        <MenuScreen></MenuScreen>

    </View>
  );
}

//3. Zona de estilos y posicionamientos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

});