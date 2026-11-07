/*1.Zona Importaciones */
import { StyleSheet, View, Text, ImageBackground } from 'react-native';

/*2.Zona Render o Main*/
export default function PantallaPrincipal() {
  return (
    <View style={styles.container}>
      
      <ImageBackground
        source={require('./assets/UPQ-Logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.nombre}>repa2</Text>
    </View>
  );
}

/*3.Zona de estilos y posicionamientos */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: { width: 180, height: 180 },
  nombre: { fontSize: 18, fontWeight: '500', color: '#000', marginTop: 16 },
});