import React from 'react'

const ReviewCard = ({reviews, handleDeleteReview}) => {

    function handleDeleteClick() {
        fetch(`http://localhost:3000/reviews/${reviews.id}`, {
            method: "DELETE"
    });
        handleDeleteReview(reviews.id)
}
    return (
        <div style={{border: '2px solid black'}}>
            
            <h1>{reviews.date}</h1>
            <h1>{reviews.review}</h1>
            <h1>{reviews.rating}</h1>
            <button>Update</button>
            <button onClick={handleDeleteClick}>Delete</button>
        </div>
    )
}

export default ReviewCard
