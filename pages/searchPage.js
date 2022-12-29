import React, { useState } from 'react'
import axios from 'axios'

const SearchPage = () => {

    const [photo, setPhoto] = useState([])
    const [result, setResult] = useState([])

    const handleChange = (e) => {
        setPhoto(e.target.value)
        console.log(e.target.value)

        const url = `https://api.unsplash.com/search/photos/?page=1&query=${photo}&client_id=PWuLcm4KmXnbpPzmhzKRrI8iPFZt1gry5kar_-lu7lg`

        axios.get(url).then((response) =>
            setResult(response.data.results))
    }
    return (
        <div>
            <div>
                <input value={photo} onChange={handleChange} name="inputValue" type="text" placeholder="Search" style={{ outline: "none" }} />
            </div>
            <div className="search_page_bottom_section">
                <div className="wrapper">
                    <div className="inner_Secrch_post_section">
                        {
                            result.map((data, index) => {
                                return (
                                    <>
                                        <div className="image_post_search_section">
                                            <img src={data.urls.small} />
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchPage