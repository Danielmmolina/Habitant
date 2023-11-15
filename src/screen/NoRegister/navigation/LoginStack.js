import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { screensNR } from "../ScreenNameNR"
import { LoginScreenNR } from "../LoginScreen/LoginScreenNR";
import { OptionsLogin } from "../OptionsLogin/OptionsLoginNR"
import { styles } from "../../../../styles";

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
                name= {screensNR.noRegister.login}
                component={LoginScreenNR}
            />  

        </Stack.Navigator>




    );



}