import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { Button } from 'react-native-paper'
import NextPlayer from '../component/button/NextPlayer'
import styles from '../../styles'



const ShowTruthOrDare = (route) => {

  const {id} = route.params ;

  const {players , position} = useSelector( state => state.player)

  return (
    <View style={styles.container}>
      <Text>{players[position].name}</Text>
      <NextPlayer id ={id}/>
    </View>
  )
}

export default ShowTruthOrDare