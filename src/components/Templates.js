import React,{useState} from 'react';
import "./Templates.css";
function Templates() {
    const [toggleState,setToggleState]=useState(1);

    const toggleTab=(index)=>{
        setToggleState(index);
    }
    return (
        <div className="Templates">
            <div className="headingTemp"><h2 data-text="Pre-Built Templates">Pre-Built Templates</h2></div>
            <p align="center" className="h4">Reduce development time to days instead of months by starting with one of our fully-customizable templates.</p>
            <div class="temp-tabs">
                        <button className={toggleState===1 ? "tabs active-tabs btn rounded" : "tabs  btn rounded"} onClick={()=>toggleTab(1)}>Edtech</button>
                        <button className={toggleState===2 ? "tabs active-tabs  btn rounded" : "tabs  btn rounded"} onClick={()=>toggleTab(2)}>Corporate World</button>
                        <button className={toggleState===3 ? "tabs active-tabs  btn rounded" : "tabs  btn rounded"} onClick={()=>toggleTab(3)}>MedTech</button>
            </div>
            <div className="vidcontent-tabs">
                <figure className={toggleState===1 ? "vidcontent active-vidcontent" : "vidcontent"}>
                    
                    <video autoPlay="autoPlay" loop="loop" muted="muted" playsInline  className="Template_template-video__3DZ3I">
                        <source src="https://wave.video/embed/60f2c77746e0fb000103f87f/60f2c77746e0fb000103f885.mp4" type="video/mp4"/>
                    </video>
                </figure>
                <figure  className={toggleState===2 ? "vidcontent active-vidcontent" : "vidcontent"}>
                
                    <video autoPlay="autoPlay" loop="loop" muted="muted" playsInline className="Template_template-video__3DZ3I">
                        <source src="https://wave.video/embed/60ec65ac46e0fb0001b73968/60ec65ac46e0fb0001b7396e.mp4" type="video/mp4"/>
                    </video>
                </figure>
                <figure  className={toggleState===3 ? "vidcontent active-vidcontent" : "vidcontent"}>
                    <video autoPlay="autoPlay" loop="loop" muted="muted" playsInline className="Template_template-video__3DZ3I ">
                        <source src="https://wave.video/embed/60ec693a46e0fb0001ef7b91/60ec693a46e0fb0001ef7b97.mp4" type="video/mp4"/>
                    </video>
                </figure>
                </div>
        </div>
    )
}

export default Templates;

