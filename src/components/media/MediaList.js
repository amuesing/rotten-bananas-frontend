import React from 'react'
import MediaCard from './MediaCard'



function MediaList({media, review}) {
    // console.log(review)
    // filter review.id where id === medium.id
    // assign to variable
    // pass down variable to MediaCard as props
    const mediaObject = media.map((mediaObj) => {
        return <MediaCard key={mediaObj.id} id={mediaObj.id} media={mediaObj} review={review}/>})
    return (
        <div>
        {mediaObject}  
        </div>
    )
  
}

export default MediaList
