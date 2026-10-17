import {Text,Button} from 'react-native';
import { useState} from 'react';

export const Perfil = ({nombre,carrera,materia,cuatri}) => {
    const[mostrar,setmostrar]=useState(false);

    return(
        <>
            <Text>{nombre}</Text>

            {mostrar &&
            <>
            <Text>{carrera}</Text>
            <Text>{materia}</Text>
            <Text>{cuatri}</Text>
            </>
            } 
            <Button title="Ver perfil" onPress={ ()=>setmostrar(!mostrar)}/>
        </>
    )
}
