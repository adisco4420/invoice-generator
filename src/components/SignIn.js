import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignUp.css';

class SignIn extends Component{
    render(){
        return(
    <React.Fragment>

        <div className="container">
            <div className="layout">
                <div className="formheader">
                    <h3> Welcome Back</h3>
                </div>

                <form className="formlayout">
  <div className="form-group">
   <input type="email" required className="form-control" name="email" placeholder="Email Address"/>
  </div>
  
  <div class="form-group">
   <input type="password" required className="form-control" name="password"  placeholder="Password"/>
  </div>

  <button type="submit" className="btn-lg button"> Login</button>
            <div className= "create">
  <a href="#"> Create Account </a>
 </div>
</form>
                    







            </div>


        </div>









    </React.Fragment>
        );
    }
}

export default SignIn;