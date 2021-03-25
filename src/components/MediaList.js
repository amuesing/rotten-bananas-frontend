import React from 'react'
import MediaCard from './MediaCard'

let movieList
let tvList

function MediaList() {
    return (
        <div>
        {movieList}
        {tvList}
         <MediaCard />   
        </div>
    )

}

export default MediaList
