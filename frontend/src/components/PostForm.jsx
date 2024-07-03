import { useState } from "react"
import { usePostsContext } from "../hooks/usePostsContext"
import { useAuthContext } from "../hooks/useAuthContext"

const PostForm = ()=>{
    const {dispatch} = usePostsContext()
    const [title,setTitle] = useState("")
    const [body,setBody] = useState("")
    const [error,setError] = useState(null)
    const {user} = useAuthContext()

    async function handleSubmit(e){
        e.preventDefault()

        if(!user){
            setError('User not logged in')
            return
        }

        const post = {title,body}
        const response = await fetch('http://localhost:4000/api/posts',{
            method : 'POST',
            body : JSON.stringify(post),
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : `Bearer ${user.token}`
            }
        })
        const json = await response.json()

        if(!response.ok){
            setError(json.error)
        }
        if(response.ok){
            setBody("")
            setTitle("")
            setError(null)
            dispatch({type : 'CREATE_POST', payload : json})
        }
    }

    return (
        <form className="create-post-form" onSubmit={handleSubmit}>
            <h2>New Post</h2>

            <label htmlFor="title-input">Title :</label>
            <input 
                id="title-input"
                type="text" 
                onChange={(e)=>{
                    setTitle(e.target.value)
                }} 
                value={title}
            />

            <label htmlFor="body-input">Body :</label>
            <input 
            id="body-input"
            type="text"
            onChange={(e)=>{
                setBody(e.target.value)
            }} 
            value={body} />

            <button>Post</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default PostForm