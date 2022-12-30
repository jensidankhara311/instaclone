import React, { useEffect } from 'react'
import { mainlogo, Profile } from '../lib/config'
import { Notes } from '../lib/config'
import { Notification } from '../lib/config'
import { Chat } from '../lib/config'
import { PostProfile } from '../lib/config'
import { Search_icon } from '../lib/config'
import { useDispatch } from 'react-redux'
import Link from 'next/link'

const Main_Header = (props) => {
  const {setIsSearch , isSearch ,search , setSearch } = props

  const dispatch = useDispatch()

  const handleChange = (e) => {
    setSearch(e.target.value)
    setIsSearch(true)
  }
  return (
    <div>
      <div className="header_main">
        <div className="myheader">
          <div className="left_logo_header">
            <img src={mainlogo} />
          </div>
          <div className="search_header">
            <img src={Search_icon} />
            <input value={search} onChange={handleChange} name="inputValue" type="text" placeholder="Search" style={{outline:"none"}} />
          </div>
          <div className="right_icon_header">
            <img src={Notes} />
            <img
              src={Chat}
            />
            <img src={Notification} />
            <Link href="/searchPage">
              <img src={PostProfile} />
            </Link>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Main_Header
