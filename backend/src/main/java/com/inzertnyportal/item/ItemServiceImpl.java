package com.inzertnyportal.item;

import com.inzertnyportal.person.PersonService;
import org.springframework.stereotype.Service;

@Service
public class ItemServiceImpl implements ItemService {
    PersonService personService;
    ItemRepository repo;
    public ItemServiceImpl(ItemRepository repo,PersonService personService) {
        this.repo=repo;
        this.personService=personService;
    }
    @Override
    public void saveItem(Item item) {
        item.setPersonId(personService.getCurrentUser().getId());
        repo.save(item);

    }
    @Override
    public void deleteItem(long id) { repo.deleteById(id); }

    @Override
    public Iterable<Item> getByCategory(Category category) {
        return repo.findByCategory(category);
    }
}
