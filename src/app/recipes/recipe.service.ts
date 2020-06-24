import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a simple test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS8F7IlNWuzsG8b62bKv8l0SNZz0uZXrgyk0g&usqp=CAU'
    ),
    new Recipe(
      'A Test Recipe 123',
      'This is a simple test 321',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS8F7IlNWuzsG8b62bKv8l0SNZz0uZXrgyk0g&usqp=CAU'
    ),
  ];

  getRecipe() {
    return this.recipes.slice();
  }
}
