import React from 'react'
import ReviewCard from './ReviewCard'

const ReviewContainer = ({reviews, handleReviewUpdate, handleDeleteReview, activeUser}) => {

    const reviewObject = reviews.map((reviewObj) => {
        return <ReviewCard handleReviewUpdate={handleReviewUpdate} key={reviewObj.id} reviews={reviewObj} handleDeleteReview={handleDeleteReview} activeUser={activeUser}/>
    })
    return (
        <div>
            {reviewObject}
        </div>
    )
}

export default ReviewContainer
