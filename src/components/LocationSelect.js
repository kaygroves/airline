/* This component takes the location data from the Locate Component and returns a list of airports to select the
flights from
*/
import React from "react";

function LocationSelect(props) {
    const options = props.data.map((location) =>
      <React.Fragment key={location.iataCode}>
        <input type="radio" id={location.iataCode} name="select" value={location.iataCode} />
        <label htmlFor={location.iataCode}>
            {location.name + ": " + location.iataCode}
        </label><br></br>
      </React.Fragment>
    );

    return (
      <div>
        {props.data.length > 0 &&
          <form onChange={(e) => props.handleChoice(e.target.value)}>
            {options}
          </form>
        }
      </div>
    );
}

export default LocationSelect;