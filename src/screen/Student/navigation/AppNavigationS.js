import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StudentStack } from './StudentStack';
import { SearchScreen } from '../SearchScreenS/SearchScreenS';
import { FavoritesScreen } from '../FavoritesScreenS/FavoritesScreenS';
import { ProfileScreen } from '../ProfileScreenS/ProfileScreenS';
import { PublicationScreen } from '../../../components/Publication/PublicationScreen/PublicationScreen';
import { styles } from '../../../../styles';
import { Icon } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';


export function AppNavigationS() {

  const Tab = createBottomTabNavigator();
  const navigation = useNavigation(); // Obtener el objeto de navegación

  return (

   <> 

    <Tab.Navigator sceneContainerStyle={styles.containerDark} screenOptions={({ route }) => ({
    tabBarStyle: styles.barNavigation,
    headerShown: false, 
    tabBarActiveTintColor: 'rgb(56, 182, 255)',
    tabBarInactiveTintColor: 'rgb(255, 255, 255)',  
    tabBarIcon: ({ color, size }) => screenOptions(route, color, size),

    })}> 
     
   

      <Tab.Screen name = 'Inicio' component={ StudentStack }  />
      <Tab.Screen name='Buscar' component={ SearchScreen } />
      <Tab.Screen name='Favoritos' component={ FavoritesScreen }  />
      <Tab.Screen name='Mi perfil' component={ ProfileScreen }  />   
     
      
    </Tab.Navigator>
  </>

  )
}

function screenOptions(route, color, size){
  let iconName;

  if(route.name === 'Inicio'){
      iconName='home';
  }

  if(route.name=== 'Buscar'){
      iconName='magnify';
  }

  if(route.name === 'Favoritos'){
      iconName = 'heart';
  }

  if(route.name === 'Mi perfil'){
      iconName = 'account-circle';
  }

  return (

      <Icon type='material-community' 
      name={iconName} 
      color={color} 
      size={size} />
      
  );
}