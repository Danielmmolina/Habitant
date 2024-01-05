import { ScrollView, Dimensions, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import {doc, onSnapshot, collection, query, where, orderBy } from "firebase/firestore"
import { db } from '../../../utils/firebase'
import { Carousel } from '../../Shared/Carousel/Carousel'
import { Loading } from '../../Shared/Loading/Loading'
import { HeaderPublication } from '../../PublicationView/HeaderPublication/HeaderPublication'
import { CharacteristicsView } from '../../PublicationView/CharacteristicsView/CharacteristicsView' 
import { RulesView } from '../../PublicationView/RulesView/RulesView'
import { RoomView } from '../../PublicationView/RoomView/RoomView'
import { HelpView } from '../../PublicationView/HelpView/HelpView'
import { CommentsView } from '../../PublicationView/CommentsView/CommentsView'

const { width } = Dimensions.get('window')

export function PublicationScreen(props) {
  const { route } = props;
  const [lessor, setLessor] = useState ('');
  const [publication, setPublication] = useState('');
  

  useEffect(() => {
    setPublication('');
    onSnapshot(doc(db, 'infoPublication', route.params.id), (doc) =>{
      setPublication(doc.data());
      
    })
  }, [route.params.id]);

  

  useEffect(() => {
    if (publication && publication.uidL) {
      setLessor('');
      onSnapshot(doc(db, 'infoUsers', publication.uidL), (doc) => {
       setLessor(doc.data());
      });
    }
  }, [publication]);


  if(!publication || !lessor) return <Loading show text='Cargando publicacion' />
 
  return (
    <ScrollView>
      
      <Carousel images={publication.images} height = {300} width = {width} />
      
      <HeaderPublication publication={publication} lessor={lessor}/>

      <CharacteristicsView publication={publication}/>

      <RulesView publication={publication} />

      <RoomView />

      <HelpView />

      <CommentsView />



    </ScrollView>
  )
}