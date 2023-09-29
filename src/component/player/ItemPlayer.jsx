import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import { useDispatch } from 'react-redux'
import { delPlayer } from '../../redux/player'

const ItemPlayer = ({player}) => {

  const dispatch = useDispatch() ;

  const supprimer = () => { 

    //Diffuse une information
    dispatch(delPlayer(player)) ;
    

  }

  return (
    <View>
      <Text>{player.name}</Text>
      <Button onPress={supprimer}>Supp.</Button>
    </View>
  )
}

export default ItemPlayer