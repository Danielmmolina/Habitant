import { View, Text } from 'react-native'
import React from 'react'
import { Image } from '@rneui/base'
import { useFonts, Lobster_400Regular } from "@expo-google-fonts/lobster";
import { Montserrat_400Regular  } from '@expo-google-fonts/montserrat'
import { stylesHeader } from './HeaderStyles';


export  function Header() {

    const [fontsLoaded] = useFonts({
        Lobster_400Regular,
        Montserrat_400Regular
    });
    
    if (!fontsLoaded) {
        return null;
    }

  return (

    <View style={stylesHeader.containerLogo}>
        <Image source={require('../../../../assets/LogoHabitant.png')} style={stylesHeader.logoImg} />
        <Text style={{ ...stylesHeader.logoText, fontFamily: 'Lobster_400Regular'}}> Habitant </Text>
    </View>

  )
}