import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            
            
            <div className="headerLeft">
               
                
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular Hain Apn</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated hun Main</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Anewala Hain Apan</span></Link>
                

                

            </div>
        </div>
    )
}

export default Header