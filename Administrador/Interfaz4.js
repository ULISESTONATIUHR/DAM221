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
const USUARIOS = [
  { id: '1', matricula: '125053572', nombre: 'Ulises Tonatiuh Acatecatl Ramirez' },
  { id: '2', matricula: '125053572', nombre: 'Ulises Tonatiuh Acatecatl Ramirez' },
  { id: '3', matricula: '125053572', nombre: 'Ulises Tonatiuh Acatecatl Ramirez' },
];

export default function Interfaz4() {
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

        {/* Lista de usuarios */}
        <FlatList
          data={USUARIOS}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.lista}
          renderItem={({ item }) => (
            <View style={styles.tarjeta}>
              <View style={styles.avatar}>
                <View style={styles.avatarCabeza} />
                <View style={styles.avatarCuerpo} />
              </View>

              <View style={styles.datos}>
                <Text style={styles.txt}>ID:{item.matricula}</Text>
                <Text style={styles.txt}>Nombre:</Text>
                <Text style={styles.txt}>{item.nombre}</Text>
                <Pressable style={styles.btn}>
                  <Text style={styles.btnTxt}>Perfil usuario</Text>
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

  cuerpo: { flex: 1, backgroundColor: '#fffcd9', paddingHorizontal: 14 },

  buscador: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    width: '65%',
    height: 30,
    marginTop: 20,
    marginBottom: 26,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 15,
  },
  lupa: { fontSize: 12, marginRight: 4 },
  input: { flex: 1, padding: 0, fontSize: 14, color: '#000' },

  lista: { paddingBottom: 20 },
  tarjeta: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 18,
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginBottom: 14,
  },

  /* Avatar circular dibujado con Views */
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#636363',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    marginRight: 14,
    marginLeft: 8,
  },
  avatarCabeza: { width: 16, height: 16, borderRadius: 8, backgroundColor: '#fff', marginBottom: 2 },
  avatarCuerpo: {
    width: 28,
    height: 14,
    borderTopLeftRadius: 14,
    borderTopRightRadius: 14,
    backgroundColor: '#fff',
  },

  datos: { flex: 1 },
  txt: { fontSize: 14, color: '#000' },
  btn: {
    backgroundColor: '#4b2e5e',
    paddingVertical: 8,
    borderRadius: 18,
    alignItems: 'center',
    marginTop: 4,
  },
  btnTxt: { color: '#fff', fontSize: 14 },
});