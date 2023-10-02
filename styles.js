import { StyleSheet , StatusBar} from "react-native"; 

export default  StyleSheet.create({
    container: {
      flex: 1,
      margin:10,
      marginTop: StatusBar.currentHeight || 0,
    },
    modal:{
      backgroundColor: 'white',
      padding: 20,
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 10,
      marginVertical: 2,
      marginHorizontal: 16,
      borderRadius:50,
    },
    title: {
      fontSize: 22,
    },

    slide: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'pink',
    },
    slideImage: {
      width: 320,
      height: 320,
      marginVertical: 32,
    },
    SlideText: {
      color: 'rgba(255, 255, 255, 0.8)',
      textAlign: 'center',
    },
    slideTitle: {
      fontSize: 22,
      color: 'white',
      textAlign: 'center',
    },

  });