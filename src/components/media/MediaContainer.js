import React, {useState, useEffect} from 'react'
import NavBar from '../NavBar';
import Featured from '../Featured.js'
import MediaList from './MediaList.js'

function MediaContainer() {
    const [searchTerm, setSearchTerm] = useState("")
    const [media, setMedia] = useState([])
    const [review, setReview] = useState([])
    const [user, setUser] = useState([])

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

    function handleAddReview(newReview) {
        const updatedReviewsArray = [...review, newReview];
        setReview(updatedReviewsArray);
      }

    return (
        <div>
            <NavBar searchTerm={searchTerm} onSearchChange={setSearchTerm} userArray={user}/>
            <Featured />           
            <MediaList media={media} review={review} handleAddReview={handleAddReview}/>
        </div>
    )
    }

export default MediaContainer