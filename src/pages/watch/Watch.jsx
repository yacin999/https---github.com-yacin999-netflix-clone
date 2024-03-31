import { ArrowBackOutlined } from '@material-ui/icons'
import React from 'react'
import './watch.scss'

function Watch() {
    return (
        <div className="watch">

            <div className="back">
                <ArrowBackOutlined/>
                home
            </div>

            <video 
            src="http://techslides.com/demos/sample-videos/small.mp4" 
            autoPlay  
            controls
            ></video>
        </div>
    )
}

export default Watch
