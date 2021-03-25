import React from 'react'
import ReviewList from './ReviewList'

const ReviewContainer = ({review}) => {
    return (
        <div>
            <ReviewList review={review}/>
        </div>
    )
}

export default ReviewContainer
