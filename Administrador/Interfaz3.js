/*1.Zona Importaciones */
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  FlatList,
  Pressable,
  TextInput,
} from 'react-native';

/*2.Zona Render o Main*/
const REPORTES = [
  {
    id: '47573893',
    fecha: '02/10/2026',
    hora: '08:35 p. m.',
    usuario: 'Juan Pérez',
    descripcion: 'Al ingresar el usuario y contraseña, el sistema no permite iniciar sesión.',
  },
];

export default function Interfaz3() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Encabezado */}
      <View style={styles.header}>
        <View style={styles.headerTitulo}>
          <Text style={styles.titulo}>Banco de Tiempo{'\n'}y Talento</Text>
        </View>
        <Pressable style={styles.regresar}>
          <Text style={styles.regresarTxt}>Regresar</Text>
        </Pressable>
      </View>

      <View style={styles.cuerpo}>
        {/* Buscador */}
        <View style={styles.buscador}>
          <Text style={styles.lupa}>🔍</Text>
          <TextInput style={styles.input} placeholder="ID" placeholderTextColor="#000" />
        </View>

        <Text style={styles.recientes}>MAS RECIENTES</Text>

        {/* Lista de reportes */}
        <FlatList
          data={REPORTES}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.tarjeta}>
              <View style={styles.detalle}>
                <Text style={styles.txt}>ID del reporte: {item.id}</Text>
                <Text style={styles.txt}>Fecha: {item.fecha}</Text>
                <Text style={styles.txt}>Hora: {item.hora}</Text>
                <Text style={styles.txt}>Usuario que reporta: {item.usuario}</Text>
                <Text style={styles.txt}>Descripción del problema: {item.descripcion}</Text>
              </View>

              <View style={styles.acciones}>
                <Pressable style={[styles.icono, styles.rechazar]}>
                  <Text style={styles.iconoTxt}>✕</Text>
                </Pressable>
                <Pressable style={[styles.icono, styles.aceptar]}>
                  <Text style={styles.iconoTxt}>✓</Text>
                </Pressable>
              </View>
            </View>
          )}
        />
      </View>

      <StatusBar style="light" />
    </SafeAreaView>
  );
}

/*3.Zona de estilos y posicionamientos */
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#4b2e5e' },

  header: { flexDirection: 'row', height: 85 },
  headerTitulo: { flex: 2.2, backgroundColor: '#4b2e5e', alignItems: 'center', justifyContent: 'center' },
  titulo: { color: '#fff', fontSize: 16, textAlign: 'center' },
  regresar: {
    flex: 1.2,
    backgroundColor: '#fffcd9',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#4b2e5e',
  },
  regresarTxt: { fontSize: 15, color: '#000' },

  cuerpo: { flex: 1, backgroundColor: '#fffcd9', padding: 14 },

  buscador: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    width: '65%',
    height: 30,
    marginTop: 10,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 15,
  },
  lupa: { fontSize: 12, marginRight: 4 },
  input: { flex: 1, padding: 0, fontSize: 14, color: '#000' },

  recientes: { textAlign: 'center', fontSize: 16, marginTop: 40, marginBottom: 40, color: '#000' },

  tarjeta: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
  },
  detalle: { flex: 1.6, padding: 6, borderRightWidth: 1, borderColor: '#000' },
  txt: { fontSize: 14, color: '#000' },
  acciones: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  icono: {
    width: 50,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
  },
  rechazar: { backgroundColor: '#b3262d' },
  aceptar: { backgroundColor: '#5db83a' },
  iconoTxt: { fontSize: 18, color: '#000' },
});