import React from 'react'
import "./ResponeStyles.css"
import { VscFeedback } from "react-icons/vsc";
import { GrAnnounce } from "react-icons/gr";
import { GiAwareness } from "react-icons/gi";
import { FaWpforms } from "react-icons/fa";

const Response = () => {
    return (
        <div className='main-container'>
            <div>
            <h1 className='res-heading'>Responsibilities</h1>
            </div>
            <div class="container">
                
                <div class="card">
                    <div class="imgBx">
                    <GrAnnounce  size={100} style={{color:"white", marginRight:"1rem"}} className='icon'/>
                    </div>
                    <div class="contentBx">
                        <div className='useit'>
                        <h2>Promote and Publicize</h2>
                        <div class="size">
                            <h1>You help promote and publicize E-cell IIT Guwahati events, workshops, seminars, and competitions to the student community</h1>
                        </div>
                        </div>
                       
                    </div>
                </div>
                <div class="card">
                    <div class="imgBx">
                    <GiAwareness  size={100} style={{color:"white", marginRight:"1rem"}} className='icon'/>
                    </div>
                    <div class="contentBx">
                        <div className='useit'>
                        <h2>Increase Awarness</h2>
                        <div class="size">
                            <h1>Increase awareness about entrepreneurship on your campus and publicize through social media</h1>
                        </div>
                        </div>
                       
                    </div>
                </div>
                <div class="card">
                    <div class="imgBx">
                    <FaWpforms size={100} style={{color:"white", marginRight:"1rem"}} className='icon'/>
                    </div>
                    <div class="contentBx">
                        <div className='useit'>
                        <h2>Represent UDGAM <br/>Events</h2>
                        <div class="size">
                            <h1>Help more students sign up smoothly and be their first point of contact representing E-Cell, IIT Guwahati, and your college</h1>
                        </div>
                        </div>
                       
                    </div>
                </div>
                <div class="card">
                    <div class="imgBx">
                    <VscFeedback size={100} style={{color:"white", marginRight:"1rem"}} className='icon'/>
                    </div>
                    <div class="contentBx">
                        <div className='useit'>
                        <h2>Feedback Channel</h2>
                        <div class="size">
                            <h1>You serve as a direct feedback channel, conveying student feedback, and concerns helping us to adapt and improve</h1>
                        </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Response