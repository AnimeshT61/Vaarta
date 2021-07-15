import React, { Component } from 'react'
import "./Features.css"
 class Features extends Component {
    render() {
        return (
            <div className="features">
                <div className="hi"><h2 data-text="Features">Features</h2></div>
                <div className="row skewbox">
                    
                    <div className="col-lg-6 col-12 content">
                        
                        <h1>Super easy to use with cutting edge tech stack in the backend.</h1>
                    </div>
                    <div className="col-lg-6 col-12 imagebox">
                        <figure>
                        <video className="videoInsert" autoPlay="autoPlay" loop="loop" muted="muted" playsInline>
                                <source src="https://wave.video/embed/60ec650946e0fb0001aff293/60ec650946e0fb0001aff299.mp4" type="video/mp4"/>
                            </video>
                        </figure>
                    </div>
                </div>
                
                <div className="row skewbox">
                    <div className="col-lg-6 col-12 imagebox1">
                    <figure>
                            <video autoPlay="autoPlay" loop="loop" muted="muted" playsInline>
                                <source src="https://wave.video/embed/60ec65ac46e0fb0001b73968/60ec65ac46e0fb0001b7396e.mp4" type='video/mp4'/>
                            </video>
                        </figure>
                    </div>
                    <div className="col-lg-6 col-12 content1">
                        <h1>Bandwidth and internet usage controls integrated.</h1>
                    </div>
                    
                </div>
                <div className="row skewbox">
                    
                    
                    <div className="col-lg-6 col-12 content">
                        <h1>Automatic switching between parameters to provide an amazing user experience inspite of connectivity issues.</h1>
                    </div>
                    <div className="col-lg-6 col-12 imagebox">
                    <figure>
                            <video autoPlay="autoPlay" loop="loop" muted="muted" playsInline>
                                <source src="https://wave.video/embed/60ec693a46e0fb0001ef7b91/60ec693a46e0fb0001ef7b97.mp4" type="video/mp4"/>
                            </video>
                        </figure>
                    </div>
                </div>
                <div className="row skewbox">
                    <div className="col-lg-6 col-12 imagebox1">
                    <figure>
                            <video autoPlay="autoPlay" loop="loop" muted="muted" playsInline>
                                <source src="https://wave.video/embed/60effd7d46e0fb0001e98794/60effd7d46e0fb0001e9879a.mp4" type="video/mp4"/>
                            </video>
                    </figure>
                    </div>
                    <div className="col-lg-6 col-12 content1">
                        <h1>Continous improvements in the product to provide a better connectivity and experience.</h1>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Features;
