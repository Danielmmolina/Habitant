import { View, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../../../../styles';
import { stylesLoginScreenNR } from './LoginScreenNRStyles';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold, Montserrat_500Medium  } from '@expo-google-fonts/montserrat'
import { Input } from '@rneui/base';
import { screensNR } from '../ScreenNameNR';


export function LoginScreenNR(props) {

    const { navigation } = props;

    const goToBack = () =>{
        navigation.navigate(screensNR.noRegister.home);
    }

    const [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_700Bold,
        Montserrat_500Medium
    });
    
    if (!fontsLoaded) {
        return null;
    }

  return (

    <> 
        <TouchableOpacity style={styles.con} onPress={goToBack}>
             <Ionicons name="arrow-back" size={35} style={styles.iconBack} />
        </TouchableOpacity>

        <View style={stylesLoginScreenNR.headerContainer}> 
            <Text style= {{ ...stylesLoginScreenNR.textWelcome, fontFamily: 'Montserrat_700Bold'}}> Bienvenid@!</Text>
            <Text style= {{ ...stylesLoginScreenNR.textWelcome2, fontFamily: 'Montserrat_400Regular'}}>  Inicia sesión para continuar</Text>
        </View>

        <View> 
            <Input containerStyle={stylesLoginScreenNR.ContainerInput1}> <Text style={{ ...stylesLoginScreenNR.textInput, fontFamily: 'Montserrat_500Medium'}}> Correo electrónico</Text></Input>
            <Input containerStyle={stylesLoginScreenNR.ContainerInput2}> <Text style={{ ...stylesLoginScreenNR.textInput, fontFamily: 'Montserrat_500Medium'}}> Contraseña </Text></Input>
        </View>
  
  
    </>
  )

}