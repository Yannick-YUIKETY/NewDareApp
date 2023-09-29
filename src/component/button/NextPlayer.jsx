import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { nextPlayer } from '../../redux/player'
import { useNavigation } from '@react-navigation/native'

const NextPlayer = ({id}) => {


  const dispatch = useDispatch() ;

  const {players , position } = useSelector(state => state.player) ;

  const navigation = useNavigation() ;

  const suivant = () => { 

    if (players.length == position +1) {
      
      dispatch(nextPlayer(0)) ;

    }else{

      dispatch(nextPlayer( position + 1 )) ;

    }
      navigation.navigate('truthordare' , {id: id}) ;
  }

  

  return (
    <View>
      
      <Button mode='outlined' onPress={suivant} > NextPlayer </Button>

    </View>
  )
}

export default NextPlayer