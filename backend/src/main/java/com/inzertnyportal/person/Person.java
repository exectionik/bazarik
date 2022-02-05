package com.inzertnyportal.person;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.inzertnyportal.item.Item;

import javax.persistence.*;
import java.util.Set;
@Entity
public class Person {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  long id;
    @Column(name = "first_name",nullable = false)
    private String firstName;
    @Column(name = "last_name",nullable = false)
    private String lastName;
    @Column (name = "email", unique = true,nullable = false)
    private String email;
    @JsonIgnore
    private String password;
    @Column(name = "city", nullable = false)
    private String city;
    private String phoneNumber;
    @JsonIgnore
    @OneToMany(mappedBy = "person")
    public Set<Item> items;

    public Person(String firstName, String lastName, String email, String password, String city, String phoneNumber, Set<Item> items) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.city = city;
        this.phoneNumber = phoneNumber;
        this.items = items;
    }

    public Person(){

    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public Set<Item> getItems() {
        return items;
    }

    public void setItems(Set<Item> items) {
        this.items = items;
    }




}

