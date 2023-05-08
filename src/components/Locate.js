/* This component takes the origin and destination data given by the user and makes a get request to the api 
endpoint to search for locations matching the input
creates a locationselect component to process the data
*/

import React, { useEffect, useState } from "react";

import TextInput from './TextInput';
import Row from "./Row";
import LocationSelect from './LocationSelect'


function Locate(props) {
    const [value, setValue] = useState('');
    const [locations, setLocations] = useState([]);
    
   
   
   /*


   TextInput onSubmit={submit} display={props.display} onChange={(e) => setValue(e.target.value)} value={value} />
            <LocationSelect data={locations} handleChoice={props.handleChoice} />
*/
         /*
         const submit = (e) => {
            e.preventDefault();
            ApiService.getLocations().then((response) =>{
                console.log(response.data);
                setLocations(response.data);
            });
     
         }
         */
  // });

    const submit = (e) => {
       e.preventDefault();
       console.log({value}); //correct value
       //http://localhost:8080/spring-rest/ex/foos
        window.fetch("/api/locations?keyword=" + value, {credentials: "include"})
        .then((response) => response.json())
        .then((data) => {

          setLocations(data);


        });

    }

    const onKeyDown = (e) => {
        if (e.key === 'Enter' && e.target.value!= '') {
        e.preventDefault();
        console.log({value}); //correct value
        //http://localhost:8080/spring-rest/ex/foos
         window.fetch("/api/locations?keyword=" + value, {credentials: "include"})
         .then((response) => response.json())
         .then((data) => {
           // console.log("Success")
           setLocations(data);
 
 
         });
        }
    }
    return (
      <div>
          <TextInput onSubmit={submit} display={props.display} onChange={(e) => setValue(e.target.value)} value={value} />
          <LocationSelect data={locations} handleChoice={props.handleChoice} />
      </div>
  );
};

export default Locate;


/*
 return (
        <div>
            <Row rowClassName={"form-group col-md align-items-start flex-column"}  
            display={props.display}
            testName={"tclass"}
            type={"text"} placeholder={"City "} 
             onKeyDown={onKeyDown}
            onChange={(e) => setValue(e.target.value)} value={value}/>
            <LocationSelect data={locations} handleChoice={props.handleChoice} />
      </div>
    );
*/