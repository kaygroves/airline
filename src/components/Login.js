import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import axios from "axios";
 
//fix this
 
function Login() {
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
 
 
    async function login(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8080/users/login", {
            email: email,
            password: password,
            }).then((res) =>
            {
             console.log(res.data);
            
             if (res.data.message == "Email does not exist.")
             {
               alert("The email you have entered does not exist.");
             }
             else if(res.data.message == "Login Success")
             {
                
                navigate('/bookflight');
             }
              else
             {
                alert("Incorrect Email or Password.");
             }
          }, fail => {
           console.error(fail); // Error!
  });
        }
 
         catch (err) {
          alert(err);
        }
      
      }
  
  
  
  
  
  
    return (
       <div>
            <div class="container">
            <div class="row">
                <h2>Login</h2>
             <hr/>
             </div>
 
             <div class="row">
             <div class="col-sm-6">
            <form>
        <div class="form-group">
          <label>Email</label>
          <input type="email"  class="form-control" id="email" placeholder="Enter Email"
          
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          
          />
 
        </div>
 
        <div class="form-group">
            <label>password</label>
            <input type="password"  class="form-control" id="password" placeholder="Enter Password"
            
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            
            />
          </div>
                  <button type="submit" class="btn btn-primary" onClick={login} >Login</button>
              </form>
 
            </div>
            </div>
            </div>
 
     </div>
    );
  }
  
  export default Login;