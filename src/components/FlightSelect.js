import React from "react";

function FlightSelect(props) {
  let data = Array.from(props.flightOptions)
    //const options = props.flightOptions.map((flight, index) =>
    console.log("flight options: " + data);
    const options = data.map((flight, index) =>
    
      <>
      console.log("in the flight selection");
        <input type="radio" id={flight.id} name="select" value={index} />
        <label htmlFor={flight.id}>
            {"Price: " + flight.price.grandTotal + " " + flight.price.currency}
        </label>
        <div>
            Available Seats: {flight.numberOfBookableSeats}
        </div>
        <div>
            One Way?: {flight.oneWay ? "True" : "False"}
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
      </div>
    );
}

export default FlightSelect;