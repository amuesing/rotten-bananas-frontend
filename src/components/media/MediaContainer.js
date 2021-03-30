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
    console.log(activeUser)

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

    function handleDeleteReview(id) {
        const deletedReviewsArray = review.filter((reviews) => reviews.id !== id);
        console.log(deletedReviewsArray)
        setReview(deletedReviewsArray)
    }

    function updateActiveUser(activeUser) {
        setActiveUser(activeUser)
    }

    function handleAddReview(newReview) {
        const updatedReviewsArray = [...review, newReview];
        setReview(updatedReviewsArray);
      }

    return (
        <div>
            <NavBar searchTerm={searchTerm} onSearchChange={setSearchTerm} userArray={user} updateActiveUser={updateActiveUser}/>
            <Featured />           
            <MediaList handleDeleteReview={handleDeleteReview} activeUser={activeUser} media={media} review={review} handleAddReview={handleAddReview}/>
        </div>
    )
    }

export default MediaContainer