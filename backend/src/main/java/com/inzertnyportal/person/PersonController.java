package com.inzertnyportal.person;

import com.inzertnyportal.dto.UserRegistrationDto;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PersonController {
   PersonService personService;
   public PersonController(PersonService personService){
       this.personService=personService;
   }
    @PostMapping("/register")
    public Person registerUser(@RequestBody UserRegistrationDto userRegistrationDto){
       return personService.save(userRegistrationDto);

    }

}
