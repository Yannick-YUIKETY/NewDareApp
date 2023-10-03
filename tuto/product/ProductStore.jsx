import { View, Text, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardProduct from './component/CardProduct';
import { stylesProduct } from './stylesProduct';
import firestore from '@react-native-firebase/firestore';
import { Button } from 'react-native-paper';
import { asc, desc, init } from '../redux/product';


const ProductStore = () => {

    const products = useSelector(state => state.product) ;

    const dispatch = useDispatch() ;

    //classement ascendant
    const ascProduct = () => { 

      console.log("asc") ;

      dispatch(asc()) ; // permet d'utiliser les fonctions qui sont dans le store

    }
        
    //classement descendant
    const descProduct = () => { 

      console.log("desc") ;
      dispatch(desc()) ; // permet d'utiliser les fonctions qui sont dans le store

    }
        
    
    //remise à 0
    const initProduct = () => { 

      console.log("init") ;
      dispatch(init()) ; // permet d'utiliser les fonctions qui sont dans le store

    }

    useEffect(() => {
    
        console.log("product load") ;

        
    }, [])
    

    //console.log('products' , products) ;

  return (
    <View style={stylesProduct.container}>
      <Text>ProductStore</Text>
      <View style={stylesProduct.contentButtonFilter}>
        <Button onPress={ascProduct}  >Asc</Button>
        <Button onPress={descProduct} >Desc</Button>
        <Button onPress={initProduct} >Init</Button>
      </View>
      <FlatList
      data={products}
      renderItem={({item}) => <CardProduct product={item}/>}
      keyExtractor={item => item.id}
      numColumns={"2"}
      
      />
    </View>
  )
}

export default ProductStore