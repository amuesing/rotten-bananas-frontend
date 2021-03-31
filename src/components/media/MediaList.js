import React from 'react'
import MediaCard from './MediaCard'

function MediaList({media, review, handleReviewUpdate, handleAddReview, handleDeleteReview, activeUser, userArray}) {
    const reviewObject = review.map((reviewObj) => {
        return <reviewObj key={reviewObj} id={reviewObj}/>
    } )

    const mediaObject = media.map((mediaObj) => {
        let mediaReviews = [...review].filter((filteredObj) => (filteredObj.medium_id === mediaObj.id))
        
    return <MediaCard handleReviewUpdate={handleReviewUpdate} handleDeleteReview={handleDeleteReview} activeUser={activeUser} key={mediaObj.id} id={mediaObj.id} media={mediaObj} reviews={mediaReviews} handleAddReview={handleAddReview}/>})
        return (
        <div>
        {mediaObject}  
        </div>
    )
}

export default MediaList
