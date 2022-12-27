import React from 'react'
import { Diamond } from '../lib/config'
import { UserProfile } from '../lib/config'

const Top_content_section = (props) => {
    const {data} = props;
    return (
        <div className="main_profail_content">
            <div className="left_section_post">
                <img src={data?.user?.profile_image?.small   } />
            </div>
            <div className="text_image_contemt_section">
                <div style={{display:"flex"}}>
                    <h3 style={{paddingBottom:"0" , whiteSpace:"nowrap"}}>{data?.user?.name}</h3>
                    <img src={Diamond }/>
                    <p style={{}}>follow</p>
                </div>
                <p>2 months</p>
            </div>
        </div>
    )
}

export default Top_content_section