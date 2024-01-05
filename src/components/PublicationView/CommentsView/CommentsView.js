import { View, Text } from 'react-native'
import React from 'react'
import { PublicationStyles } from '../PublicationViewStyles'
import { CommentsStyles } from './CommentsViewStyles'

export  function CommentsView() {
    
  return (
    <View style={PublicationStyles.container}>

      <Text style={PublicationStyles.info}>Comentarios y valoraciones</Text>

    </View>
  )
}