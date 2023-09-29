import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import style from '../style'

const CategoryItem = ({category}) => {
  return (
    <TouchableOpacity style={style.categoryItemContainer} >
      <Text style={style.categoryItemText}>{category.name}</Text>
    </TouchableOpacity>
  )
}

export default CategoryItem