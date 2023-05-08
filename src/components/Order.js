/*
Creates an Order to be posted to the server, displays flight booking details and confirmation to the user
*/
import React, { useState } from "react";

function Order(props) {
    const [traveler, setTraveler] = useState("");
    const [fname, setFname] = useState("John");
    const [lname, setLname] = useState("Doe");
    const [dob, setDob] = useState("1990-01-01");
    const [phoneNum, setphoneNum] = useState("1231231234");
    const [passNum, setpassNum] = useState("123456789");
    const [passExpiry, setPassExpiry] = useState("");
    const [nationality, setNationality] = useState("");
    const [issCountry, setissCountry] = useState("");
    
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
                    dob: dob,
                    phoneNum: phoneNum,
                    passNum: passNum,
                    passExpiry: passExpiry,
                    nationality: nationality,
                    issCountry: issCountry
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
       let tv =JSON.stringify({
        data: {
            
            travelers: {
                fname: fname,
                    lname: lname,
                    dob: dob,
                    phoneNum: phoneNum,
                    passNum: passNum,
                    passExpiry: passExpiry,
                    nationality: nationality,
                    issCountry: issCountry
            }
        }
        });
        console.log("tv is " + tv)
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
                value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    id="dob"
                    name="dob"
                    required /><br></br>
                <label>First Name: </label>
                <input value={fname} onChange={(e) => setFname(e.target.value)} required></input><br></br>
                <label>Last Name: </label>
                <input value={lname} onChange={(e) => setLname(e.target.value)} required></input><br></br>
                <label>Phone Number: </label>
                <input value={phoneNum} onChange={(e) => setphoneNum(e.target.value)} required></input><br></br>
                <label>Passport Number: </label>
                <input value={passNum} onChange={(e) => setpassNum(e.target.value)} required></input><br></br>
                <label>Passport Expiration Date: </label>
                <input type="date" onChange={(e) => setPassExpiry(e.target.value)} required></input><br></br>
                <label>Nationality: </label>
                <input onChange={(e) => setNationality(e.target.value)} required></input><br></br>
                <label>Issuance Country: </label>
                <input onChange={(e) => setissCountry(e.target.value)} required></input><br></br>
                <input type="submit" value="Submit Traveler Info" />
            </form>

          
            {//this returns the flight details
            //console.log("in orders " + JSON.stringify(props.confirmation))}
}
            
            {  traveler &&
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