import React from 'react'


const ReviewCard = ({reviews}) => {
    console.log(reviews)
    return (
        <div>
             <h1>{reviews.date}</h1>
            <h1>{reviews.review}</h1>
            <h1>{reviews.rating}</h1>
        </div>
    )
}

export default ReviewCard
