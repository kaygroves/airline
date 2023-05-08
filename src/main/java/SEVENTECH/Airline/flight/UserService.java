package SEVENTECH.Airline.flight;

import SEVENTECH.Airline.flight.UserObject;
import org.springframework.stereotype.Service;


public interface UserService {
    String addUser(UserObject userobj);

    LoginMessage loginUser(LoginObject loginobj);

    // LoginMesage loginUser(LoginObject loginobj);

}
