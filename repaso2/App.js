/*1.Zona Importaciones */
import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import PantallaPrincipal from './PantallaPrincipal';
import CatalogoScreen from './Catalogoscreen';
 import "./Catalogoscreen"

/*2.Zona Render o Main*/
export default function App() {
  const [mostrarSplash, setMostrarSplash] = useState(true);

  // La pantalla de bienvenida dura 2 segundos
  useEffect(() => {
    const temporizador = setTimeout(() => setMostrarSplash(false), 2000);
    return () => clearTimeout(temporizador);
  }, []);

  return (
    <>
      {mostrarSplash ? <PantallaPrincipal/> : <CatalogoScreen />}
      <StatusBar style="auto" />
    </>
  );
}