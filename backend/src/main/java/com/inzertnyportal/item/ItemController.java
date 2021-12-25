package com.inzertnyportal.item;

import com.inzertnyportal.person.PersonService;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

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
    @GetMapping("/detailitem/{id}")
    public Optional<Item> detailItems(@PathVariable long id){


        return service.detail(id);
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
    @GetMapping("/sortitems")
    public Iterable <Item> sortItems(@RequestParam String parameter) {
        Sort sort = Sort.by(parameter);
        return service.sort(sort);
    }
    @PutMapping("/item/{id}")
    public Item editItem(@RequestBody Item newitem,@PathVariable long id) {

        return itemRepository.findById(id)
                .map(item -> {
                    item.setImage(newitem.getImage());
                    item.setCategory(newitem.getCategory());
                    item.setPrice(newitem.getPrice());
                    item.setDescription(newitem.getDescription());
                    item.setName(newitem.getName());
                    return itemRepository.save(item);
                })
                .orElseGet(() -> {
                    return itemRepository.save(newitem);
                });
    }



}
