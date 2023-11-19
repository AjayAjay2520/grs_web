import React from 'react'
import logo from '../assets/grs_logo.png'
import { FaFacebookF } from 'react-icons/Fa';
import { BsWhatsapp } from 'react-icons/Bs';
import { BsTwitter } from 'react-icons/Bs';
import { BsLinkedin } from 'react-icons/Bs';
import "../Styles/Footer.css"


const Footer = () => {
  return (
    <div id='footer' className='container mt-5'>
        
        <div className="row d-flex flex-wrap justify-content-evenly " style={{color:"gray"}}>  
            <div className="col-md-4 col-sm-3">
                <h3><img className=' w-25 mb-3' src={logo} alt="" /> G.R.Systems</h3>
                <p>46A 1st Floor, Ooty House,<br />
                    Dr Radhakrishna Road,<br />
                    2nd Street Extension,<br />
                    Gandhipuram, <br />
                    Coimbatore-641 012
                </p>
                <h6>PHONE : +91-422-4384887</h6>
                <h6>MOBILE : +91-9894049206</h6>
                <h6>EMAIL : <a href="https://mail.google.com/mail/u/0/#search/websolution%40grsystems.co.in">websolution@grsystems.co.in</a></h6>

            </div>
            <div className="col-md-5  col-sm-3">
                <div className="map img-fluid">
                    <iframe 
                        style={{width:"300px",height:"350px"}} 
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3916.215877646697!2d76.967183!3d11.0224235!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba858530bab1a95%3A0x1ae6aa65e0adeae0!2sGR%20Systems!5e0!3m2!1sen!2sin!4v1698948424032!5m2!1sen!2sin">                  
                    </iframe>
                </div>            
            </div> 

            <div className="sm_icons col-md-3 col-sm-3">     
                <div className="b_icons">
                    <a href="https://en-gb.facebook.com/grsystems.cbe" className='facebook' ><FaFacebookF/></a>
                    <a href="#" className='whatsapp' ><BsWhatsapp/></a>
                    <a href="#" className='twitter' ><BsTwitter/></a>
                    <a href="#" className='Linkedin' ><BsLinkedin/></a>
                </div>
                <div className="mt-5 terms">
                    <a href='/terms'>Terms&condition</a> <br />
                    <a className='mt-3 mb-3' href="/refund">Refund & Cancellation Policy</a> <br />
                    <a href="/privacy">Privacy Policy</a> <br />
                </div>            
            </div>

            <hr className='mt-4'/>            
            <div className="row d-flex">
                <div className="copy">
                    <h4> &#169; Copyrights 2023 - GRS.All Rights Reserved. </h4>
                </div>
        
            </div>

        </div>
    
    </div>
  )
}

export default Footer