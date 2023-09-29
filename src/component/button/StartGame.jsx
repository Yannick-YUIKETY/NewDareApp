import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


const StartGame = () => {

  const navigation = useNavigation() ; 

  const {players} = useSelector(state => state.player) ;

  console.log('players' , players.length) ;

  const start = () => { 

    navigation.navigate('category') ;

  }

  return (
    <View>
      {/* {players.length >= 2 && <Button  mode='outlined' >StartGame</Button>} */}
      <Button  mode='outlined' disabled={!(players.length >= 2 )} onPress={start} >StartGame</Button>
    </View>
  )
}

export default StartGame