/*1.Zona Importaciones */
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  FlatList,
  Pressable,
  Modal,
} from 'react-native';

/*2.Zona Render o Main*/


const USUARIOS = [
  { id: '1', nombre: 'Lulu' },
  { id: '2', nombre: 'Renata' },
  { id: '3', nombre: 'Luisa' },
];

export default function Interfaz1() {
 

  return (
    <SafeAreaView style={styles.container}>
    
      <View style={styles.header}>
        <Pressable style={styles.hamburguesa}>
          <View style={styles.linea} />
          <View style={styles.linea} />
          <View style={styles.linea} />
        </Pressable>
        <Text style={styles.titulo}>Banco de Tiempo{'\n'}y Talento</Text>
      </View>

     
      <FlatList
        data={USUARIOS}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
        renderItem={() => (
          <View style={styles.tarjeta}>
            <View style={styles.foto}>
              <Text style={styles.fotoTxt}>No image</Text>
            </View>

            <View style={styles.botones}>
              <Pressable style={styles.btn}>
                <Text style={styles.btnTxt}>Perfil usuario</Text>
              </Pressable>
              <Pressable style={styles.btn}>
                <Text style={styles.btnTxt}>Supervisar</Text>
              </Pressable>
              <Pressable style={styles.btn}>
                <Text style={styles.btnTxt}>Eliminar</Text>
              </Pressable>
            </View>
          </View>
        )}
      />

      
     

      <StatusBar style="light" />
    </SafeAreaView>
  );
}

/*3.Zona de estilos y posicionamientos */
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#4b2e5e' },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 100,
    paddingHorizontal: 20,
    backgroundColor: '#4b2e5e',
  },
  hamburguesa: { width: 32, padding: 2 },
  linea: { height: 3, backgroundColor: '#e8d9ee', marginVertical: 3, borderRadius: 2 },
  titulo: { flex: 1, color: '#fff', fontSize: 18, textAlign: 'center', marginRight: 32 },

  lista: { flexGrow: 1, backgroundColor: '#fffcd9', padding: 20 },
  tarjeta: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
    padding: 12,
    marginBottom: 16,
  },
  foto: {
    width: 110,
    height: 90,
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fotoTxt: { fontSize: 9, color: '#aaa' },
  botones: { flex: 1, alignItems: 'center', marginLeft: 8 },
  btn: {
    width: 120,
    backgroundColor: '#4b2e5e',
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
    marginVertical: 4,
  },
  btnTxt: { color: '#fff', fontSize: 15 },

  modalFila: { flex: 1, flexDirection: 'row' },
  menu: {
    width: '36%',
    backgroundColor: '#fffcd9',
    borderRightWidth: 1,
    borderColor: '#4b2e5e',
  },
  cerrar: { flex: 1 },
  logo: { alignItems: 'center', justifyContent: 'center', height: 125 },
  logoTxt: { fontSize: 22, fontWeight: 'bold', color: '#4b2e5e' },
  logoSub: { fontSize: 6, color: '#4b2e5e' },
  opcion: { padding: 12, borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#4b2e5e' },
  opcionCategoria: { paddingVertical: 16 },
  opcionTxt: { fontSize: 15, color: '#000' },
});