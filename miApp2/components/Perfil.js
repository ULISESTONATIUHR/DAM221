import {View,Text,Button,StyleSheet} from 'react-native';

import { useState} from 'react';

export const Perfil = ({nombre,carrera,materia,cuatri,style}) => {
    const[mostrar,setmostrar]=useState(false);

    return(
        <View style={[estilos.tarjetas,style]}>
            <Text style={estilos.nombre}>{nombre}</Text>

            {mostrar &&
            <View>
            <Text style={estilos.carrera}>{carrera}</Text>
            <Text style={estilos.otrotexto}>{materia}</Text>
            <Text style={estilos.otrotexto}>{cuatri}</Text>
            </View>

            } 
            <Button title="Ver perfil" onPress={ ()=>setmostrar(!mostrar)}/>
        </View>
    )
} //creamos lo estilos 
const estilos = StyleSheet.create({
    nombre:{
        fontSize: 24,
        fontWeight: '600',
        textTransform: 'uppercase',
    },
    carrera:{
        fontSize: 20,
        color: '#ac1313',
        fontFamily: 'roboto',
        
    },
    otrotexto:{
        fontSize: 18,
        color: '#213484',
        fontFamily: 'Courier',
        fontStyle: 'italic',
    },
    tarjetas:{
        borderWidth: 3,
        borderRadius: 10,
        padding: 15,
        margin: 10,
    },
    
   
});