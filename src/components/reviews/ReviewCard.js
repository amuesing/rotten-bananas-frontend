import React, { useState } from 'react'

function ReviewCard({reviews, handleDeleteReview, handleReviewUpdate}) {
const [updatedDate, setUpdatedDate] = useState(reviews.date)
const [updatedReview, setUpdatedReview] = useState(reviews.review)
const [updatedRating, setUpdatedRating] = useState(reviews.rating)

console.log(handleReviewUpdate)

    function handleDeleteClick() {
        fetch(`http://localhost:3000/reviews/${reviews.id}`, {
            method: "DELETE"
    });
        handleDeleteReview(reviews.id)
}

    function handleUpdate(e) {
        e.preventDefault();
        fetch(`http://localhost:3000/reviews/${reviews.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({  date: updatedDate,
                                    review: updatedReview,
                                    rating: updatedRating}),
        })
        .then((r) => r.json())
        .then((updatedReview) => {handleReviewUpdate(updatedReview);
        });
    }

    return (
        <div style={{border: '2px solid black'}}>
            <form onSubmit={handleUpdate}>
            <input
            type="string"
            placeholder={reviews.date}
            value={updatedDate}
            onChange={(e) => setUpdatedDate(e.target.value)}/>
            <input 
            type="string"
            placeholder={reviews.review}
            value={updatedReview}
            onChange={(e) => setUpdatedReview(e.target.value)}/>
            <input 
            type="integer"
            placeholder={reviews.rating}
            value={updatedRating}
            onChange={(e) => setUpdatedRating(e.target.value)}/>
            <button type="submit">Update</button>
            </form>
            <button onClick={handleDeleteClick}>Delete</button>
        </div>
    )
}

export default ReviewCard
