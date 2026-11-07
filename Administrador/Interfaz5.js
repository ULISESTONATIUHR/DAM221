/*1.Zona Importaciones */
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Pressable,
} from 'react-native';

/*2.Zona Render o Main*/
export default function Interfaz5() {
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

      <ScrollView style={styles.cuerpo} contentContainerStyle={styles.cuerpoContenido}>
        {/* Datos del curso */}
        <View style={styles.datos}>
          <View style={styles.info}>
            <Text style={styles.txt}>Duracion:</Text>
            <Text style={styles.txt}>6 Dias</Text>
            <Text style={styles.txt}>Categoria:</Text>
            <Text style={styles.txt}>Programacion</Text>
            <Text style={styles.txt}>Costo/hora:</Text>
            <Text style={styles.txt}>$25</Text>
            <Text style={styles.txt}>Contacto:</Text>
            <Text style={styles.txt}>4425513945</Text>
            <Text style={styles.txt}>ID Impartidor:</Text>
            <Text style={styles.txt}>3422448</Text>
          </View>

          <View style={styles.imagenBox}>
            <Text style={styles.nombreCurso}>CURSO HTML</Text>
            <View style={styles.imagen}>
              <Text style={styles.imagenTxt}>No image</Text>
            </View>
          </View>
        </View>

        {/* Descripción */}
        <Text style={styles.descripcion}>
          Aprende los fundamentos de HTML y crea tus propias páginas web desde cero. Durante este
          curso de 6 días conocerás las principales etiquetas y estructuras utilizadas para crear
          sitios web, trabajando con ejemplos y ejercicios prácticos.{'\n'}A lo largo del curso
          aprenderás a crear la estructura de una página, agregar textos, imágenes, enlaces,
          listas, tablas y formularios, además de organizar correctamente el contenido de una
          página web.
        </Text>

        {/* Botón */}
        <Pressable style={styles.btn}>
          <Text style={styles.btnTxt}>Eliminar curso</Text>
        </Pressable>
      </ScrollView>

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

  cuerpo: { flex: 1, backgroundColor: '#fffcd9' },
  cuerpoContenido: { padding: 14 },

  datos: { flexDirection: 'row', justifyContent: 'space-between' },
  info: { flex: 1 },
  txt: { fontSize: 15, color: '#000' },

  imagenBox: { flex: 1, alignItems: 'center' },
  nombreCurso: { fontSize: 15, color: '#000', marginBottom: 8 },
  imagen: {
    width: 110,
    height: 75,
    borderWidth: 1,
    borderColor: '#000',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagenTxt: { fontSize: 9, color: '#aaa' },

  descripcion: { fontSize: 15, color: '#000', marginTop: 10, lineHeight: 20 },

  btn: {
    alignSelf: 'center',
    backgroundColor: '#4b2e5e',
    paddingVertical: 10,
    paddingHorizontal: 22,
    borderRadius: 20,
    marginTop: 36,
    marginBottom: 10,
  },
  btnTxt: { color: '#fff', fontSize: 15 },
});