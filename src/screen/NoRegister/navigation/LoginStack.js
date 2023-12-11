import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { screensNR } from "../ScreenNameNR"
import { LoginScreenNR } from "../LoginScreen/LoginScreenNR";
import { OptionsLogin } from "../OptionsLogin/OptionsLoginNR"
import { newAccountScreen } from "../newAccount.js/newAccountScreen";
import { FormLessorScreen } from "../Forms/FormLessorScreen";
import { FormStudentScreen } from "../Forms/FormStudentScreen";
import { AppNavigationS } from '../../Student/navigation/AppNavigationS'

const Stack = createNativeStackNavigator();

export function LoginStack(){

    return(
        <Stack.Navigator screenOptions={{
            headerShown: false,          
        }}>

            <Stack.Screen 
                name= {screensNR.noRegister.home}
                component={OptionsLogin}
            />

            <Stack.Screen 
                name= {screensNR.noRegister.login}
                component={LoginScreenNR}
            />  

            <Stack.Screen 
                name= {screensNR.noRegister.register}
                component={newAccountScreen}
            />

            <Stack.Screen 
                name = {screensNR.noRegister.formA}
                component={FormLessorScreen}
            />

            <Stack.Screen 
                name = {screensNR.noRegister.formE}
                component={FormStudentScreen}
            />

            <Stack.Screen 
                name = {screensNR.noRegister.student}
                component={AppNavigationS}
            />






            

        </Stack.Navigator>




    );



}