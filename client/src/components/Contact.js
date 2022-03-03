import React from 'react'
import { NavLink } from 'react-router-dom';
// import web from "../images/dish2.jpg"
import web from "../images/contact.jpg"

const Contact = () => {
  return (
    <section id="header" className=''>
    <div className="container-fluid nav_bg">
    <div className='row'>
           <div className="col-10 mx-auto"> 
             <div className='row'>
               <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                 <h1>
            <strong className="brand-name"> Address</strong>
                   </h1>
                   <h2 className="my-3" style={{color:'maroon'}}>
                   Halagadgi chal, Subhash road, Sankeshwar -591313
                  </h2>
                  <h2>
                
                  <i style={{color:'deeppink'}} className="fa fa-instagram ">  <span style={{color:'deeppink'}}>cakespot_19 </span></i><br/>
                  <i style={{color:' #ff9933'}} className="fa fa-mobile    ">  <span style={{color:' #ff9933'}}> 8088485604</span> </i>
                  
                 
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

export default Contact