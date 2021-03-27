import React, {useState, useEffect} from 'react'
import NavBar from '../NavBar';
import Featured from '../Featured.js'
import MediaList from './MediaList.js'

function MediaContainer() {
    const [searchTerm, setSearchTerm] = useState("")
    const [media, setMedia] = useState([])
    const [review, setReview] = useState([])
    console.log(searchTerm)

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
    

    return (
        <div>
            <NavBar searchTerm={searchTerm} onSearchChange={setSearchTerm}/>
            <Featured />           
            <MediaList media={media} review={review}/>
        </div>
    )
    }

export default MediaContainer