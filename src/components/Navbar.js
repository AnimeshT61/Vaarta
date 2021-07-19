import React, { Component } from 'react'
import"./Navbar.css"
import img1 from "./images/genuslogo.png";

 class Navbar extends Component {
    render() {
        return (
            <>
                <section id="header">
                    <nav className="navbar navbar-expand-lg fixed-top">
                        <a className="navbar-brand" href="/"><img src={img1}  alt="Brand" width="70px" height="80px"></img></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fas fa-bars"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="/ComingSoon">Sign In</a>
                                </li>
                                <li className="nav-item">
                                    <a className="btn btn-large" href="/ComingSoon">Try It Now</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </section>
                <div className="jumbotron text-center">
                    <div className="intro">
                        <div className="neondiv">
                        <h1>
                            <span>V</span>
                            <span>A</span>
                            <span>A</span>
                            <span>R</span>
                            <span>T</span>
                            <span>A</span>
                        </h1>
                        </div>
                        <h3>Navigating the future.</h3>
                        <p>Enhancing and empowering the video-first world,<br/>attempting to bridge the communication gap through seamless and cutting-edge technology.</p>
                        <a href="/ComingSoon" className="btn btn-outline-light">Get Started</a>
                    </div>

                </div>
            </>
        )
    }
}

export default Navbar;
