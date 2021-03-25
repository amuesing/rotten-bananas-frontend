import React from 'react'
import MediaCard from './MediaCard'



function MediaList({reviews}) {
    const mediaObject = reviews.map((reviewObj) => {
        return <MediaCard key={reviewObj.id} id={reviewObj.id} review={reviewObj}/>})
    return (
        <div>
        {mediaObject}  
        </div>
    )
  
}

export default MediaList
