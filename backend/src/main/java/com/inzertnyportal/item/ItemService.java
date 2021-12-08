package com.inzertnyportal.item;

import java.util.Set;

public interface ItemService  {
    void saveItem(Item item);
    void deleteItem(long id);
    Iterable<Item>getByCategory(Category category);


}
