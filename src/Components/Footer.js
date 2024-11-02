import "./FooterStyles.css"
import React from 'react'
import { FaMailBulk, FaInstagram,FaTwitter, FaLinkedin, FaSlack} from "react-icons/fa";
const Footer = () => {
  return(
    <div className="footer">
    <hr className="line"/>

            <div className="right">
                <div className="social-flex">
                <div className="social">
                    <FaInstagram size={28} style={{color:"white", marginRight:"1rem"}}/>
                    <FaLinkedin size={28} style={{color:"white", marginRight:"1rem"}}/>
                    <FaTwitter size={28} style={{color:"white", marginRight:"1rem"}}/>
                    <FaSlack size={28} style={{color:"white", marginRight:"1rem"}}/>
                    <FaMailBulk size={28} style={{color:"white", marginRight:"1rem"}}/>
                </div>
                </div>
                 
                <h4>Entrepreneurship-Cell | IIT Guwahati</h4>
            </div>
    </div>
  )
}

export default Footer