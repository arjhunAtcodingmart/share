import React, { Component } from 'react';
import App from './App';
import Client from './Client';
import Nav from './Components/Navbar';

//Main Class to call Admin and Client 

class Home extends Component{
    constructor(){
        super();
        this.state={
            check:true
        }
    }
    // handle to change between admin and client
    handle=()=>{
        this.setState(
            {
                check:!this.state.check
            }
        );
    }
    render(){
        
        return(
            <div>
                 <Nav/>
                 <button className="switch-btn" onClick={this.handle}> {this.state.check?"To Client" : "To Admin"}</button>
                 {this.state.check?<App/>:<Client/>}
            </div>
           

        );
    }
}
  
export default Home;