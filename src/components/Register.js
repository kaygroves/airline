import {  useState } from "react";
 
import axios from "axios";
 
function Register() {
  
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
 
 
    async function redirect(event) {
      event.preventDefault();
      console.log("in redirect func")
      window.location.href= '/login'
    }

    async function save(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8080/users/save", {
          username: username,
          email: email,
          password: password,
          });
          alert("Registation Successful");
          window.location.href ='/bookflight';
          
 
        } catch (err) {
          alert(err);
        }
       
      }
      
  
    return (
    <div>
    <div class="container mt-4" >
    <div class="card">
            <h1>Register</h1>
    
    <form>
        <div class="form-group">
          <label>Name</label>
          <input type="text"  class="form-control" id="employeename" placeholder="Enter Name"
          
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          />
 
        </div>
 
        <div class="form-group">
          <label>email</label>
          <input type="email"  class="form-control" id="email" placeholder="Enter Email"
          
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          
          />
        </div>
 
        <div class="form-group">
            <label>password</label>
            <input type="password"  class="form-control" id="password" placeholder="Enter password"
            
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            
            />
          </div>
 
        <button type="submit" class="btn btn-primary mt-4" onClick={save} >Save</button>

        <button type="submit" class="btn btn-primary mt-4" onClick={redirect}>Already have an Account?</button>
      
      </form>
    </div>
    </div>
     </div>
    );
  }
  
  export default Register;