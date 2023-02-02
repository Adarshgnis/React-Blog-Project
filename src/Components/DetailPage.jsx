
import React from 'react'
import { Link } from "react-router-dom"
import SingleBlogPage from './SingleBlogPage'



const DetailPage = () => {
    const mystyle = {
        color: "white",
        backgroundColor: "black",
        borderRadius: "8px",
        padding: '5px 20px'
    }

    return (
        <div className='main'>
        <SingleBlogPage/>
        <Link to="/"> <button style={mystyle} >Go Home</button> </Link>
        </div>
    )
}

export default DetailPage;