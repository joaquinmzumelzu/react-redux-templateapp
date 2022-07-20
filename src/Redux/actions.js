
export const SET_EJEMPLO = 'SET_EJEMPLO'
export const GET_ALL_POSTS = 'GET_ALL_POSTS'

export function setEjemplo () {
  return {type: SET_EJEMPLO, payload: 'ejemplo'}
}

export function getAllPosts (){
    return function(dispatch){
        return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(r => r.json())
        .then(data=> dispatch({type:GET_ALL_POSTS,payload:data}))
        .catch(e => console.log(e))  
    }
}



