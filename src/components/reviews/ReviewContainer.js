import React from 'react'
import ReviewCard from './ReviewCard'

const ReviewContainer = ({reviews, handleReviewUpdate, handleDeleteReview}) => {


    const reviewObject = reviews.map((reviewObj) => {
        return <ReviewCard handleReviewUpdate={handleReviewUpdate} key={reviewObj.id} reviews={reviewObj} handleDeleteReview={handleDeleteReview}/>
    })
    return (
        <div>
            {reviewObject}
        </div>
    )
}

export default ReviewContainer
