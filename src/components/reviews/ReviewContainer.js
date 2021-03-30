import React from 'react'
import ReviewCard from './ReviewCard'

const ReviewContainer = ({reviews}) => {
    const reviewObject = reviews.map((reviewObj) => {
        return <ReviewCard key={reviewObj.id} reviews={reviewObj}/>
    })
    return (
        <div>
            {reviewObject}
        </div>
    )
}

export default ReviewContainer
