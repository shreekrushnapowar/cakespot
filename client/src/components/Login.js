import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';
import Spinner from './Spinner'
const Login = (props) => {
  const [loading, setloading] = useState(false)
    const host="http://localhost:3300/signin";
    const [credentials, setcredentials] = useState({username:"",password:""})
    let history=useHistory(); 
const handleClick=async(e)=>
    {     setloading(true);
        // console.log(credentials.username,'wqpekrjgt',credentials.password);
        e.preventDefault();
        const response = await fetch(`${host}`, {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
              },
               body: JSON.stringify({username:credentials.username,password:credentials.password}) 
          }); 
           const json= await response.json();
           console.log(json);
           if(json.success){             
               localStorage.setItem('token',json.token)
               props.showAlert('loged in successfully',"success")
               setloading(false);
               history.push('/home')           
           }
           else{
              setloading(false);
              props.showAlert('invalid credentials',"danger")
              history.push('/login')
           }
           
          
    }

    const onChange=(e)=>{
      setcredentials({...credentials,[e.target.name]:e.target.value})
    }

  return <section id="header" className=''>
  <div className="container-fluid nav_bg">
  <div className="col-10 mx-auto"> 
  <div className="container my-5">
  <div class="card">
  <h5 class="card-header">Login</h5>
  <div class="card-body">
    {loading&&<Spinner/>}
    <form onSubmit={handleClick}>      
            <div className="mb-3">
                 <label htmlFor="text" className="form-label">User Name</label>
                <input type="text" className="form-control" id="username" name="username" value={credentials.name} onChange={onChange} aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" value={credentials.password} onChange={onChange} id="password" name="password"/>
           </div>  
           <button type="submit" className="btn btn-primary">Submit</button>
         </form> 
  </div>
</div>
</div>
</div>
</div>
</section>
  
};

export default Login;
