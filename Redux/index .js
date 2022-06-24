const state = [ 'Take Five', 'Claire de Lune', 'Respect' ];

const addNewSong = {
    type : 'songs/addSong',
    payload : 'Halo'
  };

  const removeSong = {
    type : 'songs/removeSong',
    payload : 'Take Five'
  };

  const removeAll = {
    type : 'songs/removeAll'
  };

  const reducer = (state = initialState, action) => {
    switch (action.type){
      case 'songs/addSong' : {
        return [...state, action.payload];
      }
      case 'songs/removeSong': {
      const newState = state.filter( val => val !== action.payload )
      return newState
      } 
      case 'songs/removeAll' : {
        return [];
      } 
      default : {
        return state;
      }
    }
    }
    
    
    
    const initialState = [ 'Take Five', 'Claire de Lune', 'Respect' ];