import firestore from '@react-native-firebase/firestore';



//charge les données de'une collection à partir de son Name
export const loadData = async (collectionName) => { 


    const snapShot = await firestore().collection(collectionName).get() ;

    //vérification des données

    if (!snapShot.empty) {
        const datas = snapShot.docs.map(doc=>{

            return{id:doc.id , ...doc.data()}
            

        })

        return datas ;

    }else{

        return [] ;

    }

} //end load data

