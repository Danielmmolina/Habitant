import { View, ScrollView, } from 'react-native'
import React from 'react'
import { stylesNewPublicationScreen } from './NewPublicationStylesL'
import { Text, Button } from '@rneui/themed'
import { useFonts, Lobster_400Regular } from "@expo-google-fonts/lobster";
import { Montserrat_400Regular  } from '@expo-google-fonts/montserrat'
import { initialValues, validationSchema } from './NewPublicationData';
import { FormPublicationL } from '../../../components/Publication/NewPublication/FormPublicationL/FormPublicationL';
import { UploadImagesForm } from '../../../components/Publication/NewPublication/UploadImagesForm/UploadImagesForm';
import { useFormik } from 'formik';
import { v4 as uuid } from 'uuid';
import { doc, setDoc } from 'firebase/firestore'
import { db } from '../../../utils/firebase';
import { useNavigation } from '@react-navigation/native';

export function NewPublicationScreenL() {
  const navigation = useNavigation();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const newData = {
          ...formValue,
          id: uuid(),
          createdAt: new Date(),
          rules: formik.values.rules,  // Agregar las reglas
          characteristics: formik.values.characteristics,  // Agregar las características
        };
  
        await setDoc(doc(db, 'infoPublication', newData.id), newData);
  
        navigation.goBack();
      } catch (error) {
        console.log(error);
      }
    },
  });

  const [fontsLoaded] = useFonts({
    Lobster_400Regular,
    Montserrat_400Regular
  });

  if (!fontsLoaded) {
    return null;
  }

  

  



  return (
  <>


    <ScrollView>
        <Text style={{ ...stylesNewPublicationScreen.textTitle, fontFamily: 'Montserrat_400Regular'}}> Nueva publicación   </Text>



          <View>

          <UploadImagesForm formik={formik} />
          
          <FormPublicationL formik={formik} />


          <Button onPress={formik.handleSubmit} loading={formik.isSubmitting}> <Text> Crear </Text> </Button>
          
          </View>
          

          

        

      
    </ScrollView>    
  </>

  )
}