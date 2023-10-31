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

/** Cette fonction récupere la liste des actions vérité en fonction de l'identifiant de la catégorie, du type
 * *
 * *
 * * params (id<string> : id category)
 */
export const loadDataDareOrTruth = async (id , type ) => {

    

    const snapShot = await firestore()
                                .collection("TruthOrDare")
                                .where('category' , "==" , id) 
                                .where('type' , "==" , type)
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

/** Cette fonction récupere la liste des actions vérité en fonction de l'identifiant de la catégorie, du type et du tableau tod
 * * le tod correspond au tableau des identifiant des actions et vérité et qui ne retourne pas les actions / veite deja sorti
 * *
 * *
 * * params (id<string> : id category)
 */
export const loadDataDareOrTruthTod = async (id , type , tod) => {

    console.log('tod' , tod) ;

    const snapShot = await firestore()
                                .collection("TruthOrDare")
                                .where('category' , "==" , id) 
                                .where('type' , "==" , type)

                                //tirage sans remise
                                .where(firestore.FieldPath.documentId() , "not-in" , tod )
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