import { Component, OnInit, EventEmitter, Output} from '@angular/core';

import { Recipe } from '../recipe';
import { RecipeItemComponent } from './recipe-item.component'

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Dummy', 'Dummy', 'https://static-whitecastle-com.s3.amazonaws.com/5679045a-9588-45e4-bd34-5872013e44bd_WC-GENERIC_RECIPE_PAGE_LARGE_mini_Large.jpg', [] ),
    new Recipe('Gummy', 'Gummy', 'http://www.eatsamazing.co.uk/wp-content/uploads/Homemade-burgers-easy-recipe-for-kids-from-Eats-Amazing-UK.jpg', [] )
  ];
  @Output() recipeSelected = new  EventEmitter<Recipe>();


  constructor() { }

  ngOnInit() {
  }
  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
