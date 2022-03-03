import React from 'react'
import { NavLink } from 'react-router-dom';
// import web from "../images/dish2.jpg"
import web from "../images/Aboutus.jpg"
// import AddCustomer from './AddCustomer'

// import Addcustomer from './Addcustomer'
// import Customer from './Customer'

const About = () => {
  
    return (
        <section id="header" className=''>
        <div className="container-fluid nav_bg">
        <div className='row'>
               <div className="col-10 mx-auto"> 
                 <div className='row'>
                   <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                     <h1>
                <strong className="brand-name"> About</strong>
                       </h1>
                       <h2 className="my-3">
                          Welcome to The CakeSpot, The CakeSpot is a family owned and operated business in Sankeshwar. We carefully select our ingredients for their freshness, flavor and natural value. 
                      </h2>
                      <div className="mt-03">
                           <NavLink to="/" className="btn-get-started ">{""}Get started{""}</NavLink>
                       </div>
                       </div>
                      <div className="col-lg-6 order-1 oreder-lg-2 header-img" id="chark">
                         <img src={web} className="img-fluid animated" alt="home img"/>
                     
                   </div>
                 </div>
               </div>
         </div>
         </div>
   </section>
   
    )
}

export default About
