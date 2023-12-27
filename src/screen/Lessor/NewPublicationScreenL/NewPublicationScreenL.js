import React, { useState } from 'react'
import { View, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import { Text, Button } from '@rneui/themed'
import { stylesNewPublicationScreen } from './NewPublicationStylesL'
import { styles } from '../../../../styles'
import { Image } from '@rneui/base'
import { useFonts, Lobster_400Regular } from "@expo-google-fonts/lobster";
import { Montserrat_400Regular  } from '@expo-google-fonts/montserrat'

export function NewPublicationScreenL() {

  const [fontsLoaded] = useFonts({
    Lobster_400Regular,
    Montserrat_400Regular
});
const [tituloPublicacion, setTituloPublicacion] = useState('Nueva Publicación');
const [reglas, setReglas] = useState({
  noBeber: false,
  horarioLlegada: false,
  sinMascotas: false,
  sinVisitas: false,
  NoEscucharMusicaConVolumenAlto: false,
  NoFumar: false,
  RealizarAseo: false,
  // Agregar más carac
});
const [caracteristicas, setCaracteristicas] = useState({
  comedor: false,
  estacionamiento: false,
  tv: false,
  gastosComunesIncluidos: false,
  living: false,
  wifi: false,
  // Agregar más caract
});
if (!fontsLoaded) {
    return null;
}

const toggleRegla = (regla) => {
  setReglas((prevReglas) => ({
    ...prevReglas,
    [regla]: !prevReglas[regla],
  }));
};
const toggleCaracteristica = (caracteristica) => {
  setCaracteristicas((prevCaracteristicas) => ({
    ...prevCaracteristicas,
    [caracteristica]: !prevCaracteristicas[caracteristica],
  }));
};
const renderBotonRegla = (nombreRegla, label) => (
  <TouchableOpacity
    key={nombreRegla}
    style={[
      stylesNewPublicationScreen.reglaButton,
      reglas[nombreRegla] ? stylesNewPublicationScreen.reglaButtonSelected : null,
    ]}
    onPress={() => toggleRegla(nombreRegla)}
  >
    <Text style={[
      stylesNewPublicationScreen.reglaButtonText,
      reglas[nombreRegla] ? stylesNewPublicationScreen.reglaButtonTextSelected : null,
    ]}>{label}</Text>
  </TouchableOpacity>
);

const renderBotonCaracteristica = (nombreCaracteristica, label) => (
  <TouchableOpacity
    key={nombreCaracteristica}
    style={[
      stylesNewPublicationScreen.caracteristicaButton,
      caracteristicas[nombreCaracteristica] ? stylesNewPublicationScreen.caracteristicaButtonSelected : null,
    ]}
    onPress={() => toggleCaracteristica(nombreCaracteristica)}
  >
    <Text style={[
      stylesNewPublicationScreen.caracteristicaButtonText,
      caracteristicas[nombreCaracteristica] ? stylesNewPublicationScreen.caracteristicaButtonTextSelected : null,
    ]}>{label}</Text>
  </TouchableOpacity>
);

return (
  <ScrollView style={{ flex: 1 }}>
    <View style={styles.containerLogo}>
      <Image source={require('../../../../assets/LogoHabitant.png')} style={styles.logoImg} />
      <Text style={{ ...styles.logoText, fontFamily: 'Lobster_400Regular' }}> Habitant </Text>
    </View>
    
     {/* Título dinámico */}
    <Text style={{ ...stylesNewPublicationScreen.textTitle, fontFamily: 'Montserrat_400Regular' }}>{tituloPublicacion}</Text>

    {/* Formulario para detalles de la propiedad */}
    <View style={stylesNewPublicationScreen.formContainer}>
      <Text style={stylesNewPublicationScreen.formLabel}>Añadir Fotos de la propiedad</Text>
      <Text style={stylesNewPublicationScreen.formSubLabel}>
        Ejemplo: Vista de fuera de la propiedad, espacios comunes, patio, etc.
      </Text>

      {/*  componente para seleccionar imágenes*/}
      <TouchableOpacity style={stylesNewPublicationScreen.imageUploadButton}>
        <Text style={stylesNewPublicationScreen.imageUploadButtonText}>Seleccionar Imágenes</Text>
      </TouchableOpacity>
     {/* ----------------Espacio para el formulario con campos de texto propiedad----------------- */}
      <View style={stylesNewPublicationScreen.textInputContainer}>
      <Text style={stylesNewPublicationScreen.formLabel}>Titulo de la Publicación</Text>
        {/* Input dinámico para el título de la publicación */}
        <TextInput
          style={stylesNewPublicationScreen.textInput}
          placeholder="Ingrese el título"
          value={tituloPublicacion}
          onChangeText={(text) => setTituloPublicacion(text)}
        />

        <Text style={stylesNewPublicationScreen.formLabel}>Descripción</Text>
        <TextInput
          style={stylesNewPublicationScreen.textInput}
          placeholder="Ingrese la descripción"
          multiline={true}
          numberOfLines={4} // ajustar segun sea necesario las lineas de descripcion
        />

        <Text style={stylesNewPublicationScreen.formLabel}>Ubicación</Text>
        <TextInput
          style={stylesNewPublicationScreen.textInput}
          placeholder="Ingrese la ubicación"
        />
      </View>
      <Text style={stylesNewPublicationScreen.formLabel}>Presione las reglas de su propiedad:</Text>
       {/* Botones de reglas */}
      <View style={stylesNewPublicationScreen.reglasContainer}>
        {renderBotonRegla('noBeber', 'No Beber')}
        {renderBotonRegla('horarioLlegada', 'Horario de Llegada')}
        {renderBotonRegla('sinMascotas', 'Sin Mascotas')}
        {renderBotonRegla('sinVisitas', 'Sin Visitas')}
        {renderBotonRegla('noEscucharMusicaConVolumenAlto', 'No Tener La Música Con Volumen Alto')}
        {renderBotonRegla('noFumar', 'No Fumar')}
        {renderBotonRegla('realizarAseo', 'Realizar Aseo')}
      </View>
      <Text style={stylesNewPublicationScreen.formLabel}>Oprime las características de la propiedad:</Text>
      {/* Botones de características */}
      <View style={stylesNewPublicationScreen.caracteristicasContainer}>
        {renderBotonCaracteristica('comedor', 'Comedor')}
        {renderBotonCaracteristica('estacionamiento', 'Estacionamiento')}
        {renderBotonCaracteristica('tv', 'TV')}
        {renderBotonCaracteristica('gastosComunesIncluidos', 'Gastos Comunes Incluidos')}
        {renderBotonCaracteristica('living', 'Living')}
        {renderBotonCaracteristica('wifi', 'Wifi')}
        {/* Agrega más botones de características según sea necesario */}
      </View>
    </View>
    
  </ScrollView>
);
}
