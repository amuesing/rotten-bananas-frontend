import React, {useState, useEffect} from 'react'
import NavBar from '../NavBar';
import Featured from '../Featured.js'
import MediaList from './MediaList.js'

function MediaContainer() {
    const [searchTerm, setSearchTerm] = useState("")
    const [media, setMedia] = useState([])
    const [review, setReview] = useState([])
    const [user, setUser] = useState([])
    const [activeUser, setActiveUser] = useState(null)

    useEffect(() => {
        fetch('http://localhost:3000/media')
        .then((r) => r.json())
        .then(setMedia)
    }, [])

    useEffect(() => {
        fetch('http://localhost:3000/reviews')
        .then((r) => r.json())
        .then(setReview)
    }, [])

    useEffect(() => {
        fetch('http://localhost:3000/users')
        .then((r) => r.json())
        .then(setUser)
    }, [])

    function updateActiveUser(activeUser) {
        setActiveUser(activeUser)
    }

    function handleDeleteReview(id) {
        const updateReviewsArray = review.filter((reviews) => reviews.id !== id);
        setReview(updateReviewsArray)
    }

    function handleReviewUpdate(updatedReview) {
        console.log(updatedReview)
        // const updatedReviewsArray = review.map((reviews) => {
        //     if (reviews.id === updatedReview.id) {
        //         return updatedReview;
        //     } else {
        //         return reviews;
        //     }
        // })
        // setReview(updatedReviewsArray);
    }

   

    function handleAddReview(newReview) {
        const updatedReviewsArray = [...review, newReview];
        setReview(updatedReviewsArray);
      }

    return (
        <div>
            <NavBar searchTerm={searchTerm} onSearchChange={setSearchTerm} userArray={user} updateActiveUser={updateActiveUser}/>
            <Featured />           
            <MediaList handleReviewUpdate={handleReviewUpdate} handleDeleteReview={handleDeleteReview} activeUser={activeUser} media={media} review={review} handleAddReview={handleAddReview} userArray={user}/>
        </div>
    )
    }

export default MediaContainer