package com.bazarik.inzertnyportal.model;

import javax.persistence.OneToMany;

public class Person {
    String firstN;
    String lastN;
    String email;
    String password;
    @OneToMany
    Item item;
    public Person(String firstN, String lastN, String email, String password){
        this.firstN=firstN;
        this.lastN=lastN;
        this.email=email;
        this.password=password;
    }

    public String getFirstN() {
        return firstN;
    }

    public void setFirstN(String firstN) {
        this.firstN = firstN;
    }

    public String getLastN() {
        return lastN;
    }

    public void setLastN(String lastN) {
        this.lastN = lastN;
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

    public Item getItem() {
        return item;
    }

    public void setItem(Item item) {
        this.item = item;
    }
}
