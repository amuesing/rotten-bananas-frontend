import React from 'react'
import MediaCard from './MediaCard'



function MediaList({media, review}) {
    // console.log(review)
    const mediaObject = media.map((mediaObj) => {
        return <MediaCard key={mediaObj.id} id={mediaObj.id} media={mediaObj} review={review}/>})
    return (
        <div>
        {mediaObject}  
        </div>
    )
  
}

export default MediaList
