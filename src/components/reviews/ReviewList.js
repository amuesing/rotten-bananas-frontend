import React from 'react'
import ReviewCard from './ReviewCard'
import NewReviewForm from './NewReviewForm'

const ReviewList = ({review}) => {
    const reviewObject = review.map((reviewObj) => {
        return <ReviewCard review={reviewObj}/>
    })
    return (
        <div>
            {reviewObject}
            <NewReviewForm />
        </div>
    )
}

export default ReviewList
