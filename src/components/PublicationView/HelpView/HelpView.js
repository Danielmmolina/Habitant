import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { PublicationStyles } from '../PublicationViewStyles'
import { HelpStyles } from './HelpViewStyles'
import { Icon } from '@rneui/base'
import { Montserrat_600SemiBold, Montserrat_700Bold, useFonts } from '@expo-google-fonts/montserrat'

export function HelpView() {

    const [fontsLoaded] = useFonts({
        Montserrat_600SemiBold,
        Montserrat_700Bold,
        
      });
    
      if (!fontsLoaded) {
        return null;
      };

  return (

    <View style={PublicationStyles.container}>

        <TouchableOpacity style={HelpStyles.containerInfo}> 

            <Icon type="material-community" name="map" size={30} color='rgb(255, 255, 255)' />
            <Text style={{ ...PublicationStyles.info, fontFamily: 'Monserrat_600SemiBold'}}> ¿Cómo llegar? </Text>
          

        </TouchableOpacity>

        <TouchableOpacity style={HelpStyles.containerInfo}> 

            <Icon type="material-community" name="whatsapp" size={30} color='rgb(255, 255, 255)' />
            <Text style={{ ...PublicationStyles.info, fontFamily: 'Monserrat_600SemiBold'}}> Contacto </Text>


        </TouchableOpacity>

      


    </View>

  )
}