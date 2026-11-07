/*1.Zona Importaciones */
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  FlatList,
  Pressable,
} from 'react-native';

/*2.Zona Render o Main*/
const HISTORIAL = [{ id: '1' }, { id: '2' }];

export default function Interfaz2() {
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
 
        <View style={styles.datos}>
          <View style={styles.foto}>
            <Text style={styles.fotoTxt}>No image</Text>
          </View>

          <View style={styles.info}>
            <Text style={styles.infoTxt}>ID:125053572</Text>
            <Text style={styles.infoTxt}>Nombre:</Text>
            <Text style={styles.infoTxt}>Ulises Tonatiuh Acatecatl Ramirez</Text>
            <Text style={styles.infoTxt}>Edad:19</Text>
            <Text style={styles.infoTxt}>Contacto: 4436728745</Text>
          </View>
        </View>

        {/* Créditos */}
        <View style={styles.creditos}>
          <View style={styles.medalla}>
            <View style={styles.cinta} />
            <View style={styles.circulo}>
              <Text style={styles.estrella}>★</Text>
            </View>
          </View>
          <View style={styles.creditosTxtBox}>
            <Text style={styles.creditosTxt}>100 creditos</Text>
            <View style={styles.barra} />
          </View>
        </View>

        {/* Historial */}
        <Text style={styles.historial}>HISTORIAL</Text>

        <FlatList
          data={HISTORIAL}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          style={styles.listaHistorial}
          renderItem={() => (
            <View style={styles.tarjeta}>
              <View style={styles.fotoPequena}>
                <Text style={styles.fotoTxt}>No image</Text>
              </View>

              <View style={styles.botones}>
                <Pressable style={styles.btn}>
                  <Text style={styles.btnTxt}>Perfil usuario</Text>
                </Pressable>
                <Pressable style={styles.btn}>
                  <Text style={styles.btnTxt}>Supervisar</Text>
                </Pressable>
              </View>
            </View>
          )}
        />

        {/* Acciones de la cuenta */}
        <View style={styles.acciones}>
          <Pressable style={styles.btnCuenta}>
            <Text style={styles.btnTxt}>Eliminar Cuenta</Text>
          </Pressable>
          <Pressable style={styles.btnCuenta}>
            <Text style={[styles.btnTxt, { textAlign: 'center' }]}>Bloquear{'\n'}Cuenta</Text>
          </Pressable>
        </View>
      </View>

      <StatusBar style="light" />
    </SafeAreaView>
  );
}

/*3.Zona de estilos y posicionamientos */
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#4b2e5e' },

  header: { flexDirection: 'row', height: 82 },
  headerTitulo: { flex: 2.6, backgroundColor: '#4b2e5e', alignItems: 'center', justifyContent: 'center' },
  titulo: { color: '#fff', fontSize: 16, textAlign: 'center' },
  regresar: {
    flex: 1,
    backgroundColor: '#fffcd9',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#000',
  },
  regresarTxt: { fontSize: 15, color: '#000' },

  cuerpo: { flex: 1, backgroundColor: '#fffcd9', padding: 12 },

  datos: { flexDirection: 'row', marginTop: 10 },
  foto: {
    width: 120,
    height: 120,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fotoTxt: { fontSize: 9, color: '#aaa' },
  info: { flex: 1, marginLeft: 12 },
  infoTxt: { fontSize: 14, color: '#000', marginBottom: 1 },

  creditos: { flexDirection: 'row', alignItems: 'center', marginTop: 8 },
  medalla: { width: 44, height: 50, alignItems: 'center' },
  cinta: {
    position: 'absolute',
    bottom: 0,
    width: 26,
    height: 22,
    backgroundColor: '#e0566b',
  },
  circulo: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#f2b600',
    borderWidth: 2,
    borderColor: '#b97a00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  estrella: { fontSize: 18, color: '#fff3b0' },
  creditosTxtBox: { marginLeft: 12 },
  creditosTxt: { fontSize: 14, color: '#000' },
  barra: { width: 105, height: 5, backgroundColor: '#4b2e5e', marginTop: 4 },

  listaHistorial: { flexGrow: 0 },
  historial: { textAlign: 'center', fontSize: 14, marginVertical: 8, color: '#000' },
  tarjeta: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    marginBottom: 6,
  },
  fotoPequena: {
    width: 100,
    height: 78,
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botones: { alignItems: 'center' },
  btn: {
    width: 105,
    backgroundColor: '#4b2e5e',
    paddingVertical: 8,
    borderRadius: 20,
    alignItems: 'center',
    marginVertical: 4,
  },
  btnTxt: { color: '#fff', fontSize: 14 },

  acciones: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 4 },
  btnCuenta: {
    flex: 1,
    backgroundColor: '#4b2e5e',
    paddingVertical: 12,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 4,
  },
});