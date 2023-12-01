import { View, TouchableOpacity } from 'react-native'
import { Text, Button } from '@rneui/themed';
import { Ionicons } from '@expo/vector-icons';
import React from 'react'
import { styles } from '../../../../styles'
import { stylesNewAccount } from './newAccountScreenStyles' 
import { useFonts ,Montserrat_400Regular, Montserrat_700Bold, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat'
import { screensNR } from '../ScreenNameNR';

export function newAccountScreen(props) {

    const { navigation } = props;

    const [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_600SemiBold,
        Montserrat_700Bold
    });
    
    if (!fontsLoaded) {
        return null;
    }

    const goToBack = () =>{                                                                                                                                    
        navigation.navigate(screensNR.noRegister.home);
    }

    const goToRegisterArrendador = () =>{
        navigation.navigate(screensNR.noRegister.formA);
    }

    const goToRegisterEstudiante = () =>{
        navigation.navigate(screensNR.noRegister.formE);
    }

    const goToLogin = () =>{
        navigation.navigate(screensNR.noRegister.login)
    }

  return (

   <>

        <TouchableOpacity style={styles.con} onPress={goToBack}>
             <Ionicons name="arrow-back" size={35} style={styles.iconBack} />
        </TouchableOpacity>

        <View style={stylesNewAccount.containerHeader}> 
            <Text style={{...stylesNewAccount.text1, fontFamily: 'Montserrat_700Bold'}}>Hola!</Text>
            <Text style= {{ ...stylesNewAccount.text2, fontFamily: 'Montserrat_400Regular'}}>Crea una nueva cuenta</Text>
        </View>

        <Text style={{ ...stylesNewAccount.text3, fontFamily: 'Montserrat_600SemiBold'}}>¿Cómo te identificas en la aplicación?</Text>

        <View style={stylesNewAccount.containerButtons}> 
            <Button containerStyle={stylesNewAccount.containerBtn} buttonStyle={stylesNewAccount.btn} onPress={goToRegisterArrendador}><Text style={{ ...stylesNewAccount.textBtn, fontFamily: 'Montserrat_600SemiBold'}}>Arrendador</Text> </Button>
            <Button containerStyle={stylesNewAccount.containerBtn} buttonStyle={stylesNewAccount.btn} onPress={goToRegisterEstudiante}><Text style={{ ...stylesNewAccount.textBtn, fontFamily: 'Montserrat_600SemiBold'}}>Estudiante</Text> </Button>
        </View>

        <View style={stylesNewAccount.containerTextLogin}> 
            <Text style={{ ...stylesNewAccount.text4, fontFamily: 'Montserrat_400Regular'}}>¿Ya tienes cuenta?<Text style= {{ ...stylesNewAccount.text4, fontFamily: 'Montserrat_700Bold'}} onPress={goToLogin}>  Inicia sesión</Text></Text>
        </View>
    
   </>

  )
}