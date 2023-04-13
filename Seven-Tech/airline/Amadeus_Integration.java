package com.example.airlinebooking;
import com.amadeus.Amadeus;
import com.amadeus.Params;
import com.amadeus.exceptions.ResponseException;
import java.util.Scanner;

public class Amadeus_Integration {

    // API KEY to initialize Amadeus API client 
    private static final Amadeus amadeus = Amadeus.builder("API_key", "API_secret").build();
    public static void main( String[] args )
    {
      // User credentials
      boolean isAuthenticated = authenicateUser();

      if (isAuthenticated) {
        try {
            
            //User Inputs...integrate with html form 


        // Amadeus API to search flights
        FlightOfferSearch[] flightOffers = amadeus.shopping.flightOfferSearch.get(
            Params.with("originalLocationCode", origin).and("destinationLocationCode", destination).and("departureDate", departureDate).and("adults", passengers)
       //add: infants, children, ....
            ); 

        //Print search results
        for (flightOfferSearch offer : flightOffers) {
            System.out.println("Airline " + offer.getItineraries()[0].getSegments()[0].getCarrierCode());
            System.out.println("Departure Time: " + offer.getItineraries()[0].getSegments()[0].getDeparture().getAt());
            System.out.println("Arrival Time: " + offer.getItineraries()[0].getSegments()[0].getArrival().getAt());
            System.out.println("Price: " + offer.getPrice().getCurrency());
        }

    } 
    catch (ResponseException e) {
            System.err.println("Error: " + e.getMessage()); //error message occured while calling API
        }
    } else{
        System.out.println("failed to authenticate. Exiting...");
    }
      
    }

    private static boolean userLogin() {
        // TO DO: Implement user authentication logic
        // until we implement auth, return true for testing purposes
        return true;
    }
}


