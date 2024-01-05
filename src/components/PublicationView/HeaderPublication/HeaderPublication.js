import { View, Text } from 'react-native'
import React from 'react'
import { Montserrat_400Regular, Montserrat_700Bold, useFonts  } from '@expo-google-fonts/montserrat'
import { headerPublicationStyles } from './HeaderPublicationStyles';
import { Icon } from '@rneui/base';
import { StylesPublication } from '../../Publication/PublicationScreen/PublicationScreenStyles';

export function HeaderPublication(props) {
    const { publication, lessor } = props;

    const [fontsLoaded] = useFonts({
    
        Montserrat_400Regular,
        Montserrat_700Bold,

    });
    
    if (!fontsLoaded) {
        return null;
    };



  return (

    <View style= {headerPublicationStyles.containerHeader}>
        {/*AÑADIR CALIFICACION*/}
                 
        <Text style= {{ ...headerPublicationStyles.textTitle, fontFamily: 'Montserrat_700Bold'}}> {publication.title.toUpperCase()} </Text>
        
        <View style={headerPublicationStyles.containerTextInfo}> 
            <Icon type="material-community" name="account" size={20} color='rgb(255, 255, 255)'/>
            <Text style = {{ ...headerPublicationStyles.textInfo, fontFamily: 'Montserrat_400Regular'}}> Ofrecida por: {lessor.nombres} {lessor.apellidos} </Text>
        </View>
        
       
        <View style={headerPublicationStyles.containerTextInfo}>

            <Icon type="material-community" name="map-marker" size={20} color='rgb(255, 255, 255)'/>
            <Text style = {{ ...headerPublicationStyles.textInfo, fontFamily: 'Montserrat_400Regular'}}> {publication.ubication}</Text>

        </View>
       
        
    
    </View>

  )

}