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
if (!fontsLoaded) {
    return null;
}



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

      {/* Agregar un componente para seleccionar imágenes, por ejemplo, un botón */}
      <TouchableOpacity style={stylesNewPublicationScreen.imageUploadButton}>
        <Text style={stylesNewPublicationScreen.imageUploadButtonText}>Seleccionar Imágenes</Text>
      </TouchableOpacity>
     {/* ----------------Espacio para el formulario con campos de texto propiedad----------------- */}
      <View style={stylesNewPublicationScreen.textInputContainer}>
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
          numberOfLines={4} // Puedes ajustar según sea necesario
          // Puedes agregar más propiedades según tus necesidades
        />

        <Text style={stylesNewPublicationScreen.formLabel}>Ubicación</Text>
        <TextInput
          style={stylesNewPublicationScreen.textInput}
          placeholder="Ingrese la ubicación"
          // Puedes agregar más propiedades según tus necesidades
        />
      </View>
      {/* Aquí puedes agregar más campos del formulario según sea necesario */}
      {/* Por ejemplo, TextInput para descripción, número de habitaciones, etc. */}
    </View>
    
  </ScrollView>
);
}
