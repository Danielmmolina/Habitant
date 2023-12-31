import { View } from 'react-native'
import React from 'react'
import { stylesHomeScreen } from './HomeScreenStylesL'
import { styles } from '../../../../styles'
import { Text, Button } from '@rneui/themed'
import { Image } from '@rneui/base'
import { useFonts, Lobster_400Regular } from "@expo-google-fonts/lobster";
import { Montserrat_400Regular  } from '@expo-google-fonts/montserrat'
import { Header } from '../../../components/Shared/Header/Header'

export function HomeScreenL() {

  const [fontsLoaded] = useFonts({
    Lobster_400Regular,
    Montserrat_400Regular
});

if (!fontsLoaded) {
    return null;
}



  return (
    <> 
      <Header />

       <Text style={{ ...stylesHomeScreen.textTitle, fontFamily: 'Montserrat_400Regular'}}> Mis publicaciones </Text>
     </>
   
  )
}