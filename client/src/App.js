import React,{useState} from 'react'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
// import Admin from "./components/Admin";
// // import Addcake from "./components/Addcake";
// import Addcustomer from "./components/Addcustomer";
// import Cakedetails from "./components/Cakedetails";
// import Addcake from "./components/Addcake";
import './index.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import CakeState from './Contet/cakes/Cakestate';
import Alert from './components/Alert';import AddCustomer from './components/AddCustomer';
import Login from './components/Login';
import CustomerDetail from './components/CustomerDetail';
import Addcakedetails from './components/Addcakedetails';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
;
const App=()=> {
  const [alert, setAlert] = useState(null)     
  const showAlert=(message,type)=>{
     setAlert({msg:message,type:type})
     setTimeout(()=>{
     setAlert(null);
     },1500)
  }
  return (
    <div>
      <CakeState>
        
      <Router>
             <Navbar/> 
             <Alert alert={alert}/>
             <div className="container">      
             <Switch>
                <Route exact path="/login">
                 <Login showAlert={showAlert}/>
                </Route>
                <Route exact path="/">
                 <Home/>
                </Route>
                <Route exact path="/home">
                  <Home showAlert={showAlert}/>
                </Route>
                <Route exact path="/about">
                 <About showAlert={showAlert}/>
                </Route>
                <Route exact path="/Addcustomer">
                 <AddCustomer showAlert={showAlert}/>
                </Route>
                <Route exact path="/customerdet">
                 <CustomerDetail showAlert={showAlert}/>
                </Route>
                <Route exact path="/Addcake">
                 <Addcakedetails showAlert={showAlert}/>
                </Route>
                <Route exact path="/services">
                  <Services/>
                </Route> 
                <Route exact path="/contact">
                  <Contact/>
                </Route>
             </Switch>
             </div>
      </Router>
    
      </CakeState>
 {/* <Footer/> */}
    </div>
  );
}

export default App;
