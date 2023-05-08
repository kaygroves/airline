 /*This component takes the data from the Flight component and displays list of flights available for user to
  choose from, selected flight sent back to App component to be further processed
  */
import React from "react";

function FlightSelect(props) {

/*
<label htmlFor={flight.id}>
            {"Price: " + flight.price.grandTotal + " " + flight.price.currency}
        </label>
        <div>
            Available Seats: {flight.numberOfBookableSeats}
        </div>
        <div>
          {}
            {console.log(flight.itineraries[0].segments[0].aircraft.code)}
        </div>
        <div>
            One Way? : {flight.oneWay ? "True" : "False"}
        </div><br></br>
*/

  ///let data = Array.from(props.flightOptions)
  console.log( props.flightOptions);
  ////props.flightOptions.forEach((item)=>{
  /////  item.price.currency="USD";
  ////})
  //props.flightOptions[0].price.currency="USD";
  const tableStyle= {
    width: '600px',
    layout: 'fixed'
};
console.log(props.flightOptions)
//let arr=(props.flightOptions)
//.itineraries[0].duration).split("PT")
//console.log(arr[1])
const tableCellStyle = {
  width: '100px'
}

    const options = props.flightOptions.map((flight, index) =>
    ///const options = data.map((flight, index) =>
    //flight.price.currency="USD";
      <>
      <input type="radio" id={flight.id} name="select" value={index} />
      <table id="flights-table" style={tableStyle}>
      <th>Flight</th><th>Departs</th><th>Arrives</th><th>Airports</th><th>Duration</th><th>Price</th>
      <tbody>
        <tr>
        <td style={tableCellStyle}>{flight.itineraries[0].segments[0].aircraft.code}</td>
        <td style={tableCellStyle}>{(flight.itineraries[0].segments[0].departure.at).substring(0,10)}</td>
      <td style={tableCellStyle}>{(flight.itineraries[0].segments[0].arrival.at).substring(0,10)}</td> 
      <td style={tableCellStyle}>{flight.itineraries[0].segments[0].departure.iataCode}-{'>'}{flight.itineraries[0].segments[0].arrival.iataCode} </td>
      <td style={tableCellStyle}>{(flight.itineraries[0].duration).substring(2,flight.itineraries[0].duration.length)}</td>
      <td style={tableCellStyle}>{flight.price.grandTotal} {flight.price.currency}</td>
        </tr>
        <tr>
        <td style={tableCellStyle}>{flight.itineraries[1].segments[0].aircraft.code}</td>
        <td style={tableCellStyle}>{(flight.itineraries[1].segments[0].departure.at).substring(0,10)}</td>
        <td style={tableCellStyle}>{(flight.itineraries[1].segments[0].arrival.at).substring(0,10)}</td>
      <td style={tableCellStyle}>{flight.itineraries[1].segments[0].departure.iataCode}-{'>'}{flight.itineraries[1].segments[0].arrival.iataCode} </td>
      <td style={tableCellStyle}>{(flight.itineraries[1].duration).substring(2,flight.itineraries[1].duration.length)}</td>
      <td style={tableCellStyle}>{flight.price.grandTotal} {flight.price.currency}</td>
        </tr>
      </tbody>
     
      </table>
        
        
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