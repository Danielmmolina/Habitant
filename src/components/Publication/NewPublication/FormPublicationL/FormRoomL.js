import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Input } from '@rneui/base'
import { Button } from '@rneui/themed'
import { useFonts, Montserrat_800ExtraBold  } from '@expo-google-fonts/montserrat'
import { StylesFormPublication } from './FormPublicactionStyleL'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { TouchableOpacity } from 'react-native';

export  function FormRoomL(props) {
    const { formik } = props;

    const [fontsLoaded] = useFonts({
        Montserrat_800ExtraBold,
    });

    const [characteristics, setCharacteristics] = useState({
      cama: false,
      ventilador: false,
      banoPersonal: false,
      tv: false,
      velador: false,
      closet: false,
      ropaCama: false,
      silla: false,
      escritorio: false,
      calefaccion: false,
    });
    if (!fontsLoaded) {
        return null;
    }

    const toggleCharacteristic = (characteristic) => {
      setCharacteristics((prevCharacteristics) => ({
        ...prevCharacteristics,
        [characteristic]: !prevCharacteristics[characteristic],
      }));
      formik.setFieldValue('characteristics', { ...formik.values.characteristics, [characteristic]: true });
      console.log('Estos son los valores despues de presionar las caracteristicas:', formik.values);
    };

  
    const renderBotonCharacteristic = (nameCharacteristic, label) => (
      <TouchableOpacity
        key={nameCharacteristic}
        style={[
          StylesFormPublication.characteristicButton,
          characteristics[nameCharacteristic] ? StylesFormPublication.characteristicButtonSelected : null,
        ]}
        onPress={() => {
          toggleCharacteristic(nameCharacteristic);
          formik.setFieldValue('characteristics', { ...formik.values.characteristics, [nameCharacteristic]: !characteristics[nameCharacteristic] });
        }}
      >
        <Text style={[
          StylesFormPublication.characteristicButtonText,
          characteristics[nameCharacteristic] ? StylesFormPublication.characteristicButtonTextSelected : null,
        ]}>{label}</Text>
      </TouchableOpacity>
    );
    
  return (
    <>
      <View style={StylesFormPublication.containerInput}> 

        <Input 
          placeholder='Título de la habitación' 
          inputStyle={{ color: 'rgba(255, 255, 255, 0.77 )', marginLeft: 10, fontFamily: 'Montserrat_800ExtraBold'}} 
          inputContainerStyle={StylesFormPublication.input}
          onChangeText={(text => formik.setFieldValue("title", text))}
          errorMessage={formik.errors.title}
        />

        <Input 
          placeholder='Descripción' 
          multiline={true}
          inputStyle={{ color: 'rgba(255, 255, 255, 0.77)', marginLeft: 10, fontFamily: 'Montserrat_800ExtraBold'}} 
          inputContainerStyle={StylesFormPublication.input}
          onChangeText={(text => formik.setFieldValue("description", text))}
          errorMessage={formik.errors.description}
          
        />

        <Input 
          placeholder='Precio de la habitacion' 
          inputStyle={{ color: 'rgba(255, 255, 255, 0.77)', marginLeft: 10, fontFamily: 'Montserrat_800ExtraBold'}} 
          inputContainerStyle={StylesFormPublication.input}
          onChangeText={(text => formik.setFieldValue("value", text))}
          errorMessage={formik.errors.value}
          
        />
        <Text style={StylesFormPublication.formLabel}>Oprime las características de la habitación:</Text>
        {/* Botones de características */}
        <View style={StylesFormPublication.characteristicsContainer}>
          {renderBotonCharacteristic('cama', 'Cama')}
          {renderBotonCharacteristic('ventilador', 'Ventilador')}
          {renderBotonCharacteristic('banoPersonal', 'Baño Personal')}
          {renderBotonCharacteristic('tv', 'TV')}
          {renderBotonCharacteristic('velador', 'Velador')}
          {renderBotonCharacteristic('closet', 'Closet')}
          {renderBotonCharacteristic('ropaCama', 'Ropa de Cama')}
          {renderBotonCharacteristic('silla', 'Silla')}
          {renderBotonCharacteristic('escritorio', 'Escritorio')}
          {renderBotonCharacteristic('calefaccion', 'Calefacción')}
        </View>

      </View>

        

    </>
    




  )
}