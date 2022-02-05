import {Person} from "./person";
import {Category} from "./category";
export interface Item {
    id: number;
    name: string;
    price: number;
    description: string;
    category: Category;
    person: Person;
    image: string;
  }
