package main.inzertnyportal.item;

import main.inzertnyportal.person.Person;

import javax.persistence.*;

@Entity
@Table(name = "Items")
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String name;
    private float price;
    private String description;
    private Enum<Category> category;
    private String image;




    @ManyToOne
    @JoinColumn(name = "person_id", insertable = false, updatable=false)

    private Person person;
    @Column(name = "person_id")
    private Long personId;

    public Item(long id, String name, float price, String description) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
    }
    public  Item(){

    }


}
