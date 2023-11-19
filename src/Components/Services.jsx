import React from 'react'
import '../Styles/Service.css'
import web_img from '../assets/web design.webp'
import hard_img from '../assets/HARDWARE.webp'
import UPS_img from '../assets/UPS.webp'
import EDU from '../assets/Learning-img.webp'


import { SiPointy } from 'react-icons/Si';
import { BiSolidBookmarks } from 'react-icons/Bi';


const Services = () => {
  return (
    <div id='services' className='container' >
      {/* --------------Animated Slide Button-----------------------------------  */}

        <button data-text="Awesome" className="button mt-5  ">
            <span className="actual-text text-black">&nbsp;SERVICES&nbsp;</span>
            <span className="hover-text" aria-hidden="true">&nbsp;SERVICES&nbsp;</span>
        </button>
        <hr />

        <h4 className="serve_h4 mt-5 d-flex justify-content-center text-center">
          Here are the solutions we use to create meaningful futures.      
        </h4>
        <h6  style={{color:"gray"}} className=" mt-4 mb-5 d-flex justify-content-center text-center">Whether it's measuring progress on your sustainability efforts, automating and scaling them, or de-risking your investments, our comprehensive set of solutions can help.</h6>

    <div className="3d_cards d-flex flex-wrap justify-content-evenly">
      <div className="parent">
        <div className="card s_card">
            <div className="content-box">
                <span className="card-title text-black mb-4">SOFTWARE</span>
                <p className="card-content">
                Experience makes us perfect. More than a decade of experience in software application ,we can fit in all possible aspects and turn up with the best results for future usage.
                </p>
                <span  className="see-more"><a href="#footer">Contact</a></span>
            </div>          
            <div className="month">
              <img className='img-fluid' src="https://imgs.search.brave.com/xX-_Kt6H92O-WKL2UzVhGFMUGQ_Z0l5GosbRD13_XiY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9u/ZXR3b3JrLW1haW5i/b2FyZC1zZXJ2aWNl/LXRveS1icm9hZGNh/c3RpbmdfMTI4Ni0y/OTAuanBnP3NpemU9/NjI2JmV4dD1qcGc" alt="" />
            </div>       
        </div>
      </div>
      <div className="parent">
        <div className="card s_card">
            <div className="content-box">
                <span className="card-title text-black">WEB & MOBILE</span>
                <p className="card-content">
                  Global developers in web applications which make us special in design and development delivering a perfect look and feel.Mobile Application are developed for all mobile platform.                </p>
                  <span  className="see-more"><a href="#footer">Contact</a></span>
            </div>          
            <div className="month">
              <img className='img-fluid' src={web_img} alt="" />
            </div>       
        </div>
      </div>
      <div className="parent">
        <div className="card s_card">
            <div className="content-box">
                <span className="card-title text-black  mb-4">HARDWARE</span>
                <p className="card-content">
                  Service and care for hardware at your door steps. The moving and processing of data can be ended by making a network application that runs within your environment.                </p>
                  <span  className="see-more"><a href="#footer">Contact</a></span>
            </div>          
            <div className="month">
              <img className='img-fluid' src={hard_img} alt="" />
            </div>       
        </div>
      </div>
      <div className="parent">
        <div className="card s_card">
            <div className="content-box">
                <span className="card-title text-black mb-5">UPS</span>
                <p className="card-content">
                  Sales and Services of all UPS and Batteries including our own manufacture UPS are done here. Under taken AMC & AMS.                </p>
                  <span  className="see-more"><a href="#footer">Contact</a></span>
            </div>          
            <div className="month">
              <img className='img-fluid' src={UPS_img} alt="" />
            </div>       
        </div>
      </div>
      <div className="parent">
        <div className="card s_card" style={{maxHeight:"40rem"}} >
            <div className="content-box">
                <span className="card-title text-black ">EDUCATIONAL OFFERINGS</span>
                <p className="card-content">
                  Students projects and Internships programs for final year students are under taken.                </p>
                <span  className="see-more"><a href="#footer">Contact</a></span>
            </div>          
            <div className="month">
              <img className='img-fluid' src={EDU} alt="" />
            </div>       
        </div>
      </div>
    </div>
        
    <div className="container">
      <div className="mt-5 text-center mb-5" style={{color:"gray"}} >
        <p>
          We start a process with a thorough analysis to carve the optimum 
          solution which helps in the progress and growth of your organization 
          We are recognized as a thought leader and innovator of enterprise 
          transformation and modernization services. Our solutions are 
          designed with industry leading security features to protect your data 
          from attacks. We are best known for our cost effective and 
          functionally effective IT solutions employing the best and latest technology. We are masters in designing comprehensive solutions, 
          procuring the products involved, implementing them effectively and 
          managing the optimum solution enabling our clients to focus on their 
          core activities 
        </p>
      </div>
    </div>

    <div className="SERVICES "></div>   
    <div className='display-6 mb-5 justify-content-center text-center'> Our entire IT services include</div>
      <div className="card p-3 col d-flex   serve_list ">
       <span><BiSolidBookmarks className='me-2'/> Networking / Firewall / Anti-virus software / VPN 
        solution. </span>
      </div>
      <div className="row">
        <div className="col-md-4 mt-4">
          <div className="d-flex gap-4 fs-6 flex-wrap flex-column ">
            <div className="card p-3 col  serve_list ">
              <span><BiSolidBookmarks className='me-2  serve_list '/>
                Azure deploy/maintenance.
              </span>
            </div>
            <div className="card p-3  serve_list  col">
              <span><BiSolidBookmarks className='me-2'/>
                Backup solutions/maintenance
              </span>
            </div>
            <div className="card p-3  serve_list  col">
              <span><BiSolidBookmarks className='me-2'/>
                Monitoring. 
              </span>
            </div>
            <div className="card p-3  serve_list  col">
              <span><BiSolidBookmarks className='me-2'/>
                Email services
              </span>
            </div>
            <div className="card p-3 col  serve_list ">
              <span><BiSolidBookmarks className='me-2'/>
                Domain procurement / maintenance. 
              </span>
            </div>
          </div>      
        </div>

        <div className="col-md-4 mt-4 d-flex flex-wrap">
          <div className="card fs-6 col p-3 ">
              
                <h4 className='text-bold' > 
                  <span><BiSolidBookmarks className='me-2'/>
                  Hardware installations & maintenance.
                  </span> 
                </h4>
              <br />
              <div className="para ms-3 ">
                <p>  <SiPointy/> Computer desktops/laptops.</p>
                <p>  <SiPointy/> Printers </p>
                <p>  <SiPointy/> Network products </p>
                <p>  <SiPointy/> CCTV cameras</p>
                <p>  <SiPointy/> Pos device </p>
                <p>  <SiPointy/> Bio-metrics / access controls</p>
                <p>  <SiPointy/> Computer accessories</p>
                <p>  <SiPointy/> Routers </p>
                <p>  <SiPointy/> Ups / invertors</p>
                <p>  <SiPointy/> Ups / invertor batteries </p>
              </div>
            </div>
        </div>

        <div className="col-md-4 mt-4">
          <div className="d-flex gap-4 fs-6 flex-wrap flex-column ">
            
            <div className="card serve_list  p-3 col">
              <span><BiSolidBookmarks className='me-2'/>
                Information reporting.
              </span>
            </div>
            <div className="card serve_list  p-3 col">
              <span><BiSolidBookmarks className='me-2'/>
                Remote support. 
              </span>
            </div>
            <div className="card serve_list  p-3 col">
              <span><BiSolidBookmarks className='me-2'/>
                Rentals - computer/laptops/UPS 
              </span>
            </div>
            <div className="card serve_list  p-3 col">
              <span><BiSolidBookmarks className='me-2'/>
              SaaS
              </span>
            </div>
            <div className="card serve_list p-3 col">
              <span><BiSolidBookmarks className='me-2'/>
                Software development.
              </span>
            </div>
          </div>      
        </div>

        <div className="container">
          <div className="mt-5 text-center " style={{color:"gray"}} >
            <p>
              In addition to IT solutions, our services extend to a wide scope -
              Application consulting, IT Hardware, System integration, ERP 
              solutions, Office automation, CRM solution, HR Solutions, android app 
              development, SMS services through application, Online Toll-free 
              application and web products like web designs, hosting, site, 
              application, Server setup, Networking Cabling, WI-FI installation, 
              Firewall installation, Data Security Solutions We provide complete 
              solution of Computer and Networking on the basis of Annual 
              Maintenance Contract (AMC) and much more. 
            </p>
          </div>
        </div>
        
        <div className="row mt-5">
            <div className="col-md-6 ">
              <h4 className='mb-4'>Cloud Computing Solutions</h4>
              <p  style={{color:"gray"}}>
              Cloud is the latest revolution in infrastructure paving way to a new 
              platform. Cloud based solutions and Cloud computing have become 
              pivotal in powering the latest developments. We specialize in 
              booming cloud applications and assist in consulting, development, 
              migration and integration services. Our cloud computing team excels 
              in designing customized solutions with database, virtualization and 
              architecture services intact helping in an effortless transition to the 
              cloud . Our team works hand in hand with your organization helping 
              to migrate apps, workflows and enterprise suite of applications to the 
              cloud with minimal to zero downtime and ensures data integrity 
              before & after migration. Cloud enabled app development solutions 
              help in enhancing speed and subsequently reduces the expenses on 
              infrastructure
              </p>
            </div>
            <div className="col-md-6">
              <h4 className='mb-4'>Data Extraction Services</h4>
              <p style={{color:"gray"}}>
              Data extraction is one of the most important services of GR Systems. 
              To compete in this business world, organizations gather some 
              significant information of their employees, customers, sales and on 
              operational factors. This data extraction is a complicated and 
              cumbersome task. Our data extraction team masters the process of 
              data extraction from large amount of complex data scattered in 
              different formats and locations. We intend to collect genuine data by 
              employing proven methods to authenticate extraction of error free 
              data. 
              </p>
              <p style={{color:"gray"}}>
              We have experts to accomplish Data capturing, PDF data extraction, 
              eCommerce data extraction, Social Media data extraction and much 
              more. We have been in the industry for more than 2 decades and we 
              completely understand the ground rules and essentialities in data 
              extraction. We can collect data from multiple sources, analyse, clean 
              and classify the data and present it to you in the required 
              configuration. Our team can extend both to manual and automated 
              techniques in data extraction to provide precise data at a faster pace.
              </p>
            </div>
        </div>
        <div className="row mt-5">
            <div className="col-md-6 ">
              <h4 className='mb-4'>Mobile App Development Solutions</h4>
              <p  style={{color:"gray"}}>
              An effective mobile application is brought to existence integrating 
              conceptual vision and technical expertise. Our app development team 
              can design and transform challenging concept to Mobile apps 
              compatible for mobile devices. With our extensive skill in developing 
              mobile apps, we have been providing best-in-class mobile web, iOS 
              Application and Android SDK Applications for leading businesses. Our 
              profound experience helps us in customizing ace mobile apps for 
              Android & iOS. We can design scalable, cross-platform and hybrid 
              mobility solutions that will support your business goals and progress 
              towards latest platforms- Internet of Things (IoT), Artificial 
              Intelligence (AI), Machine Learning (ML) and beyond.
              </p>
            </div>
            <div className="col-md-6">
              <h4 className='mb-4'>Customer satisfaction</h4>
              <p style={{color:"gray"}}>
              We strongly believe in long lasting customer relationships and this 
              has been the pillar of our business. Customer interaction & customer 
              satisfaction are two major factors of our vision and our team has been 
              built on these perspectives. We design software that provides fully 
              integrated control and visibility across an enterprise, enabling 
              significant improvement in efficiency, productivity and financial 
              performance. We are experts in analyzing the day to day operational 
              activities and in streamlining them towards the organization's vision. 
              Our expertise and experience bolster us to integrate and employ the 
              cutting edge technologies spread across several verticals and provide 
              effective and efficient solutions that drive progress and performance.
                            
              </p>
            
            </div>
        </div>

      </div>

        

    </div>
  )
}

export default Services