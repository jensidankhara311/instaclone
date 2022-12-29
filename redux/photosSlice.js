import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const getSearchValue = createAsyncThunk("/search/photos", async (search) => {
    const res = await fetch(`https://api.unsplash.com/search/photos/?client_id=PWuLcm4KmXnbpPzmhzKRrI8iPFZt1gry5kar_-lu7lg&query=${search}&page=2`)
    const data = await res.json()
    return data.results
})

const initialState = {
    allImages: [],
}

const photosSlice = createSlice({
    name: "searchPhotos",
    initialState,
    reducers: {

    },
    extraReducers: {
        [getSearchValue.pending]: (state, action) => {
        },
        [getSearchValue.fulfilled]: (state, action) => {
            state.allImages = action.payload
        },
        [getSearchValue.rejected]: (state, action) => {
        },
    }
})

export const { } = photosSlice.actions;
export default photosSlice.reducer