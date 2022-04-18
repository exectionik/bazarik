package com.inzertnyportal.item;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface ItemRepository extends JpaRepository<Item,Long> {
    @Query("select i from Item i where i.name like %?1% or i.description like %?1%")
    Iterable<Item> findByNameOrDescriptionContaining(String query);
    Iterable<Item> findByCategory(Category category);
}
