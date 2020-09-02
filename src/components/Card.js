import React from 'react'
import card from '../image/icons/card.jpg';
import {Link} from 'react-router-dom'
//images
import venue1 from '../image/icons/venue_1.jpg';
import blog2 from '../image/icons/blog_2.jpg';

const Card = ({title, price, heading, timing, location}) => {
    return (
        <div id="event-card">
            <img src={card} alt="card-image" width="398" height="250"></img>
            <div id="event-card-body">
                <Link to="/" id="tag" >{title}</Link>
                <span id="amount">${price}</span>
                <div id="card-title">
                    <h2 id="heading">{heading}</h2>
                </div>
                <p id="timing"> {timing}</p>
                <p id="timing">{location}</p>
                <Link to="/" id="ticket">Get Ticket</Link>
            </div>
        </div>
    )
}
const Card1=({city,eventcount})=>{
    return(
        <div className="visited-card">
            <img src={venue1} alt="visited card" width="222" height="287"></img>
            <div className="visited-card-body">
                <h3 className="visited-heading">{city}</h3>
                <p className="visited-para">{eventcount} Events</p>
            </div>
        </div>
    )
}
const Card2=({category,timing,heading,description})=>{
    return(
        <div className="blog-card">
            <img src={blog2} alt="blog-image" width="318" height="220"></img>
            <div className="blog-card-body">
                <span className="blog-category">{category}</span>
                <span className="blog-timing">{timing}</span>
                <h2 className="blog-heading">{heading}</h2>
                <p className="blog-paragraph">{description}</p>
            </div>
         </div>
    )
}
export {Card , Card1, Card2};
