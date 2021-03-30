import React from 'react'
import ReviewCard from './ReviewCard'

const ReviewContainer = ({reviews, handleDeleteReview}) => {


    const reviewObject = reviews.map((reviewObj) => {
        return <ReviewCard key={reviewObj.id} reviews={reviewObj} handleDeleteReview={handleDeleteReview}/>
    })
    return (
        <div>
            {reviewObject}
        </div>
    )
}

export default ReviewContainer
