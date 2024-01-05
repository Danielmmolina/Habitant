import { View, Text } from 'react-native'
import React from 'react'
import { Image } from '@rneui/base'
import { useFonts, Lobster_400Regular } from "@expo-google-fonts/lobster";
import { Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold } from '@expo-google-fonts/montserrat'
import { stylesLoginScreen } from './OptionsLoginNRStyles';
import { Button } from '@rneui/themed';
import { screensNR } from '../ScreenNameNR';

export function OptionsLogin(props) {
    const { navigation } = props;


    const goToLogin= () => {
        navigation.navigate(screensNR.noRegister.login);
        
    }

    const goToRegister = () => {
        navigation.navigate(screensNR.noRegister.register);
    }

    const [fontsLoaded] = useFonts({
        Lobster_400Regular,
        Montserrat_400Regular,
        Montserrat_500Medium,
        Montserrat_700Bold
    });
    
    if (!fontsLoaded) {
        return null;
    }


  return (
    <>

        <View style={stylesLoginScreen.containerLogo}>

            <Image source={require('../../../../assets/LogoHabitant.png')} style={stylesLoginScreen.logoImg}/>
            <Text style={{ ...stylesLoginScreen.logoText, fontFamily: 'Lobster_400Regular'}}> Habitant </Text>

        </View>

        <View>
            <Text style={{ ...stylesLoginScreen.text, fontFamily: 'Montserrat_500Medium' }}>Encuentra el lugar perfecto para tu vida estudiantil: descubre alojamientos ideales para estudiantes universitarios </Text>
            <Button containerStyle= {stylesLoginScreen.containerBtn} buttonStyle={stylesLoginScreen.btn} onPress={goToLogin}> <Text style= {{ ...stylesLoginScreen.textBtn, fontFamily: 'Montserrat_700Bold'}}>INICIAR SESIÓN</Text></Button>
        </View>

        <View>
            <Button containerStyle= {stylesLoginScreen.containerBtn} buttonStyle={stylesLoginScreen.btn} onPress={goToRegister}> <Text style= {{ ...stylesLoginScreen.textBtn, fontFamily: 'Montserrat_700Bold'}}>REGISTRARSE</Text></Button>
        </View>
 
 
 
 
 
 
    </>
    
  )
}