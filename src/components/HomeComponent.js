import React from 'react';
import{Link} from 'react-router-dom';
// Images
import business from '../image/icons/business.png';
import conference from '../image/icons/conference.png';
import food from '../image/icons/food_drink.png';
import festival from '../image/icons/festival.png';
import sport from '../image/icons/icon.png';
import concert from '../image/icons/music.png';
import feature1 from '../image/icons/feature_1.png';
import venue1 from '../image/icons/venue_1.jpg';
import blog2 from '../image/icons/blog_2.jpg';
import feature2 from '../image/icons/feature_2.png';
import feature3 from '../image/icons/feature_3.png';

// Components
import {Slider,Slider1,Slider2} from './Slider';
// import slider1 from './Slider';
import Card from './Card';

function Home(){
    const tag = {
        class1: 'red'
    }

    const miniCards = [
        {  image: business,  heading: 'Business', numEvents: 1  },
        {  image: conference,  heading: 'Conference', numEvents: 1  },
        {  image: festival,  heading: ' Festival', numEvents: 1  },
        {  image: concert,  heading: 'Concert', numEvents: 1  },
        {  image: sport,  heading: 'Sport', numEvents: 1  },
        {  image: food,  heading: 'Food', numEvents: 1  },
    ]

    return(
        <div>
            <header id="showcase">
                    <div id="navbar-content">
                        <nav id="navbar">
                        <h1 className="logo">
                            <span className="text-primary">Sponsor</span> Me
                        </h1>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/listing">Listing</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/page">Page</Link></li>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/register">Register</Link></li>
                            <Link to="/createEvent" className="btn">+Create Event</Link>
                        </ul>
                        </nav>
                    </div>
                    <div className="showcase-content">
                        <h1 className="l-heading">Connecting The World</h1>
                        <p className="lead">Easy to search , you just enter the keyword</p>
                        <div class="inputs">
                            <input type="text" placeholder="Enter Name ...." className="input"></input>
                            <input type="text" placeholder="All Categories...." className="input"></input>
                            <input type="text" placeholder="State, City" className="input"></input>
                            <Link to="/category" className="btn-1">Search</Link>
                        </div>
                    </div>
            </header>
            <div id="mini-card">
                <div className="container">
                    <div className='grid'>
                        {miniCards && miniCards.map((item, index) => (
                            <div key={index}>
                                <img src={item.image} alt=""/>
                                <h2>{item.heading}</h2>
                            <p>{item.numEvents} Event</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div id="upcoming-events">
                <h1 className="large-heading">Upcoming Events</h1>
                <p className="large-paragraph"> You can choose to display featured</p>
                <Slider/>
            </div>
            <div className="how">
                <h1 className="large-heading">How it works</h1>
                <p className="large-paragraph">You can choose to display featured</p>
                <div id="how-card">
                    <div id="how-card-1">
                        <div className="card-image">
                            <img src={feature1} alt="how-image" className="image"></img>
                        </div>
                        <div className="how-card-body">
                            <h2 className="how-heading">Choose What to do</h2>
                            <p className="how-paragraph">Easily find your event via search system with multiple params.</p>
                        </div>
                    </div>
                    <div id="how-card-2">
                        <div className="card-image">
                            <img src={feature1} alt="how-image" className="image"></img>
                        </div>
                        <div className="how-card-body">
                            <h2 className="how-heading">Booking event that you like</h2>
                            <p className="how-paragraph">Choose Ticket add to cart. Support payment via Woocommerce system.</p>
                        </div>
                    </div>
                    <div id="how-card-3">
                        <div className="card-image">
                            <img src={feature1} alt="how-image" className="image"></img>
                        </div>
                        <div className="how-card-body">
                            <h2 className="how-heading">Get the ticket to attend</h2>
                            <p className="how-paragraph"> After booking successfully, You will get ticket in email or download in your account</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="visited-place">
                <h1 className="large-heading">Most Visited Places</h1>
                <p className="large-paragraph">You can choose to display featured</p>
                <Slider1/>
                {/* <div className="visited-card">
                    <img src={venue1} alt="visited card" width="222" height="287"></img>
                    <div className="visited-card-body">
                        <h3 className="visited-heading">Washington</h3>
                        <p className="visited-para">3 Events</p>
                    </div>
                </div> */}
            </div>
            <div className="blog">
                <h1 className="large-heading">Our latest News</h1>
                <p className="large-paragraph">News from Our Blog</p>
                <Slider2/>
                {/* <div className="blog-card">
                    <img src={blog2} alt="blog-image" width="350" height="220"></img>
                    <div className="blog-card-body">
                        <span class="blog-category">Creative</span>
                        <span class="blog-timing">June 06, 2018</span>
                        <h2 className="blog-heading">New York Fashion Week</h2>
                        <p className="blog-paragraph">Hello Guys explore this new upcoming Fashion week in New York</p>
                    </div>
                </div> */}
            </div>
            <div className="newsletter">
                <div className="newsletter-container">
                    <div className="newsletter-heading">
                        <h3 className="newsletter-title">SUBSCRIBE</h3>
                        <h1 className="newsletter-heading">Sign up for Newsletter!</h1>
                    </div>
                    <div className="subscription">
                        <input type="text" name="email" className="subscribe-text" placeholder="Enter your email"></input>
                        <Link to="/" className="btn-subscribe">Subscribe</Link>
                        <hr className="hr"/>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="footer-container">
                    <div className="info">
                        <h3 className="footer-heading">Sponsor Me</h3>
                        <p className="footer-para">Lorem ipsum dolor sit amet, conse ctetuers adipiscing eli sed diam nonum nibhie…</p>
                        <div class="social-links">
                            <Link to="/facebook" className="links">Facebook</Link>
                            <Link to="/instagram" className="links">Instagram</Link>
                            <Link to="/twitter" className="links">Twitter</Link>
                        </div>
                    </div>
                    <div className="about">
                        <h4 className="about-heading">About Us</h4>
                        <ul className="about-list">
                            <li><Link to="/" className="list-link">About Us</Link></li>
                            <li><Link to="/" className="list-link">Submit Event</Link></li>
                            <li><Link to="/" className="list-link">All Venues</Link></li>
                            <li><Link to="/" className="list-link">All Locations</Link></li>
                        </ul>
                    </div>
                    <div className="contact">
                        <h4 className="about-heading">Contact Us</h4>
                        <ul className="about-list">
                            <li><Link to="/" className="list-link">Noida , Uttar Pradesh</Link></li>
                            <li><Link to="/" className="list-link">sponsorme@gmail.com</Link></li>
                            <li><Link to="/" className="list-link">(+011)0123456</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="remain-footer">
                <div className="remain-footer-container">
                    <div className="copyright">
                        <p>© 2020 Sponsor Me. All Rights Reserved.</p>
                    </div>
                    <div className="policy">
                        <p class="remain-policy"> Terms of use | Privacy policy</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;