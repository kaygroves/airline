package SEVENTECH.Airline.flight;
import com.amadeus.resources.Traveler;
import com.amadeus.resources.Traveler.Document;
import com.amadeus.resources.Traveler.Name;
import com.amadeus.resources.Traveler.Phone;
import com.google.gson.JsonObject;
import com.amadeus.resources.Traveler.Contact;
public class DatabaseConnect {
    public static Traveler traveler(JsonObject travelerInfo) {
        System.out.println(travelerInfo);////////
        String fname = travelerInfo.get("fname").getAsString();
        String lname = travelerInfo.get("lname").getAsString();
        String dateOfBirth = travelerInfo.get("dob").getAsString();
        String phoneNum = travelerInfo.get("phoneNum").getAsString();

        String passNum = travelerInfo.get("passNum").getAsString();
        String passExpiry = travelerInfo.get("passExpiry").getAsString();
        String nationality = travelerInfo.get("nationality").getAsString();
        String issCountry = travelerInfo.get("issCountry").getAsString();

        Traveler traveler = new Traveler();
        Phone phone = traveler.new Phone();
        phone.setCountryCallingCode("1");
        phone.setNumber(phoneNum);
        phone.setDeviceType("MOBILE");
        Contact contact = traveler.new Contact();
        Phone[] phones = {phone};
        contact.setPhones(phones);
        traveler.setContact(contact);
        Name name = traveler.new Name(fname, lname);
        traveler.setName(name);
        traveler.setDateOfBirth(dateOfBirth);
        traveler.setId("1");
        Document document = traveler.new Document();
        document.setDocumentType("PASSPORT");
        document.setNumber(passNum);
        document.setExpiryDate(passExpiry);
        document.setNationality(nationality);
        document.setHolder(true);
        document.setIssuanceCountry(issCountry);
        Document[] documents = {document};
        traveler.setDocuments(documents);
        return traveler;
    }
}