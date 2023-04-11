package SEVENTECH.Airline.flight;

import com.amadeus.resources.FlightOrder;

import com.amadeus.exceptions.ResponseException;
import com.amadeus.resources.Location;
import com.google.gson.JsonObject;
import com.amadeus.resources.FlightOfferSearch;
import com.amadeus.resources.FlightPrice;
import com.amadeus.resources.Traveler;
import org.springframework.web.bind.annotation.*;


@CrossOrigin(origins= "https://localhost:3000")
@RestController
@RequestMapping(value="/api")
public class ApiController {

    @CrossOrigin(origins= "https://localhost:3000")
    @GetMapping("/locations")
    public Location[] locations(@RequestParam(required=true) String keyword) throws ResponseException {
        return AmadeusConnect.INSTANCE.location(keyword);
    }

    @CrossOrigin(origins= "https://localhost:3000")
    @GetMapping("/flights")
    public FlightOfferSearch[] flights(@RequestParam(required=true) String origin,
                                       @RequestParam(required=true) String destination,
                                       @RequestParam(required=true) String departDate,
                                       @RequestParam(required=true) String adults,
                                       @RequestParam(required = false) String returnDate)
            throws ResponseException {
        return AmadeusConnect.INSTANCE.flights(origin, destination, departDate, adults, returnDate);
    }

    @CrossOrigin(origins= "https://localhost:3000")
    @PostMapping("/confirm")
    public FlightPrice confirm(@RequestBody(required=true) FlightOfferSearch search) throws ResponseException {
        return AmadeusConnect.INSTANCE.confirm(search);
    }

    @CrossOrigin(origins= "https://localhost:3000")
    @PostMapping("/traveler")
    public Traveler traveler(@RequestBody(required=true) JsonObject travelerInfo) {
        return DatabaseConnect.traveler(travelerInfo.get("data").getAsJsonObject());
    }

    @CrossOrigin(origins= "https://localhost:3000")
    @PostMapping("/order")
    public FlightOrder order(@RequestBody(required=true) JsonObject order) throws ResponseException{
        return AmadeusConnect.INSTANCE.order(order);
    }
}