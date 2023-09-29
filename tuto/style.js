import { StyleSheet } from "react-native";


export const stylesTuto = StyleSheet.create ({
    
    contentFlex:{
        //flex:1,
        paddingVertical:10,
        flexDirection:'row',
        backgroundColor:'red',
        //justifyContent:'center',
        //alignItems:'center',
        justifyContent:'space-around'

    },

    box1:{
        backgroundColor:"#fff",
        height:50,
        width:50,
        borderRadius:25,
        justifyContent:'center',
        alignItems:'center'
    },

    box2:{
        backgroundColor:"#fff",
        height:50,
        width:200,
        justifyContent:"center"
        //borderBottomStartRadius:50,
        //borderBottomEndRadius:50
    },

    box3:{
        backgroundColor:"#fff",
        height:50,
        width:50,
        justifyContent:"center",
        alignItems:'center',
        borderRadius:25
    },

    textBox2:{
        fontSize:32,
        color:"#000"
    }


})