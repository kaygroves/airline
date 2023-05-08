package SEVENTECH.Airline.flight;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserImpl implements UserService {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public String addUser(UserObject userobj) {
        User user = new User(

                userobj.getUserid(),
                userobj.getUsername(),
                userobj.getEmail(),

                this.passwordEncoder.encode(userobj.getPassword())
        );

        userRepo.save(user);

        return user.getUsername();
    }
    UserObject userobj;

    @Override
    public LoginMessage  loginUser(LoginObject loginobj) {
        String msg = "";
        User user1 = userRepo.findByEmail(loginobj.getEmail());
        if (user1 != null) {
            String password = loginobj.getPassword();
            String encodedPassword = user1.getPassword();
            Boolean isPwdRight = passwordEncoder.matches(password, encodedPassword);
            if (isPwdRight) {
                Optional<User> user = userRepo.findOneByEmailAndPassword(loginobj.getEmail(), encodedPassword);
                if (user.isPresent()) {
                    return new LoginMessage("Login Success", true);
                } else {
                    return new LoginMessage("Login Failed", false);
                }
            } else {

                return new LoginMessage("Password does not match", false);
            }
        }else {
            return new LoginMessage("Email does not exist.", false);
        }


    }

    //@Override
   // public LoginMesage loginUser(LoginObject loginobj) {
   //     return null;
   // }
}
