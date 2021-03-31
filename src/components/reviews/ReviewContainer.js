import React from 'react'
import ReviewCard from './ReviewCard'

const ReviewContainer = ({reviews, handleReviewUpdate, handleDeleteReview, activeUser, userArray}) => {


    const reviewObject = reviews.map((reviewObj) => {
        return <ReviewCard userArray={userArray} handleReviewUpdate={handleReviewUpdate} key={reviewObj.id} reviews={reviewObj} handleDeleteReview={handleDeleteReview} activeUser={activeUser}/>
    })
    return (
        <div>
            {reviewObject}
        </div>
    )
}

export default ReviewContainer
