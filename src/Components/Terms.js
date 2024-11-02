import React from 'react'
import "./TermsStyles.css"
import { CiSquareCheck } from "react-icons/ci";

const Terms = () => {
  return (
    <div className='TermsCond'>
        <div className="TC">
            <h4 className='textTC'>Terms & Conditions</h4>
        </div>
        <div className='terms-summa'>
        <ul>
            <li>
            <div className="points">
                <CiSquareCheck size={25} style={{color:"black", marginRight:"1rem"}}/>
                <p className='para-terms'>This is completely online and we are not liable for any costs incurred from your end</p>
            </div>
            </li>
            <li>
            <div className="points">
                <CiSquareCheck size={25} style={{color:"black", marginRight:"1rem"}}/>
                <p className='para-terms'>We can call back your representation if you are not meeting the deadlines</p>
            </div>
            </li>
            <li>
            <div className="points">
                <CiSquareCheck size={25} style={{color:"black", marginRight:"1rem"}}/>
                <p className='para-terms'>You are not allowed to share any confidential information with others and if found guilty then strict action will be taken</p>
            </div>
            </li>
            <li>
            <div className="points">
                <CiSquareCheck size={25} style={{color:"black", marginRight:"1rem"}}/>
                <p className='para-terms'>The representation can be revoked at any time of the year if the CE fails to perform reasonably well</p>
            </div>
            </li>
            <li>
            <div className="points">
                <CiSquareCheck size={25} style={{color:"black", marginRight:"1rem"}}/>
                <p className='para-terms'>Promised goodies and certification will only be provided after the successful completion of the tenure</p>
            </div>
            </li>
        </ul>
        </div>
        
    </div>
  )
}

export default Terms