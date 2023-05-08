/*
Sends a post reuqest to server in order to confirm the availability and pricing of flight that was selected,
if successful App component will create an Order
*/
import React, { useState } from "react";

function Confirm(props) {

    function submit(event, props){
        event.preventDefault();
        fetch("api/confirm/", {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(props.flight)
        })
        .then((response) => response.json())
        .then((json) => {
            props.setConfirmation(props.flight);
        });
    }

    return (
        <div>
            <form onSubmit={(e) => submit(e, props)}>
                <input type="submit" />
            </form>
            {props.order &&
             <div>Confirmation:<br></br>
                {props.order}
             </div>
             }
        </div>

    );
};

export default Confirm;