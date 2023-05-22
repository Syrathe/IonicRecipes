import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})

export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgZqABxBa9Rm-C2sLUhQsp9GWXl9fQVCTQ6g&usqp=CAU',
      ingredients: ['Franch Fries', 'Pork Meat', 'Salad']
    },
    {
      id: 'r2',
      title: 'Spaguetti',
      imageUrl: 'https://www.arteli.com.mx/blog/recetasarteli/spaghetti-parmesana/images/spaghetti-parmesana.jpg',
      ingredients: ['Tomatoe sauce', 'Spaguetti', 'Cheese']
    },
  ]

  constructor() {}

  public getAllRecipes():Recipe[]{
    return this.recipes;
  }

  public getRecipe(recipeId: string):Recipe{
    return this.recipes.filter(recipe => recipe.id ==  recipeId )[0];
  }

  deleteRecipe(id:string){
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== id;
    });
    console.log(this.getAllRecipes())
  }

}
