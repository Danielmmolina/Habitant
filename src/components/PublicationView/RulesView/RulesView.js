import { View, Text } from 'react-native'
import React from 'react'
import { RulesStyles } from './RulesViewStyles'
import { PublicationStyles } from '../PublicationViewStyles'
import { Montserrat_600SemiBold, Montserrat_700Bold, useFonts } from '@expo-google-fonts/montserrat'

export  function RulesView(props) {
    const { publication } = props;

    const [fontsLoaded] = useFonts({
        Montserrat_600SemiBold,
        Montserrat_700Bold,
      });


    if (!fontsLoaded) {
        return null;
    };

    const trueRules = Object.keys(publication.rules).filter(
        key => publication.rules[key] === true
      );

  return (

    <View style={PublicationStyles.container}>

      <Text style= {{...PublicationStyles.title, fontFamily: 'Montserrat_700Bold' }}>Reglas</Text>
      <Text style= {{ ...PublicationStyles.info, fontFamily: 'Montserrat_600SemiBold' }}>{trueRules.join(', ')}</Text>



    </View>
  )
}