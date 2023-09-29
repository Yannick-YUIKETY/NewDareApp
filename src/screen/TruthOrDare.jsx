import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import styles from '../../styles'
import { useSelector } from 'react-redux'
import player from '../redux/player'

const TruthOrDare = ({navigation , route }) => {
  const { id } = route.params ;

  const action = () => { 
    navigation.navigate('showtruthordare',{id:id , type:'dare'})
  
  }
  const verite = () => { 
    navigation.navigate('showtruthordare',{id:id , type:'truth'})
    
  }

  
  return (

    <View style={styles.container}>
      <Button mode='outlined' onPress={action }>Action</Button>
      <Button mode='outlined' onPress={verite}>Verité</Button>
    </View>

  )
}

export default TruthOrDare