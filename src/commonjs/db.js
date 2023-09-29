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

/** Cette fonction récupere la liste des actions vérité en fonction de l'identifiant de la catégorie
 * *
 * *
 * * params (id<string> : id category)
 */
export const loadDataDareOrTruth = async (id) => {

    console.log('loadDataDareOrTruth' , id) ;

    const snapShot = await firestore()
                                .collection("TruthOrDare")
                                .where('category' , "==" , id) 
                                .get();

    //vérification des données

    if (!snapShot.empty) {
        const datas = snapShot.docs.map(doc=>{

            return{id:doc.id , ...doc.data()}
            

        })

        return datas ;

    }else{

        return [] ;

    }


}