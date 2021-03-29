import React from 'react'
import ReviewCard from './ReviewCard'

const ReviewContainer = ({reviews}) => {
    const reviewObject = reviews.map((reviewObj) => {
        return <ReviewCard key={reviewObj.id} review={reviewObj}/>
    })
    // console.log(reviews)
    return (
        <div>
            {reviewObject}
        </div>
    )
}

export default ReviewContainer
