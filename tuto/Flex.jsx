import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { stylesTuto } from './style'
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconFontawesome from 'react-native-vector-icons/FontAwesome';

const Flex = ({nom , prenom}) => {
  return (
    <View style={stylesTuto.contentFlex}>
      <View style={stylesTuto.box1}>
        <IconMaterialIcons name="menu" size={30} color="#900" />
      </View>
      <View style={stylesTuto.box2}>
        <Text style={stylesTuto.textBox2}>Home </Text>
      </View>
      <View style={stylesTuto.box3}>

        <IconFontawesome name="car" size={30} color="#900" />

      </View>
    </View>
  )
}

export default Flex

const styles = StyleSheet.create({})