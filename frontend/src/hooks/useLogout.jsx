import { useAuthContext } from "./useAuthContext"
import { usePostsContext } from "./usePostsContext"

export const useLogout = ()=>{
    const { dispatch } = useAuthContext();
    const { dispatch:postsDispatch } = usePostsContext();

    const logout = ()=>{
        localStorage.removeItem('user')

        dispatch({type:'LOGOUT'})
        postsDispatch({type:'SET_POSTS',payload:null})
    }

    return { logout }
}