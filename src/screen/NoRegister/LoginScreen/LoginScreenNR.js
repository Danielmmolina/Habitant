import { View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { styles } from '../../../../styles';
import { stylesLoginScreenNR } from './LoginScreenNRStyles';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold, Montserrat_500Medium, Montserrat_600SemiBold  } from '@expo-google-fonts/montserrat'
import { Input, Image, Icon } from '@rneui/base';
import { screensNR } from '../ScreenNameNR';
import { Button, Text } from '@rneui/themed';
import { Entypo, FontAwesome  } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useFormik } from 'formik';
import { initialValuesLogin, validationSchema_Login  } from '../Forms/RegisterFormData'
import Toast from 'react-native-toast-message';




export function LoginScreenNR(props) {


    const [showPassword, setShowPassword] = useState(false);
   
   

    const showHiddenPassword = () => setShowPassword( (prevState) => !prevState)

    const { navigation } = props;

    const formik = useFormik({
        
        initialValues: initialValuesLogin(),
        validationSchema: validationSchema_Login(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
               
                const auth = getAuth();
                await signInWithEmailAndPassword(
                    auth,
                    formValue.email,
                    formValue.password
                );
                
                    navigation.navigate(screensNR.noRegister.student);

            } catch (error) {
                Toast.show({
                    type: "error",
                    position: 'bottom', 
                    text1: 'Datos ingresados incorrectos',
                });
            }
            
        }
        

    })

    

    const goToBack = () =>{                                                                                                                                    
        navigation.navigate(screensNR.noRegister.home);
    }

    const goToHome = () =>{
        console.log("Ir al home del perfil");
    }

    const goToCambioContraseña= () =>{
        console.log("Ir al cambio de contraseña");
    }

    const goToHomeGoogle = () => {
        console.log("Ir al home con google");
    }

    const goToRegister = () =>{
        navigation.navigate(screensNR.noRegister.register);
    }

    

    

    const [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_700Bold,
        Montserrat_500Medium,
        Montserrat_600SemiBold
    });
    
    if (!fontsLoaded) {
        return null;
    }

  return (  

    <KeyboardAwareScrollView> 


        <TouchableOpacity style={styles.con} onPress={goToBack}>
             <Ionicons name="arrow-back" size={35} style={styles.iconBack} />
        </TouchableOpacity>

        <View style={stylesLoginScreenNR.headerContainer}> 
            <Text style= {{ ...stylesLoginScreenNR.textWelcome, fontFamily: 'Montserrat_700Bold'}}> Bienvenid@!</Text>
            <Text style= {{ ...stylesLoginScreenNR.textWelcome2, fontFamily: 'Montserrat_400Regular'}}>  Inicia sesión para continuar</Text>
        </View>

        <View> 
            <Input 
            placeholder= 'Correo electrónico' 
                inputStyle={{color: 'rgb(255, 255, 255)', fontFamily: 'Montserrat_400Regular'}} 
                containerStyle={stylesLoginScreenNR.ContainerInput1} 
                inputContainerStyle={stylesLoginScreenNR.input} 
                leftIcon={
                    <Entypo 
                        name= "email" 
                        size={24} 
                        color= 'rgb(56, 182, 255)'
                    />}
                onChangeText={(text) => formik.setFieldValue("email", text)} 
                errorMessage={formik.errors.email}
            /> 
           
            <Input 
                placeholder= 'Contraseña' 
                inputStyle={{color: 'rgb(255, 255, 255)', fontFamily: 'Montserrat_400Regular'}} 
                containerStyle={stylesLoginScreenNR.ContainerInput2} 
                inputContainerStyle={stylesLoginScreenNR.input} 
                secureTextEntry={showPassword ? false : true}
                leftIcon={<
                    FontAwesome name='lock' 
                    size={30} 
                    color= 'rgb(56, 182, 255)'/> 
                }
                
                rightIcon={
                    <Icon 
                        type="material-community"
                        name = {showPassword ? "eye-off-outline" : "eye-outline"}
                        color = 'rgb(56, 182, 255)'
                        onPress={showHiddenPassword}
                 />
                }
                
                onChangeText={(text) => formik.setFieldValue("password", text)} 
                errorMessage={formik.errors.password}

            /> 
            
        </View>

        <Button containerStyle= {stylesLoginScreenNR.containerBtn} buttonStyle={stylesLoginScreenNR.btn} onPress={formik.handleSubmit} loading={formik.isSubmitting}> <Text style= {{ ...stylesLoginScreenNR.textBtn, fontFamily: 'Montserrat_600SemiBold'}}>Iniciar sesión</Text></Button>
        
        

        <Text style={{ ...stylesLoginScreenNR.text1, fontFamily: 'Montserrat_400Regular'}} onPress={goToCambioContraseña}>¿Has olvidado tu contraseña?</Text>

        <View style={stylesLoginScreenNR.containerDivision}>

            <View style= {stylesLoginScreenNR.division1}/> 

                <Text style= {{ ...stylesLoginScreenNR.textDivision ,fontFamily: 'Montserrat_600SemiBold'}}> o </Text>
         
            <View style= {stylesLoginScreenNR.division2}/> 
    
        </View>

        <TouchableOpacity style={stylesLoginScreenNR.containerLoginGoogle} onPress={goToHomeGoogle} >  
        
            <Image source={require('../../../../assets/google.png')} style={stylesLoginScreenNR.imgGoogle}/>
            <Text style={{...stylesLoginScreenNR.loginGoogle, fontFamily: 'Montserrat_660SemiBold'}}>Iniciar sesión con Google </Text>

        </TouchableOpacity>

        <View style={stylesLoginScreenNR.containerTextLogin}> 
            <Text style={{ ...stylesLoginScreenNR.text4, fontFamily: 'Montserrat_400Regular'}}>¿No tienes cuenta?<Text style= {{ ...stylesLoginScreenNR.text4, fontFamily: 'Montserrat_700Bold'}} onPress={goToRegister}> Registrate</Text></Text>
        </View>



    </KeyboardAwareScrollView>
  )

}