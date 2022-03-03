import React,{useState} from 'react'
import Addcake from './Addcake'
import Cakes from './Cakes'
import Spinner from './Spinner';

const Addcakedetails = (props) => {
    
    const [loading, setloading] = useState(false)
    const {showAlert}=props;
  return (
    <section id="header" className=''>
    <div className="container-fluid nav_bg">
    <div className="col-10 mx-auto"> 
             
               <Addcake loading={loading} setloading={setloading} showAlert={showAlert}/>
                {loading && <Spinner/>}              
               <Cakes loading={loading} setloading={setloading} showAlert={showAlert}/>

        </div>
        </div>
        </section>
  )
}

export default Addcakedetails