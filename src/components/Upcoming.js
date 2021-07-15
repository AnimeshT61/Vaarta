import React, { Component } from 'react'
import "./Upcoming.css"
class Upcoming extends Component {
    render() {
        return (
            <>
            <div className="hiUp"><h2 data-text="Upcoming...">Upcoming...</h2></div>
            <div className="container">
                
                <div className="infodiv">
                    <div className="infodiv-content">
                        <img src="https://img.icons8.com/fluent/85/000000/dashboard-layout.png" alt="Dashboard"/>
                        <p>Organization-specific dashboards to manage all sorts of meetings.</p>
                        <a  className="btn btn-large" href="#">Read More</a>
                    </div>
                </div>
                <div className="infodiv">
                    <div className="infodiv-content">
                        <img src="https://img.icons8.com/color/85/000000/under-computer.png" alt="Workspace"/>
                        <p>Workspaces within the dashboars to segregate team communications and an overall monitoring of team productivity.</p>
                        <a  className="btn btn-large" className="btn btn-large" href="#">Read More</a>
                    </div>
                </div>
                <div className="infodiv">
                    <div className="infodiv-content">
                    <img src="https://img.icons8.com/officel/85/000000/chatbot.png" alt="Chatbot"/>
                        <p>Chatbot Integration to simplify the process of hosting a meeting.</p>
                        <a  className="btn btn-large" href="#">Read More</a>
                    </div>
                </div>
                <div className="infodiv">
                    <div className="infodiv-content">
                        <img src="https://img.icons8.com/color/85/000000/online-support.png" alt="RealTime"/>
                        <p> Realtime chat module integrated to enable chat feature in the workspaces.</p>
                        <a className="btn btn-large"  href="#">Read More</a>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default Upcoming;
