import React from 'react'
import "../Styles/About.css"
import { GiUnderhand } from 'react-icons/Gi';

import about_img from "../assets/Rectangle -5.png"
const About = () => {
  return (
    <div id='about' className='container mt-4' style={{transition:"0.5s"}}>

    {/* --------------Animated Slide Button-----------------------------------  */}
      <button data-text="Awesome" className="button mt-5  ">
          <span className="actual-text text-black">&nbsp;ABOUT&nbsp;</span>
          <span className="hover-text" aria-hidden="true">&nbsp;ABOUT&nbsp;</span>
      </button>
      <hr />
    {/*------------------------------ */}
    <div className="container">
      <div className="display-6 mt-4 mb-4 d-flex justify-content-center GRS">
        ITS US G R SYSTEMS
      </div>    
      <p style={{color:"gray"}} className='GRS1 justify-content-center mb-5 text-center ' >
        GR Systems starts a process with analysis and ends up in a optimum solution which is best suitable in future. Our Objective is to provide our corporate business clients with complete IT infrastructure and cost-effective business solutions through the efficient deployment and integration of information technology.
      </p>
      
      <img className='w-100 img' src={about_img} alt="Image" />
      <div className="row mt-5">
        <div className="col-md-6  mt-5">
        <h5 className='fst-italic' >WHAT WE DO</h5>
            <p className='' style={{color:"gray"}} >
              We offer comprehensive product line of Hardware, Software, Networking products and Services designed to meet your IT requirements. The analysis flows up with researches that are related to the problem defined and with similar problems reported earlier and development towards the solution moves in the aspect of high look and feel by blending more innovative strategies. Its range of offerings Application consulting, IT Hardware, System integration, ERP solutions, Office automation, CRM solution, HR Solutions, android app development SMS services through application, Online TollFree application and web products like web designs, hosting, site, application and much more... 
            </p>
        </div>
        <div className="col-md-6  mt-5">        
            <h5 className=' fst-italic' >WHO WE ARE</h5>
            <p className='' style={{color:"gray"}} >
              G.R.SYSTEMS comprises of several SBU’S, Hardware ,Software , UPS , Web & Mobile App and many more. The decades old enterprise, was founded in 1999. Since 2000 G.R.SYSTEMS has focused on creating software that fully supports the day-to-day operational requirements and strategic vision of hundreds of companies.Our software provides fully integrated control and visibility across an enterprise, enabling significant improvement in efficiency, productivity and financial performance.G.R.SYSTEMS software solution is always improving. Development is guided by the operational requirements and best practices of our customers, who rank among the leading companies in their industry.
            </p>
        </div>
      </div>

      <div className="row mt-5 justify-content-center">
        <div className="d-flex cards_h justify-content-evenly">          
            <a className="card1 me-3" href="#about">
              <p className="small">
                <span className='fs-2 text-black'> 01. </span>Unregulated transactions in a decentralized digital world – the metaverse – comes with systemic risk and could create ripple effects on financial stability.</p>
              <div className="go-corner" href="#about">
                <div className="go-arrow">
                  <GiUnderhand/>
                </div>
              </div>
            </a>          
            <a class="card1 me-3" href="#about">
              <p class="small me-3">
              <span className='fs-2 text-black'> 02. </span>
                Building the metaverse is as much a hardware problem as it is a programming one. Does the right infrastructure exist?
                Share Here
          
                </p>
              <div className="go-corner" href="#about">
                <div className="go-arrow">
                  <GiUnderhand/>
                </div>
              </div>
            </a>
            <a className="card1" href="#about">
              <p className="small">
                  <span className='fs-2 text-black'>  03.   </span>
                    The metaverse doesn't spell the end of cities. Meeting, emotion, and empathy can supercharge the megacity experience. – Harvard Business Review
                </p>
              <div className="go-corner" href="#about">
                <div className="go-arrow">
                  <GiUnderhand/>
                </div>
              </div>
            </a>
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default About