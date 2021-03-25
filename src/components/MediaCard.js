import React from 'react'
import ReviewContainer from './ReviewContainer'

function MediaCard({review}) {
    return (
        <div> 
           
            <h1>{review.media.title}</h1>
            <h1>{review.media.video}</h1>
            <h1>{review.media.details}</h1>
      
            <ReviewContainer review={review} />
        </div>
    )
}

export default MediaCard
