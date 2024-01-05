import { View, Text } from 'react-native'
import React from 'react'
import { RoomStyles } from './RoomViewStyles'
import { Montserrat_600SemiBold, Montserrat_700Bold, useFonts  } from '@expo-google-fonts/montserrat'
import { PublicationStyles } from '../PublicationViewStyles'

export  function RoomView() {

    const [fontsLoaded] = useFonts({
        Montserrat_600SemiBold,
        Montserrat_700Bold,
      });
    
    if (!fontsLoaded) {
        return null;
    };

  return (

    <View style={PublicationStyles.container}>
        
      <Text style={{...PublicationStyles.title, fontFamily: 'Montserrat_600SemiBold'}}>Habitaciones</Text>

      

    </View>

  )
}