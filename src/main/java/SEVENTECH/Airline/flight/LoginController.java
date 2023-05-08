package SEVENTECH.Airline.flight;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/users") //or ,aybe api/login
public class LoginController {

    @Autowired
    private UserService userService;

    @PostMapping("/save")
    public String saveUser(@RequestBody UserObject userobj){
        String id = userService.addUser(userobj);
        return id;
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser (@RequestBody LoginObject loginobj){
        LoginMessage loginmessage = userService.loginUser(loginobj);
        return ResponseEntity.ok(loginmessage);
    }


}
