import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { screensS } from "../ScreenNameS";
import { HomeScreen } from "../HomeScreenS/HomeScreenS";
import { PublicationScreen } from "../../../components/Publication/PublicationScreen/PublicationScreen";

const Stack = createNativeStackNavigator();

export function StudentStack() {
    return (
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>

        <Stack.Screen 
          name={screensS.student.home}
          component={HomeScreen}

        />
        
        <Stack.Screen 
          name={screensS.student.publication}
          component={PublicationScreen}
        />
    

      </Stack.Navigator>
    );
  }
  