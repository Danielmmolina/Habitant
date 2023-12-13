import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../../../../styles'
import { stylesForm } from './FormsScreenStyles'
import { useFonts, Montserrat_400Regular, Montserrat_700Bold, Montserrat_500Medium, Montserrat_600SemiBold  } from '@expo-google-fonts/montserrat'
import { Ionicons } from '@expo/vector-icons';
import { Input, Button, Icon } from '@rneui/base';
import { screensNR } from '../ScreenNameNR'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useFormik } from 'formik'
import { initialValues, validationSchema_User } from './RegisterFormData'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '../../../utils/firebase'


export  function FormStudentScreen(props) {

    const [showPassword, setShowPassword] = useState(false);

    const { navigation } = props;

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema_User(),
        validateOnChange: false,
        onSubmit: async (formValue) => {
            try {
                const auth = getAuth();
                const usuario = await createUserWithEmailAndPassword(
                    auth,
                    formValue.email,
                    formValue.password
                );

                const uid = usuario.user.uid;

                const myDb = doc(db, 'infoUsers', uid);
                await setDoc(myDb, {
                    nombres: formValue.nombres,
                    apellidos: formValue.apellidos,
                    rut: formValue.rut,
                    telefono: formValue.telefono,
                    rol: 'Estudiante',
                });

                console.log("Exito");
               
                
            } catch (error) {
                console.log(error);   
            }
            
        },
    })

    const [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_700Bold,
        Montserrat_500Medium,
        Montserrat_600SemiBold
    });
    
    if (!fontsLoaded) {
        return null;
    }

    const goToBack = () =>{                                                                                                                                    
        navigation.navigate(screensNR.noRegister.register);
    }

    const showHiddenPassword = () => setShowPassword( (prevState) => !prevState)


  return (

    <KeyboardAwareScrollView>
        <TouchableOpacity style={styles.con} onPress={goToBack}>
             <Ionicons name="arrow-back" size={35} style={styles.iconBack} />
        </TouchableOpacity> 

        <Text style={{ ...stylesForm.Header, fontFamily: 'Montserrat_600SemiBold'}}>Ingresa tus datos: </Text>

        <View style={stylesForm.containerInput}>

            <Input 
                placeholder='Nombres' 
                inputStyle={{color: 'rgb(255, 255, 255)', fontFamily: 'Montserrat_400Regular'}} 
                containerStyle={stylesForm.ContainerInput1} 
                inputContainerStyle={stylesForm.input} 
                onChangeText={(text) => formik.setFieldValue("nombres", text)} 
                errorMessage={formik.errors.nombres}
            />

            <Input 
                placeholder='Apellidos'
                inputStyle={{color: 'rgb(255, 255, 255)', fontFamily: 'Montserrat_400Regular'}}
                containerStyle={stylesForm.ContainerInput1} 
                inputContainerStyle={stylesForm.input}
                onChangeText={(text) => formik.setFieldValue("apellidos", text)} 
                errorMessage={formik.errors.apellidos}
            />

            <Input 
                placeholder='RUT' 
                inputStyle={{color: 'rgb(255, 255, 255)', fontFamily: 'Montserrat_400Regular'}} 
                containerStyle={stylesForm.ContainerInput1} 
                inputContainerStyle={stylesForm.input}
                onChangeText={(text) => formik.setFieldValue("rut", text)} 
                errorMessage={formik.errors.rut}
            />

            <Input 
                placeholder='Correo electrónico' 
                inputStyle={{color: 'rgb(255, 255, 255)', fontFamily: 'Montserrat_400Regular'}} 
                containerStyle={stylesForm.ContainerInput1} 
                inputContainerStyle={stylesForm.input}
                onChangeText={(text) => formik.setFieldValue("email", text)} 
                errorMessage={formik.errors.email}
            />

            <Input 
                placeholder='Número telefónico' 
                inputStyle={{color: 'rgb(255, 255, 255)', fontFamily: 'Montserrat_400Regular'}} 
                containerStyle={stylesForm.ContainerInput1} 
                inputContainerStyle={stylesForm.input}
                onChangeText={(text) => formik.setFieldValue("telefono", text)} 
                errorMessage={formik.errors.telefono}
            />

            <Input 
                placeholder='Contraseña' 
                inputStyle={{color: 'rgb(255, 255, 255)', fontFamily: 'Montserrat_400Regular'}} 
                containerStyle={stylesForm.ContainerInput1} 
                inputContainerStyle={stylesForm.input}
                secureTextEntry={showPassword ? false : true}
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

            <Input 
                placeholder='Confirmar contraseña' 
                inputStyle={{color: 'rgb(255, 255, 255)', fontFamily: 'Montserrat_400Regular'}} 
                containerStyle={stylesForm.ContainerInput1} 
                inputContainerStyle={stylesForm.input}
                secureTextEntry={showPassword ? false : true}
                rightIcon={
                    <Icon 
                        type="material-community"
                        name = {showPassword ? "eye-off-outline" : "eye-outline"}
                        color = 'rgb(56, 182, 255)'
                        onPress={showHiddenPassword}
                 />
                }
                onChangeText={(text) => formik.setFieldValue("repeatpassword", text)} 
                errorMessage={formik.errors.repeatpassword}
            />

        </View>

        <Button containerStyle= {stylesForm.containerBtn} buttonStyle={stylesForm.btn} onPress={formik.handleSubmit} loading={formik.isSubmitting}> <Text style={{ ...stylesForm.textBtn, fontFamily: 'Montserrat_600SemiBold'}}> Registrarse</Text></Button> 

    
    
    
    </KeyboardAwareScrollView>
  )
}