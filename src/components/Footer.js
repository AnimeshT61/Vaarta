import React, { Component } from 'react'
import "./Footer.css"
class Footer extends Component {
    
    render() {
        return (
            <div className="copyright">
                 <p>Copyright &#169; {this.props.year} 100ms, Inc. All rights reserved.</p>
            </div>
        )
    }
}

export default Footer;

