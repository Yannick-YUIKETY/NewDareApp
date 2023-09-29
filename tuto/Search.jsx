import { View, Text } from 'react-native'
import React from 'react'
import { stylesTuto } from './style'
import { Searchbar } from 'react-native-paper'

const Search = () => {


    const [searchQuery, setSearchQuery] = React.useState('');
  
    const onChangeSearch = query => setSearchQuery(query);
  return (
    <View style={stylesTuto.contentFlex}>
      <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
    </View>
  )
}

export default Search