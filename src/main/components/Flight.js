//This component takes the location information entered from the locate component,
//collects more flight details from the user and makes a request with info to server to retreive a list of
//matching flights 
import React, { useState } from "react";
import FlightSelect from "./FlightSelect";

function Flight(props) {
    const [passengers, setPassengers] = useState("1");
    const [departDate, setDepartDate] = useState();
    const [returnDate, setReturnDate] = useState();
    const [flightOptions, setFlightOptions] = useState([]);

    function submit(event, props){
        event.preventDefault();
        var returnDateParam = (returnDate ? "&returnDate=" + returnDate : "");
    
       
        
       
       

       

        
        /*
        fetch(
            "/api/flights/?origin=" + props.origin  +
            "&destination=" + props.destination +
            "&departDate=" + departDate +
            "&adults=" + passengers +
            returnDateParam,
            {credentials: "include"}
        )
        */
       //http://localhost:3000/api/flights?origin=LON&destination=NYC&departDate=2023-11-15&returnDate=2023-11-17&adults=3
       //////this one is the ones that work below:
       /////(`api/flights?origin=${props.origin}&destination=${props.destination}&departDate=${departDate}&returnDate=${returnDate}&adults=1`, {credentials: "include"})
       //https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=LAX&destinationLocationCode=JFK&departureDate=2023-06-15&returnDate=2023-06-17&adults=2&max=5&currencyCode=USD
       window.fetch(`api/v2/shopping/flight-offers?origin=${props.origin}&destination=${props.destination}&departDate=${departDate}&returnDate=${returnDate}&adults=${passengers}&max=5&currency=USD`)
        .then((response) => response.json())
        .then((json) => {
           // console.log("test   " + json)
          setFlightOptions(json);
        });
    }

    return (
        <div>
            <form onSubmit={(e) => submit(e, props)}>
                <label htmlFor="passengers">Passengers:</label>
                <input onChange={(e) => setPassengers(e.target.value)}
                    type="number"
                    name="passengers"
                    min="1"
                    max="5"
                    required /><br></br>
                <label htmlFor="departure">Depart Date:</label>
                <input type="date"
                    onChange={(e) => {
                        
                        setDepartDate(e.target.value)}}
                    id="departure"
                    name="departure"
                    required /><br></br>
                <label htmlFor="return">Return Date:</label>
                <input type="date"
                    onChange={(e) => {
                        
                            setReturnDate(e.target.value)
    
                        

                    }}
                       
                            
                        
                       
                    id="return"
                    name="return" /><br></br>
                <input type="submit" />
            </form>
           
            <FlightSelect flightOptions={flightOptions} setFlight={props.setFlight} />
        </div>
    );
    
    
};

export default Flight;