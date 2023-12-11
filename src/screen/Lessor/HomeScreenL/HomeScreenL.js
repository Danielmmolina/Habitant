import { View } from 'react-native'
import React from 'react'
import { stylesHomeScreen } from './HomeScreenStylesL'
import { styles } from '../../../../styles'
import { Text, Button } from '@rneui/themed'
import { Image } from '@rneui/base'
import { useFonts, Lobster_400Regular } from "@expo-google-fonts/lobster";
import { Montserrat_400Regular  } from '@expo-google-fonts/montserrat'

export function HomeScreen() {

  const [fontsLoaded] = useFonts({
    Lobster_400Regular,
    Montserrat_400Regular
});

if (!fontsLoaded) {
    return null;
}



  return (
    <> 
      <View style={styles.containerLogo}> 

        <Image source={require('../../../../assets/LogoHabitant.png')} style={styles.logoImg} />
        <Text style={{ ...styles.logoText, fontFamily: 'Lobster_400Regular',}}> Habitant </Text>
        
       </View>

       <Text style={{ ...stylesHomeScreen.textTitle, fontFamily: 'Montserrat_400Regular'}}> Publicaciones recomendadas </Text>

     </>
   
  )
}