import { View, ActivityIndicator } from 'react-native'
import React from 'react'
import { loadingStyles } from './LoadingStyles'
import { Text } from '@rneui/base'
import { Montserrat_500Medium, useFonts  } from '@expo-google-fonts/montserrat'

export function Loading(props) {
    const { show, text } = props;

    if(!show) return null;

    const [fontsLoaded] = useFonts({
    
        Montserrat_500Medium

    });
    
    if (!fontsLoaded) {
        return null;
    };


  return (
    <View style={loadingStyles.containerLoading}>
      <ActivityIndicator size= 'large' color='rgb(56, 182, 255)' />
      {text && <Text style={{ ...loadingStyles.textLoading, fontFamily: 'Montserrat_500Medium'}}> {text} </Text>}
    </View>
  )
}