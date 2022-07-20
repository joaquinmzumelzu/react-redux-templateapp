
import {GET_ALL_POSTS} from './actions.js'


const initialState = {
  ejemplo: 'hola',
  allPost: []
}


export default function reducer(state = initialState,action){
  //aqui van los condicionales action.type
  if(action.type === GET_ALL_POSTS){
    return {...state, allPost: action.payload}
  }
  
  return state;
}