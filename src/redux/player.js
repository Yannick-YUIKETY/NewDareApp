import { createSlice } from "@reduxjs/toolkit"


const initState = {

    players:   [{id:1 , name:'gulliano' , tod:[]},
                {id:2 , name:'didier',tod:[]},
                {id:3 , name:'anne', tod:[]},
                {id:4 , name:'ludmilla',tod:[]}],
    position: 0 , 

}

export const player = createSlice({
    name:'player',
    initialState : initState ,
    reducers:{
        addPlayer:(state , action)=>{ //Ajouter un joueur

            //ajoute un elément a la fin du tableau
            state.players.push( action.payload ) ;
            return state
        },

        delPlayer:(state , action)=>{ //Supprimer un joueur

            //filtrer les joueurs 
            const newPlayers = state.players.filter(item => item.id != action.payload.id) ;

            //console.log('newPlayers' , newPlayers) ;

            //reformater le state
            const newState = {
                players: newPlayers,
                position: state.position,
            }

            return newState ;
        },
        
        resetPlayer:(state , action)=>{ //vide la liste

        //console.log('vide' )

            return initState ;
        },

        nextPlayer:(state,action) => {

            //console.log('action.payload' ,action.payload) ;

            const newState = { ...state, position: action.payload }

            return newState ;

        },

        updateTod: (state , action ) => {
            //console.log("prev state " , state) ;
            //console.log("action.payload" , action.payload) ;

            state.players[state.position].tod.push(action.payload) ;
            //console.log('nextState' , state) ;
        },

    }

}) ;

export const {addPlayer , delPlayer , resetPlayer , nextPlayer , updateTod} = player.actions ;

export default player.reducer ;