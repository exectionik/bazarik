package com.inzertnyportal.person;

import com.inzertnyportal.dto.UserRegistrationDto;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PersonServiceImpl implements  PersonService{
    private PasswordEncoder encoder;
    private PersonRepository repository;

    public PersonServiceImpl(PasswordEncoder encoder, PersonRepository repository) {
        this.encoder = encoder;
        this.repository=repository;
    }

    @Override
    public Optional<Person> getUserByEmail(String email) {
        return repository.findByEmail(email);
    }

    @Override
    public Person save(UserRegistrationDto registrationDto) {

        Person user = new Person();
        user.setFirstName(registrationDto.getFirstName());
        user.setLastName(registrationDto.getLastName());
        user.setCity(registrationDto.getCity());
        user.setEmail(registrationDto.getEmail());
        user.setPassword(encoder.encode(registrationDto.getPassword()));
        user.setPhoneNumber(registrationDto.getPhoneNumber());
        return repository.save(user);

    }


/*
    @Override
    public Long getUserId() {
        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String email = userDetails.getUsername();
        Optional<Users> user = userRepository.findByEmail(email);
        return user.get().getId();
    }

    @Override
    public Optional<Users> getUserById(Long id) {
        return userRepository.findById(id);
    }
   */
    @Override
    public Person getCurrentUser() {
        UserDetails userDetails = (UserDetails) SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getPrincipal();
        String email = userDetails.getUsername();
        return this.repository.findByEmail(email).orElseThrow();
    }

}



