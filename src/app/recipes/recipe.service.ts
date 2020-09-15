import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shoppinglist.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a simple test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS8F7IlNWuzsG8b62bKv8l0SNZz0uZXrgyk0g&usqp=CAU',
      [new Ingredient('Meat', 1), new Ingredient('Batata', 20)]
    ),
    new Recipe(
      'A Test Recipe 123',
      'This is a simple test 321',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS8F7IlNWuzsG8b62bKv8l0SNZz0uZXrgyk0g&usqp=CAU',
      [new Ingredient('Beans', 123), new Ingredient('Bread', 2)]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipe() {
    return this.recipes.slice();
  }

  getRecipeItem(index: number) {
    return this.recipes[index];
  }

  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
