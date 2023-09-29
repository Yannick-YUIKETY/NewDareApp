import { View, Text, FlatList } from 'react-native'
import React from 'react'
import styles from './style'
import CategoryItem from './component/CategoryItem'

const categories = [
    { id:1 , name:'all',      },

    { id:2 , name:'php' ,     },

    { id:3 , name:'JS',       },

    { id:4 , name:'dot.net',  },



] 

const categoryData = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.bigTitle}>categoryData</Text>
        <FlatList
        data={categories}
        renderItem={({item}) => <CategoryItem category={item} />}
        keyExtractor={item => item.id}
        horizontal={true}
        />
    </View>
  )
}

export default categoryData