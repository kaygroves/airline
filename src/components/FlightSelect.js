  /*This component takes the data from the Flight component and displays list of flights available for user to
  choose from, selected flight sent back to App component to be further processed
  */
import React from "react";

function FlightSelect(props) {
  ///let data = Array.from(props.flightOptions)
  console.log( props.flightOptions[0]);
  props.flightOptions.forEach((item)=>{
    item.price.currency="USD";
  })
  //props.flightOptions[0].price.currency="USD";
    const options = props.flightOptions.map((flight, index) =>
   
    ///const options = data.map((flight, index) =>
    //flight.price.currency="USD";
      <>
      
        <input type="radio" id={flight.id} name="select" value={index} />
        <label htmlFor={flight.id}>
            {"Price: " + flight.price.grandTotal + " " + flight.price.currency}
        </label>
        <div>
            Available Seats: {flight.numberOfBookableSeats}
        </div>
        <div>
            One Way? : {flight.oneWay ? "True" : "False"}
        </div><br></br>
      </>
    );

    return (
      <div>
        {props.flightOptions.length > 0 &&
          <form onChange={(e) => props.setFlight(props.flightOptions[e.target.value])}>
            {options}
          </form>
        }
        
      </div >
      
    );
  
}

export default FlightSelect;