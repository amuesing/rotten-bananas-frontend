import React from 'react'


const ReviewCard = ({review}) => {
    return (
        <div>
             <h1>{review.date}</h1>
            <h1>{review.review}</h1>
            <h1>{review.rating}</h1>
        </div>
    )
}

export default ReviewCard
