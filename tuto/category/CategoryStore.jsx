import { View, Text, FlatList } from 'react-native'
import React from 'react'
import style from './style'
import { useSelector } from 'react-redux'
import CategoryItem from './component/CategoryItem'

const CategoryStore = () => {

  const categories = useSelector( state => state.category) ;
  console.log('categories' , categories) ;


  return (
    <View style={style.container}>
      <Text style={style.titleCategoryStore}>CategoryStore</Text>
      <FlatList
      data={categories}
      renderItem={({item}) => <CategoryItem category={item}/>}
      keyExtractor={item => item.id}
      horizontal={true}
      />
    </View>
  )
}

export default CategoryStore