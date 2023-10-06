import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { addPlayer } from '../../redux/player';

const AddPlayer = () => {

    const [name , setName] = useState() ;

    const dispatch = useDispatch() ;

    //enregistrement du player dans le store
    const send = (value) => { 

        //Formatage de la donnée à ajouter dans le store
        const newPlayer = {

            id   : Date.now(),
            name : value,
            tod  : [],

        }
        
        //Diffuse une information
        dispatch(addPlayer(newPlayer))

        //Vide mon textInput
        setName('') ;
    }

  return (
    <>
        <TextInput 
            label='nom du joueur'
            value={name}
            onChangeText={text => setName(text)}
            onSubmitEditing={(value) => send(value.nativeEvent.text)}
        />

    </>
  )
}

export default AddPlayer