import React, { useEffect } from 'react'
import { mainlogo, Profile } from '../lib/config'
import { Notes } from '../lib/config'
import { Notification } from '../lib/config'
import { Chat } from '../lib/config'
import { PostProfile } from '../lib/config'
import { Search_icon } from '../lib/config'
import { useDispatch } from 'react-redux'
import { setSearchDataInPosts } from '../redux/postSlice'

const Main_Header = () => {

  const dispatch = useDispatch()
  
  const [search , setSearch] = React.useState('')
  const [searchPosts , setSearchPosts] = React.useState([])

  const fetchApi  = async ()=>{
    const res = await  fetch(`https://api.unsplash.com/search/photos/?client_id=PWuLcm4KmXnbpPzmhzKRrI8iPFZt1gry5kar_-lu7lg&query=${search}&page=2`)
    const data = await res.json()
    setSearchPosts(data)

    // dispatch(setSearchDataInPosts())
    console.log(data , "data");
  }

  const handleChange = (e)=>{
    setSearch(e.target.value)
  }

  useEffect(()=>{
    fetchApi()
  } , [search])
  return (
      <div className="header_main">
        <div className="myheader">
          <div className="left_logo_header">
            <img src={ mainlogo }/>
          </div>

          <div className="search_header">
            <img src={Search_icon} />
            <input value={search} onChange={handleChange} name="inputVallue" type="text" placeholder="Search" />
          </div>
          <div className="right_icon_header">
            <img src={ Notes } />
            <img
              src={Chat}
            />
            <img src={ Notification} />
            <img src={PostProfile} />
          </div>
        </div>
      </div>
  
  )
}

export default Main_Header
