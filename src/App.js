/*This componenet holds the main application, requests origin and destination info from user,
if this is provided, sends data to Flight component which collects flight data from user and requests 
lsit of matching flights from server, user picks one and this is confirmed with server,
if confirmation is successful then order is created
*/

import React, { useState } from 'react'
import Locate from './components/Locate';
import Flight from './components/Flight';
import Confirm from './components/Confirm';
import Order from './components/Order';

export default function App() {
  const [origin, setOrigin] = useState();
  const [destination, setDestination] = useState();
  const [flight, setFlight] = useState();
  const [confirmation, setConfirmation] = useState();
  const [order, setOrder] = useState();

  return (
    <div>
      <div class="card custom-bg w-5 p-4 d-flex">
     <img src="https://ik.imagekit.io/almaD/flight_WUJY0gE78.jpg" width="255" height="85" alt=" "/>
     <Locate handleChoice={setDestination} display={"Origin"}/>
      <Locate handleChoice={setOrigin} display={"Destination"}/>
      { origin &&
        destination &&
        <Flight origin={origin} destination={destination} setFlight={setFlight}/>
      }
      { flight &&
        <Confirm flight={flight} setConfirmation={setConfirmation} />
      }
      { confirmation &&
        <Order confirmation={confirmation} order={order} setOrder={setOrder} />
      }
    </div>
     
    </div>
  )
}