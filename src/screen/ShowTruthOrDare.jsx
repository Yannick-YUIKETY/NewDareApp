import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from 'react-native-paper'
import NextPlayer from '../component/button/NextPlayer'
import styles from '../../styles'
import { loadDataDareOrTruth } from '../commonjs/db'
import { getRandomInt } from '../commonjs/function'
import { updateTod } from '../redux/player'


const ShowTruthOrDare = ({route}) => {

  const {id , type} = route.params ;

  const dispatch = useDispatch() ;


  const [showtod, setshowTod] = useState() ;

  const {players , position} = useSelector( state => state.player) ;

  const loadDareOrTruth = async () => { 
    //console.log('loadDareOrTruth') ;

    const dataTruthOrDare = await loadDataDareOrTruth(id , type) ;

    //console.log('dataTruthOrDare' , dataTruthOrDare) ; 

    const index = getRandomInt(0 , dataTruthOrDare.length) ;
    //console.log('index' , index) ;

    setshowTod(dataTruthOrDare[index]) ;


    //enregistrement du tod du player dans le store 
    dispatch(updateTod(dataTruthOrDare[index].id )) ;


  }

  useEffect(() => {
    
    loadDareOrTruth() ;

  }, [])
  

  return (
    <View style={styles.container}>
      <Text>{players[position].name}</Text>
      <Text>{showtod?.title}</Text>
      <NextPlayer id ={id}/>
    </View>
  )
}

export default ShowTruthOrDare