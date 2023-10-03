import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import firestore from '@react-native-firebase/firestore'
import CardProduct from './component/CardProduct';

const ProductFirestore = () => {

    const [products , setProducts ] = useState([]) ;
    
    //initialisation des datasProducts
    const init = async () => { 

        //recuperation à partir de firebase
        const snapData = await firestore().collection('product').get() ;
        
        console.log("snapData" , snapData) ;

        const dataProducts = snapData.docs.map( product => {

            const newData = {...product.data() , id: product.id }
            return newData ;
        })

        setProducts(dataProducts) ;
    }

    useEffect(() => {
    
        console.log('component load') ;
        init() ;


    }, [])
    
  return (
    <View>
      <Text>ProductFirestore</Text>
      <FlatList
      data={products}
      renderItem={({item})=> <CardProduct product={item}/>}
      key={item => item.id}
      numColumns={2}
      />
    </View>
  )
}

export default ProductFirestore