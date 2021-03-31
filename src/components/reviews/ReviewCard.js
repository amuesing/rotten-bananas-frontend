import React, { useState } from 'react'

function ReviewCard({reviews, handleDeleteReview, handleReviewUpdate, userArray, activeUser}) {
const [updatedReview, setUpdatedReview] = useState(reviews.review)
const [updatedRating, setUpdatedRating] = useState(reviews.rating)

const userObj = userArray.map((user) => user.id, user.username)

console.log(userObj)

// const username = userObj.find(userObj.id === reviews.user_id);


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
            body: JSON.stringify({  review: updatedReview,
                                    rating: updatedRating}),
        })
        .then((r) => r.json())
        .then((updatedReview) => {handleReviewUpdate(updatedReview);
        });
    }

    return (
        <div style={{border: '2px solid black'}}>
            <p>{reviews.user_id}</p>
            <p>{reviews.date}</p>
            <form onSubmit={handleUpdate}>
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
