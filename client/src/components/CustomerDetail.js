import React,{useState} from 'react'
import Customer from './Customer'

const CustomerDetail = () => {
  const [load, setload] = useState(false)
  return (<section id="header" className=''>
  <div className="container-fluid nav_bg">
  <div className="col-10 mx-auto"> 
     <div>
    {/* <Addcustomer/>
    <Customer/> */}
  
    <Customer load={load} setload={setload}/>
    
</div>
</div>
  </div>
  </section>
  )
}

export default CustomerDetail