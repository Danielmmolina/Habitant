import { View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { stylesHomeScreen } from './HomeScreenStylesS'
import { Text } from '@rneui/themed'
import { useFonts  } from "@expo-google-fonts/lobster";
import { Montserrat_400Regular  } from '@expo-google-fonts/montserrat'
import { Header } from '../../../components/Shared/Header/Header'
import { collection, onSnapshot, orderBy, query} from 'firebase/firestore'
import { db } from '../../../utils/firebase'
import { screensNR } from '../../NoRegister/ScreenNameNR';
import { LoadingModal } from '../../../components/Shared/LoadingModal/LoadingModal';
import { ListPublication } from '../../../components/Publication/ListPublication/ListPublication';

export function HomeScreen() {

  const [publication, setPublication] = useState(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
    const q = query(
      collection(db, "infoPublication"), 
      orderBy('createdAt', 'asc'),
    );

    onSnapshot(q, (snapshot) => {
      setPublication(snapshot.docs);
    })
    setShow(false);
    
  }, []);

  const [fontsLoaded] = useFonts({
    
    Montserrat_400Regular
});

if (!fontsLoaded) {
    return null;
}



  return (
    <> 
      
      <Header />

     {!publication ? (
      <LoadingModal show={show} text = 'Cargando publicaciones' />
     ) : (  
      
      <ListPublication publication = {publication} />
      )

     }

     </>
   
  )
}