package com.inzertnyportal.person;

import com.inzertnyportal.dto.UserRegistrationDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.Optional;

public interface PersonService {
    Person save(UserRegistrationDto registrationDto);
    Person getCurrentUser();
    Optional <Person>getUserByEmail(String email);
}
