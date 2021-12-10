package com.inzertnyportal.item;

import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;

import java.util.Optional;
import java.util.Set;

public interface ItemService  {
    void saveItem(Item item);
    void deleteItem(long id);
    Iterable<Item>getByCategory(Category category);
    Optional<Item> detail(long id);
    Iterable<Item> sort(Sort sort);

}
