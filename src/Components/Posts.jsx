import { getAllPosts } from "../Redux/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Posts (props){

    const dispatch = useDispatch()
    const allPost = useSelector(state => state.allPost)

    useEffect(() => {
      dispatch(getAllPosts())
    })
    
    return (
      <div>

        {allPost?.map(e => {

           return <div>
              <h1>{e.title}</h1>
              <p>{e.body}</p> 
            </div>
            
        })}

      </div>
    )
}