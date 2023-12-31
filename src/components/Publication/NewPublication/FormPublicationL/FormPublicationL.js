import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Input } from '@rneui/base'
import { Button } from '@rneui/themed'
import { useFonts, Montserrat_800ExtraBold  } from '@expo-google-fonts/montserrat'
import { StylesFormPublication } from './FormPublicactionStyleL'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { TouchableOpacity } from 'react-native';

export  function FormPublicationL(props) {
    const { formik } = props;

    const [fontsLoaded] = useFonts({
        Montserrat_800ExtraBold,
    });

    const [rules, setRules] = useState({
      noBeber: false,
      horarioLlegada: false,
      sinMascotas: false,
      sinVisitas: false,
      NoEscucharMusicaConVolumenAlto: false,
      NoFumar: false,
      RealizarAseo: false,
    });

    const [characteristics, setCharacteristics] = useState({
      comedor: false,
      estacionamiento: false,
      tv: false,
      gastosComunesIncluidos: false,
      living: false,
      wifi: false,
    });
    if (!fontsLoaded) {
        return null;
    }

    const toggleRule = (rule) => {
      setRules((prevRules) => ({
        ...prevRules,
        [rule]: !prevRules[rule],
      }));
      formik.setFieldValue('rules', { ...formik.values.rules, [rule]: true });
      console.log('Estos son los valores despues de presionar las reglas:', formik.values);
    };
    
    const toggleCharacteristic = (characteristic) => {
      setCharacteristics((prevCharacteristics) => ({
        ...prevCharacteristics,
        [characteristic]: !prevCharacteristics[characteristic],
      }));
      formik.setFieldValue('characteristics', { ...formik.values.characteristics, [characteristic]: true });
      console.log('Estos son los valores despues de presionar las caracteristicas:', formik.values);
    };

    const renderBotonRule = (nameRule, label) => (
      <TouchableOpacity
        key={nameRule}
        style={[
          StylesFormPublication.ruleButton,
          rules[nameRule] ? StylesFormPublication.ruleButtonSelected : null,
        ]}
        onPress={() => {
          toggleRule(nameRule);
          formik.setFieldValue('rules', { ...formik.values.rules, [nameRule]: !rules[nameRule] });
        }}
      >
        <Text style={[
          StylesFormPublication.ruleButtonText,
          rules[nameRule] ? StylesFormPublication.ruleButtonTextSelected : null,
        ]}>{label}</Text>
      </TouchableOpacity>
    );
  
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
          placeholder='Título de la publicación' 
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
          placeholder='Ubicación' 
          inputStyle={{ color: 'rgba(255, 255, 255, 0.77)', marginLeft: 10, fontFamily: 'Montserrat_800ExtraBold'}} 
          inputContainerStyle={StylesFormPublication.input}
          onChangeText={(text => formik.setFieldValue("ubication", text))}
          errorMessage={formik.errors.ubication}
          
        />
        <Text style={StylesFormPublication.formLabel}>Presione las rules de su propiedad:</Text>
        {/* Botones de rules */}
        <View style={StylesFormPublication.rulesContainer}>
          {renderBotonRule('noBeber', 'No Beber')}
          {renderBotonRule('horarioLlegada', 'Horario de Llegada')}
          {renderBotonRule('sinMascotas', 'Sin Mascotas')}
          {renderBotonRule('sinVisitas', 'Sin Visitas')}
          {renderBotonRule('noEscucharMusicaConVolumenAlto', 'No Tener La Música Con Volumen Alto')}
          {renderBotonRule('noFumar', 'No Fumar')}
          {renderBotonRule('realizarAseo', 'Realizar Aseo')}
        </View>
        <Text style={StylesFormPublication.formLabel}>Oprime las características de la propiedad:</Text>
        {/* Botones de características */}
        <View style={StylesFormPublication.characteristicsContainer}>
          {renderBotonCharacteristic('comedor', 'Comedor')}
          {renderBotonCharacteristic('estacionamiento', 'Estacionamiento')}
          {renderBotonCharacteristic('tv', 'TV')}
          {renderBotonCharacteristic('gastosComunesIncluidos', 'Gastos Comunes Incluidos')}
          {renderBotonCharacteristic('living', 'Living')}
          {renderBotonCharacteristic('wifi', 'Wifi')}
        </View>

      </View>

        

    </>
    




  )
}