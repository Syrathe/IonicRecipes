import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService }  from '../recipes.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  loadedRecipe: Recipe;
  recipesService: RecipesService = inject(RecipesService);
  recipeList: Recipe[] = [];

  constructor(
    private activatedRoute:ActivatedRoute,
    recipesService: RecipesService,
    private router: Router
  ) {
    this.recipeList=recipesService.getAllRecipes();
  }

  onDeleteRecipe(){
    this.recipesService.deleteRecipe(this.loadedRecipe);
    this.router.navigate(['/recipes']);
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap =>{
      if(paramMap.has('recipeId')){
        const recipeId = paramMap.get('recipeId');
        if (recipeId==null){
          //redirect
          return
        } else {
          this.loadedRecipe = this.recipesService.getRecipe(recipeId);
        }
      }
    });
  }
}
