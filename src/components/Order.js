/*
Creates an Order to be posted to the server, displays flight booking details and confirmation to the user
*/
import React, { useState } from "react";

function Order(props) {
    const [traveler, setTraveler] = useState("");
    const [fname, setFname] = useState("John");
    const [lname, setLname] = useState("Doe");
    const [dob, setDob] = useState("1990-01-01");

    function makeTraveler(event){
        event.preventDefault();
        fetch("api/traveler/", {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data: {
                    fname: fname,
                    lname: lname,
                    dob: dob
                }
            })
        })
        .then((response) => response.json())
        .then((json) => {
            setTraveler(json);
        });
    }

    function submit(event, props){
        event.preventDefault();
        fetch("api/order/", {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data: {
                    type: "flight-order",
                    flightOffers: props.confirmation.flightOffers,
                    travelers: [traveler]
                }
            })
        })
        .then((response) => response.json())
        .then((json) => {
            props.setOrder(json);
        });
    }

    return (
        <div>
            <form onSubmit={(e) => makeTraveler(e)}>
                <label htmlFor="dob">Date of Birth:</label>
                <input type="date"
                    onChange={(e) => setDob(e.target.value)}
                    id="dob"
                    name="dob"
                    required /><br></br>
                <label>First Name: </label>
                <input value={fname} onChange={(e) => setFname(e.target.value)} required></input><br></br>
                <label>Last Name: </label>
                <input value={lname} onChange={(e) => setLname(e.target.value)} required></input><br></br>
                <input type="submit" value="Submit Traveler Info" />
            </form>
            { traveler &&
                <form onSubmit={(e) => submit(e, props)}>
                    <input type="submit" value="Book Flight" />
                </form>
            }
            { props.order &&
                <div>
                    <div>Flight Booked! Here are the details:</div>
                    <div>Name : {fname} {lname}, DOB: {dob}, other flight details to come ... </div>
                </div>
            }
        </div>
    );
};

export default Order;