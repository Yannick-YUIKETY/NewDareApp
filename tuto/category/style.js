import { StyleSheet } from 'react-native';
import { black } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

export default  styles = StyleSheet.create({

    container:{
        margin:10 , 
        //backgroundColor:'red',
    },

    bigTitle:{
        fontSize:18,
        fontWeight:'700',
        color:'pink',
    },

    categoryItemContainer:{
        margin:5 ,
        backgroundColor:'skyblue',
        height:30,
        width:100,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
        borderWidth: 0.5 ,
    },

    categoryItemText:{
        fontSize:12,
        color:'black',
    
    },


})