import React from 'react';
import './App.css'
import Footer from './Footer';
import { BrowserRouter as Router, Switch, Route,} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import About from './About';
import Home from './Home';
import Login from './Login';
import Service from './Service';







function App(){

//    const name = () => {
//      console.log("happy hacking");
  //   }

  // return(


      
        
  //   </Router>
    
    // <div className="app">
    //   <h1 className="hi">welcome to react class</h1>
    //   <button onClick={name()}>click me</button>
    //   <Childera/>
    //   <Awe/>
    //   <Home/>
    //   <Header/>
   
      // <img src="/img/show.jpg" alt=""/>
    //   {/* <img src="/img/man.JPG" alt=""/> */}
      
  return(
   <Router>


 
     <div>
        <Header/>
       
        

            

        

     
         <Switch>
            <Route path="/home"  component={Home} />
           < Route path="/about"  component={About} />
           < Route path="/login"  component={Login} />
            <Route path="/service" component={Service}/>
          

     
      
            

        </Switch>
        <Footer/>

     </div>
 
    </Router>
  );
}





export default App;