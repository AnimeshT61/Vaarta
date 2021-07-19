import React, { Component } from 'react'
import CustomProperties from 'react-custom-properties';
import "./ComingSoon.css"
class ComingSoon extends Component {
    render() {
        return (
                <div className="row Coming">
                    <div className="cup-div col-lg-6 col-12 order-lg-1 order-2">
                        <div className="plate"></div>
                        <div className="cup">
                            <div className="top">
                                <div className="vapor">
                                    <CustomProperties properties={{ '--i': '1' }}><span ></span></CustomProperties>
                                    <CustomProperties properties={{ '--i': '3' }}><span ></span></CustomProperties>
                                    <CustomProperties properties={{ '--i': '16' }}><span ></span></CustomProperties>
                                    <CustomProperties properties={{ '--i': '5' }}><span ></span></CustomProperties>
                                    <CustomProperties properties={{ '--i': '13' }}><span ></span></CustomProperties>
                                    <CustomProperties properties={{ '--i': '20' }}><span ></span></CustomProperties>
                                    <CustomProperties properties={{ '--i': '6' }}><span ></span></CustomProperties>
                                    <CustomProperties properties={{ '--i': '7' }}><span ></span></CustomProperties>
                                    <CustomProperties properties={{ '--i': '10' }}><span ></span></CustomProperties>
                                    <CustomProperties properties={{ '--i': '8' }}><span ></span></CustomProperties>
                                    <CustomProperties properties={{ '--i': '17' }}><span ></span></CustomProperties>
                                    <CustomProperties properties={{ '--i': '11' }}><span ></span></CustomProperties>
                                    <CustomProperties properties={{ '--i': '12' }}><span ></span></CustomProperties>
                                    <CustomProperties properties={{ '--i': '14' }}><span ></span></CustomProperties>
                                    <CustomProperties properties={{ '--i': '2' }}><span ></span></CustomProperties>
                                    <CustomProperties properties={{ '--i': '9' }}><span ></span></CustomProperties>
                                    <CustomProperties properties={{ '--i': '15' }}><span ></span></CustomProperties>
                                    <CustomProperties properties={{ '--i': '4' }}><span ></span></CustomProperties>
                                    <CustomProperties properties={{ '--i': '19' }}><span></span></CustomProperties>
                                </div>
                                <div className="circle">
                                    <div className="tea">

                                    </div>
                                </div>
                            </div>
                            <div className="handle">

                            </div>
                        </div>
                    </div>
                    <div className="Arrivalinfo col-lg-6 col-12 order-lg-2 order-1">
                        <h1>Coming Soon...</h1>
                        <h3>Have Some Tea Meanwhile<img src="https://img.icons8.com/color/35/000000/happy--v1.png" alt="smiley"/></h3>
                    </div>
                </div>
            
            
        )
    }
}

export default ComingSoon;
