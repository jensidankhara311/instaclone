import React from 'react'
import { Icon_dollar } from '../lib/config'

const Botton_Right_Section = () => {
    return (
        <div className='right_content_section_botton_post'>
            <div className="right_section_top_tip">
                <div className="right_section_top_tip_dollar">
                    <img src={Icon_dollar} />
                </div>
                <p>Send Tip</p>     
            </div>
            <div className="save_right_section_post_bottom_section">
                <img src="images/save-instagram.png" />
            </div>
        </div>
    )
}

export default Botton_Right_Section