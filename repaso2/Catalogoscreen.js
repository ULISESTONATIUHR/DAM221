/*1.Zona Importaciones */
import { useState } from 'react';
import "./assets/upq.logotipo.png"
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  ActivityIndicator,
  FlatList,
  Alert,
} from 'react-native';

/*2.Zona Render o Main*/
export default function Catalogoscreen() {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [genero, setGenero] = useState('');
  const [libros, setLibros] = useState([]);
  const [guardando, setGuardando] = useState(false);

  const agregarLibro = () => {
    
    if (!titulo.trim() || !autor.trim() || !genero.trim()) {
      Alert.alert('Alert', 'Todos los campos son obligatorios.');
      return;
    }

   
    setGuardando(true);

    setTimeout(() => {
     
      const nuevoLibro = {
        id: Date.now().toString(),
        titulo: titulo.trim(),
        autor: autor.trim(),
        genero: genero.trim(),
      };
      setLibros((anteriores) => [...anteriores, nuevoLibro]);

      
      setTitulo('');
      setAutor('');
      setGenero('');
      setGuardando(false);

      
      Alert.alert('Alert', 'Libro guardado correctamente.');
    }, 4000);
  };

  return (
    <ImageBackground
      source={require('./assets/upq.logotipo.png')}
      style={styles.fondo}
      resizeMode="cover">
      <SafeAreaView style={styles.safe}>
        <KeyboardAvoidingView style={styles.contenedor} behavior="padding">
          <Text style={styles.titulo}>Catálogo de Libros</Text>

          <TextInput
            style={styles.input}
            placeholder="Título del libro"
            placeholderTextColor="#aaa"
            value={titulo}
            onChangeText={setTitulo}
            editable={!guardando}
          />
          <TextInput
            style={styles.input}
            placeholder="Autor"
            placeholderTextColor="#aaa"
            value={autor}
            onChangeText={setAutor}
            editable={!guardando}
          />
          <TextInput
            style={styles.input}
            placeholder="Género"
            placeholderTextColor="#aaa"
            value={genero}
            onChangeText={setGenero}
            editable={!guardando}
          />

          <Pressable
            style={[styles.boton, guardando && styles.botonDeshabilitado]}
            onPress={agregarLibro}
            disabled={guardando}>
            <Text style={styles.botonTxt}>{guardando ? 'Guardando...' : 'Agregar Libro'}</Text>
          </Pressable>

          {guardando && (
            <View style={styles.cargando}>
              <ActivityIndicator size="large" color="#fff" />
              <Text style={styles.cargandoTxt}>Guardando libro...</Text>
            </View>
          )}

          <Text style={styles.total}>Total de libros: {libros.length}</Text>

          <FlatList
            data={libros}
            keyExtractor={(item) => item.id}
            style={styles.lista}
            ListEmptyComponent={<Text style={styles.vacio}>Aún no hay libros agregados</Text>}
            renderItem={({ item }) => (
              <View style={styles.tarjeta}>
                <Text style={styles.libroTitulo}>{item.titulo}</Text>
                <Text style={styles.libroTxt}>Autor: {item.autor}</Text>
                <Text style={styles.libroTxt}>Género: {item.genero}</Text>
              </View>
            )}
          />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ImageBackground>
  );
}

/*3.Zona de estilos y posicionamientos */
const styles = StyleSheet.create({
  fondo: { flex: 1 },
  safe: { flex: 1, paddingTop: 30 },
  contenedor: { flex: 1, paddingHorizontal: 14 },

  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 12,
  },
  input: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    color: '#000',
    marginBottom: 8,
  },
  boton: {
    backgroundColor: '#1e5fc2',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 4,
  },
  botonDeshabilitado: { backgroundColor: '#8e8e8e' },
  botonTxt: { color: '#fff', fontWeight: 'bold', fontSize: 15 },

  cargando: { alignItems: 'center', marginTop: 12 },
  cargandoTxt: { color: '#fff', marginTop: 6 },

  total: { color: '#fff', fontWeight: 'bold', marginTop: 12, marginBottom: 8 },

  lista: { flex: 1 },
  vacio: { color: '#fff', textAlign: 'center', marginTop: 20 },
  tarjeta: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 8,
    padding: 10,
    marginBottom: 8,
  },
  libroTitulo: { fontSize: 16, fontWeight: 'bold', color: '#000' },
  libroTxt: { fontSize: 14, color: '#333' },
});