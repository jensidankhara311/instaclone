import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const getPosts = createAsyncThunk("/", async (page) => {
    return await fetch(`https://api.unsplash.com/photos/?client_id=PWuLcm4KmXnbpPzmhzKRrI8iPFZt1gry5kar_-lu7lg&page=${page}`).then((res) => res.json())
})

const initialState = {
    allPosts: [],
}

const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        setPostsData(state, action) {
            return [...state.allPosts, ...action.payload]
        },
    },
    extraReducers: {
        [getPosts.pending]: (state, action) => {
            state.loading = true;
        },
        [getPosts.fulfilled]: (state, action) => {
            state.loading = false;
            state.allPosts = [...state.allPosts, ...action.payload]
        },
        [getPosts.rejected]: (state, action) => {
            state.loading = false;
        },
    }
})

export const { setPostsData, } = postSlice.actions;
export default postSlice.reducer