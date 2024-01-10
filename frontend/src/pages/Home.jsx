import { useEffect } from "react"
import PostDetails from "../components/PostDetails"
import PostForm from "../components/PostForm"
import { usePostsContext } from "../hooks/usePostsContext"

export default function Home(){
    const {posts,dispatch} = usePostsContext()

    useEffect(()=>{
        const fetchPosts = async () => {
            const response = await fetch('http://localhost:4000/api/posts')
            const json = await response.json()

            if(response.ok){
                dispatch({type : 'SET_POSTS', payload : json})
            }
        }
        
        fetchPosts()

    },[])


    return (
        <div className="home">
            <div className="posts">
                {posts && posts.map((post)=>{
                    return <PostDetails key={post._id} post={post}/>
                }
                )}
            </div>
            <PostForm/>
        </div>
    )
}