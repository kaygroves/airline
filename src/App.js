/*This componenet holds the main application, requests origin and destination info from user,
if this is provided, sends data to Flight component which collects flight data from user and requests 
lsit of matching flights from server, user picks one and this is confirmed with server,
if confirmation is successful then order is created
*/
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import BookFlight from "./components/BookFlight";
 
 
function App() {
  return (
    <div>
 
      <BrowserRouter>
            <Routes>
              <Route path="/bookflight" element= { <BookFlight/>} />
              <Route path="/login" element= { <Login/>} />
              <Route path="/" element= { <Register/>} />
            </Routes>
        </BrowserRouter>
      
    </div>
  );
}
 
export default App;