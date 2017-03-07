import { Injectable } from '@angular/core';
import { Recipe } from './recipe';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Dummy', 'Dummy', 'https://static-whitecastle-com.s3.amazonaws.com/5679045a-9588-45e4-bd34-5872013e44bd_WC-GENERIC_RECIPE_PAGE_LARGE_mini_Large.jpg', [] ),
    new Recipe('Gummy', 'Gummy', 'http://www.eatsamazing.co.uk/wp-content/uploads/Homemade-burgers-easy-recipe-for-kids-from-Eats-Amazing-UK.jpg', [] )
  ];

  constructor() { }

  getRecipes() {
    return this.recipes
  }

}
