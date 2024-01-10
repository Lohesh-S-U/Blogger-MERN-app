import { usePostsContext } from "../hooks/usePostsContext"

const PostDetails = ({post})=>{
    const {dispatch} = usePostsContext()
    
    const handleClick = async()=>{
        const response = await fetch('http://localhost:4000/api/posts/' + post._id,{
            method : 'DELETE'
        })

        const json =  await response.json()

        if(response.ok){
            dispatch({type : 'DELETE_POST', payload : json})
        }
    }

    return (
        <div className="post-details">
            <h2>{post.title}</h2>
            <p>{post.createdAt}</p>
            <hr />
            <div className="post-body">
                {post.body}
            </div>
            <span onClick={handleClick}>Delete</span>
        </div>
    )
}

export default PostDetails