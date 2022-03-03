import React from 'react'
import "./navbar.css"
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Navbar() {
  console.log('On load before',localStorage.getItem('token'));
  const history=useHistory(null)
  const handlelogout=(e)=>{
    // e.preventDefault();
    // console.log('This before',localStorage.getItem('token'));
    localStorage.removeItem('token');   
    // console.log('This After',localStorage.getItem('token'));
    history.push('/');
  }
 
      return <div>
      <div className="container-fluid nav_bg">
         <div className='row'>
             <div className="col-10 mx-auto">  
          
     <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
     <div className="container-fluid">
   <NavLink className="navbar-brand" to="#">   <strong className="brand-name"> <span style={{color:'blue'}}>Cake</span><span style={{color:'red'}}>Spot</span></strong></NavLink>
   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <span className="navbar-toggler-icon"></span>
   </button>
   <div className="collapse navbar-collapse" id="navbarSupportedContent">
     <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
       <li className="nav-item">
         <NavLink activeClassName='menu_active' className="nav-link" aria-current="page" to="/home">Home</NavLink>
       </li>
       <li className="nav-item">
         <NavLink activeClassName='menu_active' className="nav-link" to="/about">About</NavLink>
       </li>
       <li className="nav-item">
         <NavLink activeClassName='menu_active' className="nav-link" to="/services">Service</NavLink>
       </li>
       <li className="nav-item">
         <NavLink activeClassName='menu_active' className="nav-link" to="/contact">Contact</NavLink>
       </li>  
       <li className="nav-item">
        {localStorage.getItem('token')?
          <NavLink activeClassName='menu_active' className="nav-link" to="/Addcake">Add cake</NavLink>:<></>}
         </li> 
         <li className="nav-item">
         {localStorage.getItem('token')?
          <NavLink activeClassName='menu_active' className="nav-link" to="/customerdet">Customer detail</NavLink>:<></>}
         </li> 
         <li className="nav-item">
         {localStorage.getItem('token')?
          <NavLink activeClassName='menu_active' className="nav-link" to="/AddCustomer">Add Customer</NavLink>:<></>}
         </li>   
     </ul>
     {localStorage.getItem('token')?<form className="d-flex">
      <button  className="btn btn-info mx-1" onClick={handlelogout}>Logout</button>
      </form>:
       <NavLink className="btn btn-info mx-1" to="/login" role="button">AdminLogin</NavLink>
       }
   </div>
 </div>

</nav>

</div>
</div>
</div> 

 </div>;
    
}

export default Navbar
