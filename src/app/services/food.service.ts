import { Injectable } from '@angular/core';
import { Food } from '../shared/models/Food';
import { Tag } from '../shared/models/Tag';
import { sample_foods, sample_tags } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  getAll():Food[]{
    return sample_foods;
  }

  getAllFoodsBySearchTerm(SearchTerm:string){
    return this.getAll().filter(food=>food.name.toLowerCase().includes(SearchTerm.toLowerCase()))
  }

  getFoodById(foodId:String):Food{
    return this.getAll().find(food=>food.id==foodId) ?? new Food();
  }
  getAllTAgs():Tag[]{
    return sample_tags
  }
  getAllFoodsByTag(tag:string):Food[]{

    return tag==="All"?
    this.getAll():
    this.getAll().filter(food=>food.tags?.includes(tag));
  }
}
