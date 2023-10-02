import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View , Text} from 'react-native';
import { Button, List,  } from 'react-native-paper';
import styles from '../../styles';

const ItemCategory = ({category}) => {
    
    const navigation = useNavigation() ;

  /*   return(
  <List.Item
     title={category.name}
    
     onPress={() => navigation.navigate('truthordare', {id: category.id})}
    
   />
)*/
return (
  <View style={[styles.slide , {
                                  backgroundColor:category.color != undefined? category.color:"#pink"
                                }
          ]}>
    <Text style={styles.slideTitle}>{category?.name}</Text>
    {/* <Image source={item.image} /> */}

    <Button onPress={() => navigation.navigate('truthordare', {id: category.id})}> Choix categorie </Button>

  </View>
);
};

export default ItemCategory ;