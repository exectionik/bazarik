package com.inzertnyportal.item;

import com.inzertnyportal.person.PersonService;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;
import java.util.Set;

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
    @Override
    public Optional<Item> detail(long id){
        return repo.findById(id);

    }

    @Override
    public Iterable<Item> sort(Sort sort) {
        return repo.findAll(sort);
    }


}
