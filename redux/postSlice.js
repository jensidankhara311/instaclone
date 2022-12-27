import {createSlice ,createAsyncThunk} from "@reduxjs/toolkit"

export const getPosts = createAsyncThunk("/" , async (page)=>{
    return await fetch(`https://api.unsplash.com/photos/?client_id=PWuLcm4KmXnbpPzmhzKRrI8iPFZt1gry5kar_-lu7lg&page=${page}`).then((res)=> res.json())
})

const initialState = {
    allPosts:[] , 
    loading:false
}
const postSlice = createSlice({
    name :"posts" , 
    initialState,
    reducers:{
        setPostsData(state , action){
            return state.allPosts.push(action.payload)
        },
        setSearchDataInPosts(state , action){
            return state.allPosts
        }
    },
    extraReducers:{
        [getPosts.pending] : (state , action)=>{
            state.loading = true;
            
        },
        [getPosts.fulfilled] : (state , action)=>{
            state.loading=false;
            console.log(action.payload , "apires" , state.allPosts)
            console.log(...action.payload , "apiresapiresapires")
            
            state.allPosts = [...state.allPosts ,...action.payload]
        } ,
        [getPosts.rejected]: (state , action)=>{
              state.loading=  false;
        }
    }
})

export const {setPostsData ,setSearchDataInPosts } = postSlice.actions
export default postSlice.reducer