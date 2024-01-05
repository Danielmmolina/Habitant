import { View, Text } from 'react-native'
import React from 'react'
import { Montserrat_600SemiBold, Montserrat_700Bold, useFonts } from '@expo-google-fonts/montserrat'
import { CharacteristicsStyles } from './CharacteristicsViewStyles'
import { PublicationStyles } from '../PublicationViewStyles'

export function CharacteristicsView(props) {
  const { publication } = props

  const [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  };


  const trueCharacteristics = Object.keys(publication.characteristics).filter(
    key => publication.characteristics[key] === true
  );

  return (
    <View style={PublicationStyles.container}>
      <Text style={{ ...PublicationStyles.title, fontFamily: 'Montserrat_700Bold' }}>Características </Text>
      <Text style= {{ ...PublicationStyles.info, fontFamily: 'Montserrat_600SemiBold' }}>{trueCharacteristics.join(', ')}</Text>
    </View>
  );
}
