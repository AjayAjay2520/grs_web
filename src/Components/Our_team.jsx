import React from 'react'
import "../Styles/Our_team.css"
import { BiUser } from 'react-icons/Bi';
import { FiUsers } from 'react-icons/Fi';
import { BsStars } from 'react-icons/Bs';
const Our_team = () => {
  return (
    <div id='our_team' className='container'>
    {/* --------------Animated Slide Button-----------------------------------  */}

        <button data-text="Awesome" className="button mt-5  ">
            <span className="actual-text text-black">&nbsp;OUR_TEAM&nbsp;</span>
            <span className="hover-text" aria-hidden="true">&nbsp;OUR_TEAM&nbsp;</span>
        </button>
        <hr />

        <div className='display-6 team_head d-flex justify-content-center text-center' >Leadership  </div>
          <h5 className='d-flex team_head1 mt-3 justify-content-center text-center'>Committed to creating meaningful change</h5>
        <div style={{color:"gray"}} className=" mt-4 d-flex justify-content-center text-center">
          We make a difference beyond our own business and those of our clients, ensuring our actions and what we do together, empower people and communities to achieve more and live better lives. 
        </div>
        <div style={{color:"gray"}} className=" mt-4 d-flex justify-content-center text-center">
            We have to our credit the most experienced and certified engineers 
            for our field work. Our complete team is well experienced and are 
            technically updated to achieve maximum success in automating and 
            managing IT infrastructure and service delivery.     
          </div>
        <div className="row">
{/*----------CARD-1------------------------- */}
        <div className="e-card playing">
          <div className="image"></div>
          
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          
              <div className="infotop">
                <span className='' style={{fontSize:"3rem"}} ><BiUser/></span>
              <br/>      
          HENSLY RALPH NICHOLAS
          <h6>CEO of G . R . System</h6>
        <br/>
        

        <div className="name">He is the founder of this company and head of all SBU's ,managing Hardware , Software , UPS , Web & Mobile Development</div>
          </div>
        </div>
{/*----------CARD-2------------------------- */}
<div className="e-card playing">
          <div className="image"></div>
          
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          

              <div className="infotop">

              <span className='' style={{fontSize:"3rem"}} ><FiUsers/></span>
              <br/>      
          SOFTWARE TEAM
          <h6>ASP | .NET | JAVA </h6>
        <br/>
        <p className="name">Software Application are developed in various platform. Most talented technical people are working in our live projects.</p>
          </div>
        </div>

{/*----------CARD-3------------------------- */}
<div className="e-card playing">
          <div className="image"></div>
          
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          

              <div className="infotop">

              <span className='' style={{fontSize:"3rem"}} ><FiUsers/></span>
              <br/>      
          HARDWARE TEAM
          <h6>System , UPS , Printer , etc...</h6>
        <br/>
        <div className="name">Our Hardware team does services and sales of UPS ,Laptop , Printer,PC and other System accessories.</div>
          </div>
        </div>
{/*----------CARD-4------------------------- */}

<div className="e-card playing">
          <div className="image"></div>
          
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          

              <div className="infotop">

              <span className='' style={{fontSize:"3rem"}} ><FiUsers/></span>
              <br/>      
              WEB AND MOBILE TEAM
          <h6>Web based and Mobile App</h6>
        <br/>
        <div className="name">Web technicians does all web app, website and hosting and Mobile App in all platform are developed</div>
          </div>
        </div>


        <div className="team_ex row">
          <div className='display-6 text-center '>Our Sectors</div>
          <div style={{color:"gray"}} className=" mt-4 d-flex justify-content-center text-center">
            We can cater to the following sectors , create and implement effective 
            IT solutions. 
          </div>  
          <div className="lis mt-5 d-flex  justify-content-center">
            <div className="col-md-4 ">
              <p><BsStars className='me-3 ms-5'/> Engineering / Manufacturing. </p>
              <p><BsStars className='me-3 ms-5'/> Financial Services. </p>
              <p> <BsStars className='me-3 ms-5'/> Health science & Wellness </p>
            </div> 
            <div className="col-md-4">
              <p> <BsStars className='me-3 ms-5'/> Transport/ Logistics. </p>
              <p> <BsStars className='me-3 ms-5'/> Real estate.</p>
              <p> <BsStars className='me-3 ms-5'/> Retailers </p>
            </div> 
          </div>
        </div>
        
        




        </div>   
    </div>
    
  )
}

export default Our_team