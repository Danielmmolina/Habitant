import { View, ScrollView, } from 'react-native'
import React, { Component } from 'react'
import { stylesNewPublicationScreen } from './NewPublicationStylesL'
import { Text, Button } from '@rneui/themed'
import { useFonts, Lobster_400Regular } from "@expo-google-fonts/lobster";
import { Montserrat_400Regular  } from '@expo-google-fonts/montserrat'
import { initialValues, validationSchema} from './NewPublicationData';
import { FormPublicationL } from '../../../components/Publication/NewPublication/FormPublicationL/FormPublicationL';
import { UploadImagesForm } from '../../../components/Publication/NewPublication/UploadImagesForm/UploadImagesForm';
import { UploadImagesRoom} from '../../../components/Publication/NewPublication/UploadImagesForm/UploadImagesRoom';
import { FormRoomL } from '../../../components/Publication/NewPublication/FormPublicationL/FormRoomL';
import { Header } from '../../../components/Shared/Header/Header';
import { useFormik } from 'formik';
import { v4 as uuid } from 'uuid';
import { doc, setDoc } from 'firebase/firestore'
import { db } from '../../../utils/firebase';
import { useNavigation } from '@react-navigation/native';
import { getAuth } from 'firebase/auth'

export function NewPublicationScreenL() {
  const navigation = useNavigation();
  const { uid } = getAuth().currentUser;

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue, { resetForm } ) => {
      try {
        const newData = {
          ...formValue,
          id: uuid(),
          uidL: uid,
          createdAt: new Date(),
          rules: formValue.rules,
          characteristics: formValue.characteristics,
          characteristicsRooms: formValue.characteristicsRooms,
        };

        await setDoc(doc(db, 'infoPublication', newData.id), newData);
        console.log("Documento guardado con éxito.");

        resetForm();

        navigation.goBack();
      } catch (error) {
        console.error("Error al guardar datos en Firestore:", error);
      }
    },
  });

  const [fontsLoaded] = useFonts({
    Lobster_400Regular,
    Montserrat_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <Header />
        <ScrollView>
        <Text style={{ ...stylesNewPublicationScreen.textTitle, fontFamily: 'Montserrat_400Regular'}}> Nueva publicación </Text>

          <View>
            <UploadImagesForm formik={formik} />
            <FormPublicationL formik={formik} />
            <UploadImagesRoom formik={formik} />
            <FormRoomL formik={formik} />
            <Button onPress={formik.handleSubmit} loading={formik.isSubmitting}> <Text> Crear </Text> </Button>
          </View>
        </ScrollView>
      </>
  )
}
