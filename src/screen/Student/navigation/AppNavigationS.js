import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../HomeScreenS/HomeScreenS';
import { SearchScreen } from '../SearchScreenS/SearchScreenS';
import { FavoritesScreen } from '../FavoritesScreenS/FavoritesScreenS';
import { ProfileScreen } from '../ProfileScreenS/ProfileScreenS';
import { styles } from '../../../../styles';
import { Icon } from '@rneui/base';

export function AppNavigationS() {

  const Tab = createBottomTabNavigator();

  return (

   <> 

    <Tab.Navigator sceneContainerStyle={styles.containerDark} screenOptions={({ route }) => ({
    tabBarStyle: styles.barNavigation,
    headerShown: false, 
    tabBarActiveTintColor: 'rgb(56, 182, 255)',
    tabBarInactiveTintColor: 'rgb(255, 255, 255)',  
    tabBarIcon: ({ color, size }) => screenOptions(route, color, size),

    })}> 
     
   

      <Tab.Screen name = 'Inicio' component={ HomeScreen }  />
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