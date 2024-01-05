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

    const [characteristicsRooms, setCharacteristicsRooms] = useState({
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

    const toggleCharacteristic = (characteristicRoom) => {
      setCharacteristicsRooms((prevCharacteristicsRooms) => ({
        ...prevCharacteristicsRooms,
        [characteristicRoom]: !prevCharacteristicsRooms[characteristicRoom],
      }));
      formik.setFieldValue('characteristicsRooms', { ...formik.values.characteristicsRooms, [characteristicRoom]: true });
      console.log('Estos son los valores despues de presionar las caracteristicas:', formik.values);
    };

  
    const renderBotonCharacteristic = (nameCharacteristicRoom, label) => (
      <TouchableOpacity
        key={nameCharacteristicRoom}
        style={[
          StylesFormPublication.characteristicButton,
          characteristicsRooms[nameCharacteristicRoom] ? StylesFormPublication.characteristicButtonSelected : null,
        ]}
        onPress={() => {
          toggleCharacteristic(nameCharacteristicRoom);
          formik.setFieldValue('characteristicsRooms', { ...formik.values.characteristicsRooms, [nameCharacteristicRoom]: !characteristicsRooms[nameCharacteristicRoom] });
        }}
      >
        <Text style={[
          StylesFormPublication.characteristicButtonText,
          characteristicsRooms[nameCharacteristicRoom] ? StylesFormPublication.characteristicButtonTextSelected : null,
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
          onChangeText={(text => formik.setFieldValue("titleRoom", text))}
          errorMessage={formik.errors.titleRoom}
        />

        <Input 
          placeholder='Precio de la habitacion' 
          inputStyle={{ color: 'rgba(255, 255, 255, 0.77)', marginLeft: 10, fontFamily: 'Montserrat_800ExtraBold'}} 
          inputContainerStyle={StylesFormPublication.input}
          onChangeText={(text => formik.setFieldValue("valueRoom", parseFloat(text)))}
          errorMessage={formik.errors.valueRoom}
          keyboardType="numeric"
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