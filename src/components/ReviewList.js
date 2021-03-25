import React from 'react'
import ReviewCard from './ReviewCard'
import NewReviewForm from './NewReviewForm'

const ReviewList = ({review}) => {
    return (
        <div>
            <ReviewCard review={review}/>
            <NewReviewForm />
        </div>
    )
}

export default ReviewList
