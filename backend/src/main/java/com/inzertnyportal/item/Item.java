package com.inzertnyportal.item;

import com.inzertnyportal.person.Person;

import javax.persistence.*;

@Entity
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String name;
    private float price;
    private String description;
    @Enumerated(EnumType.STRING)
    private Category category;
    private String image;


    @ManyToOne
    @JoinColumn(name = "person_id", insertable = false, updatable=false)
    private Person person;
    @Column(name = "person_id")
    private Long personId;

    public Item(String name, float price, String description, Category category, String image, Long personId) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.category = category;
        this.image = image;
        this.personId = personId;
    }
    public Item(){

    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Person getPerson() {
        return person;
    }

    public void setPerson(Person person) {
        this.person = person;
    }

    public Long getPersonId() {
        return personId;
    }

    public void setPersonId(Long personId) {
        this.personId = personId;
    }
}
