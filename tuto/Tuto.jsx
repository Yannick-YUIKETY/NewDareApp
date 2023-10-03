import { View, Text } from 'react-native'
import React from 'react'
import CategoryData from './category/CategoryData'
import CategoryStore from './category/CategoryStore'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import ProductData from './product/ProductData'
import ProductStore from './product/ProductStore'
import ProductFirestore from './product/ProductFirestore'

const Tuto = () => {
  return (
    <Provider store={store}>
    <View>
      {/* <Text>Tuto</Text> */}
      <CategoryData/>
      {/* <CategoryStore/> */}
      {/* <ProductData/> */}
      <ProductStore/>
      {/* <ProductFirestore/> */}
    </View>
    </Provider>
  )
}

export default Tuto