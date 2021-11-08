package com.bazarik.inzertnyportal.model;

public class Item {
    float price;
    String description;
    String name;
    Enum<Category>categoryEnum;
    public Item(float price,String description,String name, Enum<Category>categoryEnum){
        this.price=price;
        this.description=description;
        this.name=name;
        this.categoryEnum=categoryEnum;

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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Enum<Category> getCategoryEnum() {
        return categoryEnum;
    }

    public void setCategoryEnum(Enum<Category> categoryEnum) {
        this.categoryEnum = categoryEnum;
    }
}
