package com.inzertnyportal.item;

import com.inzertnyportal.person.PersonService;
import org.springframework.web.bind.annotation.*;

@RestController
public class ItemController {
    ItemService service;
    PersonService personService;
    ItemRepository itemRepository;

    public ItemController(ItemService service, PersonService personService,ItemRepository itemRepository) {
        this.service = service;
        this.personService=personService;
        this.itemRepository=itemRepository;
    }




    @PostMapping("/items")
    public void saveItem(@RequestBody Item item){
        service.saveItem(item);


    }

    @GetMapping("/searchitems")
    public Iterable<Item> search(@RequestParam String search){

        return itemRepository.findByNameOrDescriptionContaining(search);
    }
    @GetMapping("/deleteitem/{id}")
    public void deleteItem(@PathVariable long id) {
        service.deleteItem(id);
    }
    @GetMapping("/showcategory/{category}")
    public Iterable<Item> showItemsInCat(@PathVariable Category category){
        return service.getByCategory(category);
    }
}
