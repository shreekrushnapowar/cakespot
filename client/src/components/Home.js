import React from 'react';
import { NavLink } from 'react-router-dom';
// import web from "../images/dish2.jpg"
import web from "../images/dish2.jpg"
const Home = () => {
  return <div>
  <section id="header" className=''>
       <div className="container-fluid nav_bg">
       <div className='row'>
              <div className="col-10 mx-auto"> 
                <div className='row'>
                  <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                    <h1>
                       Make Your Special Day More Spacial<strong className="brand-name"> CAKESPOT</strong>
                      </h1>
                      <h2 className="my-3">
                        we are team of CakeSpot
                     </h2>
                     <div className="mt-03">
                          <NavLink to="/" className="btn-get-started ">{""}Get started{""}</NavLink>
                      </div>
                      </div>
                     <div className="col-lg-6 order-1 oreder-lg-2 header-img">
                        <img src={web} className="img-fluid animated" alt="home img"/>
                    
                  </div>
                </div>
              </div>
        </div>
        </div>
  </section>
  </div>;
};

export default Home;
