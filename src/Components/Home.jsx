import Card from "react-bootstrap/Card";
// import { BrowserRouter,Route,Routes  } from "react-router-dom";
import "../Styles/Home.css";
import b_img1 from "../assets/Busness.jpg";
import d_img1 from "../assets/discover_prg.jpg";
import s_img1 from "../assets/system.jpg";

import img1 from "../assets/Rectangle -2.png";
import img2 from "../assets/Rectangle -3.png";
import img3 from "../assets/Rectangle -4.png";

import vision from "../assets/Vision image.jpg";
import mission from "../assets/Mission.jpg";

const Home = () => {
  return (
    <div id="home">
      <div className="main">
        <div className="container" id="About_con">
          <div className="row">
            <div className="col-6">
              <div className="">
                {/*<h3 className="animate-charcter text-justify fw-bolder  ">We help build  digital-ready enterprises</h3>*/}
                <div className="display-6 home_h_t">
                  Empowering Your Digital World
                </div>
                <p className="mt-4">
                  At<h3 id="logo_text">G R SYSTEMS ,</h3>we are dedicated to
                  delivering cutting-edge software solutions that cater to your
                  unique needs. Whether you're a startup looking for a
                  competitive edge or an established business seeking to
                  streamline your operations, we have the expertise and tools to
                  help you succeed.
                </p>
              </div>
            </div>
            <div className="col align-self-center">
              <img className="w-100" src={img1} alt="#" />
            </div>
            <div className="col mt-5 align-self-center">
              <img className="w-100" src={img2} alt="#" />
              <img className="w-100" src={img3} alt="#" />
            </div>
          </div>
        </div>

        {/* --------------Animated Slide Button-----------------------------------  */}
        <div className="slide container">
          <button data-text="Awesome" className=" button mt-5  ">
            <span className="actual-text text-black">&nbsp;INFO...&nbsp;</span>
            <span className="hover-text" aria-hidden="true">
              &nbsp;INFO...&nbsp;
            </span>
          </button>
          <hr />
        </div>

        {/* --------------Card Section-----------------------------------  */}

        <div className="container " style={{ marginTop: "3rem" }}>
          <div className="row d-flex justify-content-between">
            <p
              style={{ color: "gray" }}
              className="GRS1 justify-content-center mb-5 text-center "
            >
              GR Systems is a brainchild of <span className="fs-4 text-success" > Hensley Ralph Nicholas </span> who is the
              CEO of the organization since inception in 1996. Headquartered at
              Coimbatore, GR Systems is an eminent IT solution provider equipped
              with an adept and experienced team addressing all business
              requirements with integrated solutions in the core segments like
              Comprehensive computing infrastructure, Data extraction, Effective
              networking, Storage systems & Backup solutions etc.,{" "}
            </p>

            
            <Card className="m-3 mb-5 s_card col-md-3" style={{ width: "18rem" ,Height:"33rem"}}>
              <Card.Img variant="top" src={d_img1} alt="Card image" />
              <Card.Body>
                <h3 className="mb-4" >Discovery Projects</h3>
                <Card.Text className="fs-6 mb-2">
                  Do a deep dive into your potential project, align business and
                  technology stakeholders, and get a clear view on the resources
                  and timeline needed to achieve its goals before investing in
                  it.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="m-3  s_card col-md-3" style={{ width: "18rem",maxHeight:"33rem" }}>
              <Card.Img variant="top" src={b_img1} alt="Card image" />
              <Card.Body>
                <h3>Business Process Automation</h3>
                <Card.Text>
                  Automate routine and labor-intense operations across the value
                  chain to improve overall performance, the experience of
                  internal users, and scale operations.{" "}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="m-3 s_card col-md-3" style={{ width: "18rem" ,maxHeight:"33rem"}}>
              <Card.Img variant="top" src={s_img1} alt="Card image" />
              <Card.Body>
                <h3>End-to-End System Integration</h3>
                <Card.Text>
                  Connect dots within existing systems and data landscape with
                  APIs to unlock efficiency, eliminate siloed data, shadow IT,
                  and error-prone manual interventions.{" "}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>

    {/*-----------img-cards section---------------------- */}
        
        <div className="row justify-content-center mt-5 mb-4">
            <div className="col-md-2">                  
                <img className="img-fluid" src={vision} alt="" />
            </div>
            <div className="col-md-8" style={{color:"gray"}} >
                <h5 className="text-success">VISION :</h5>
                <p>
                    ur objective is to provide complete IT infrastructure and cost-effective business solutions through the efficient & effective 
                    deployment and integration of information technology to our 
                    corporate business clients.
                </p>
            </div>
        </div>
        <div className="row  justify-content-center mb-5">                
            <div className="col-md-8" style={{color:"gray"}} >
            <h5 className="text-success">MISSION :</h5>
                <p>With our extensive expertise in this field, we intend to empower our 
                customers with exceptional guidance along with simplified solutions 
                and appropriate implementation support.</p>
            </div>
            <div className="col-md-2 end-0">
                <img className="img-fluid" src={mission} alt="" />
            </div>
        </div>
        </div>
        </div>
  );
};

export default Home;
