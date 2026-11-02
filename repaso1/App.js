import React, { useState } from "react";
import { ScrollView, View, Text, TextInput, Button, Alert, StyleSheet, Switch } from "react-native";

export default function Registro() {

  
    const [nombre, setNombre] = useState('');
    const [carrera, setCarrera] = useState('');
    const [semestre, setSemestre] = useState('');

    
    const [taller, setTaller] = useState(false);
    const [constancia, setConstancia] = useState(false);
    const [deportes, setDeportes] = useState(false);

    
    const enviarRegistro = () => {

      
        if (nombre === '' || carrera === '' || semestre === '') {
            Alert.alert('Campos Incompletos', 'Debes de llenar todos los campos');
        }

        
        else if (isNaN(semestre)) {
            Alert.alert('Error', 'El semestre debe ser un numero');
        }

        
        else {
            Alert.alert(
                'Registro enviado',
                'Nombre: ' + nombre +
                '\nCarrera: ' + carrera +
                '\nSemestre: ' + semestre +
                '\nTaller: ' + (taller ? 'Si' : 'No') +
                '\nConstancia: ' + (constancia ? 'Si' : 'No') +
                '\nDeportes: ' + (deportes ? 'Si' : 'No')
            );
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>

            <Text style={styles.titulo}>Registro a Congreso</Text>

            <Text style={styles.subtitulo}>1. Datos personales</Text>

            <TextInput
                style={styles.input}
                placeholder='Nombre completo'
                value={nombre}
                onChangeText={setNombre}
            />

            <TextInput
                style={styles.input}
                placeholder='Carrera'
                value={carrera}
                onChangeText={setCarrera}
            />

            <TextInput
                style={styles.input}
                placeholder='Semestre'
                value={semestre}
                onChangeText={setSemestre}
            />

            <Text style={styles.subtitulo}>OPCIONES</Text>

            <View style={styles.pregunta}>
                <Text>¿Asistirá al taller?</Text>
                <Switch
                    value={taller}
                    onValueChange={setTaller}
                />
            </View>

            <View style={styles.pregunta}>
                <Text>¿Requiere constancia?</Text>
                <Switch
                    value={constancia}
                    onValueChange={setConstancia}
                />
            </View>

            <View style={styles.pregunta}>
                <Text>¿Participara en deporte?</Text>
                <Switch
                    value={deportes}
                    onValueChange={setDeportes}
                />
            </View>

            <View style={styles.boton}>
                <Button
                    title="Enviar Registro"
                    onPress={enviarRegistro}
                />
            </View>

        </ScrollView>
    );
}

// Estilos 
const styles = StyleSheet.create({

    container: {
        padding: 24,
        paddingTop: 60,
        backgroundColor: '#fff'
    },

    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10
    },

    subtitulo: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 16,
        marginBottom: 6
    },

    input: {
        borderWidth: 1,
        borderColor: '#999',
        borderRadius: 6,
        padding: 10,
        fontSize: 16,
        marginBottom: 10
    },

    pregunta: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    },

    boton: {
        marginBottom: 10
    }

});