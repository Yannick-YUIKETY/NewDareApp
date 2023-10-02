import { View, Text } from 'react-native'
import React from 'react'
import { Avatar, Button, Card } from 'react-native-paper';
import { stylesProduct } from '../stylesProduct';

const CardProduct = ({product}) => {
  return (
    <Card style={stylesProduct.cardProduct} mode='contained' contentStyle={stylesProduct.cardContent} >
    {/* <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent}/> */}
    <Card.Cover source={{ uri: product.thumbnail }} />
    <Card.Content>
      <Text variant="titleLarge" style={stylesProduct.cardTitle}>{product.title}</Text>
      <Text variant="bodyMedium" style={stylesProduct.cardPrice}> $ {product.price}</Text>
    </Card.Content>

    {/* <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions> */}
  </Card>
  )
}

export default CardProduct