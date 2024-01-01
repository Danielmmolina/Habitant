import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Text } from '@rneui/themed';
import { useFonts, Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import { Header } from '../../../components/Shared/Header/Header';
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import { db } from '../../../utils/firebase';
import { LoadingModal } from '../../../components/Shared/LoadingModal/LoadingModal';
import { ListMyPublication } from '../../../components/Publication/ListMyPublicationL/ListMyPublicationL';
import { getAuth } from 'firebase/auth';
import { stylesHomeScreen } from './HomeScreenStylesL'

export function HomeScreenL() {
  const [publications, setPublications] = useState(null);
  const { uid } = getAuth().currentUser;

  useEffect(() => {
    const q = query(
      collection(db, 'infoPublication'),
      where('uidL', '==', uid),
      orderBy('createdAt', 'asc')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setPublications(snapshot.docs);
    });

    return () => unsubscribe();
  }, [uid]);

  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <Header />
      <View style={stylesHomeScreen.containerText}>
      <Text style={{ ...stylesHomeScreen.textTitle, fontFamily: 'Montserrat_400Regular'}}> Mis publicaciones </Text>
      </View>
      {!publications ? (
        <LoadingModal show text="Cargando publicaciones" />
      ) : (
        <ListMyPublication publications={publications} />
      )}
    </>
  );
}
