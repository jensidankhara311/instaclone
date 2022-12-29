import { configureStore } from '@reduxjs/toolkit'
import postReducer from "./postSlice"
import photoReducer from "./photosSlice"

const store = configureStore({
  reducer: {
    posts:postReducer, 
    searchPhotos:photoReducer
  },
})

export default store