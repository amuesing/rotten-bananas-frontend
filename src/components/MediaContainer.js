import React from 'react'
import Featured from './Featured.js'
import MediaList from './MediaList'


function MediaContainer({reviews}){
    

    return (
        <div>
            <h1>MediaContainer</h1>
            <Featured />
                
            <MediaList reviews={reviews} />
        </div>
    )
    }

export default MediaContainer