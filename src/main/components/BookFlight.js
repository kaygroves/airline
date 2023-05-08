
import React, { useState } from 'react'
import Locate from './Locate'
import Flight from './Flight';
import Confirm from './Confirm';
import Order from './Order';
import Register from './Register';


function BookFlight() {
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
};

export default BookFlight;