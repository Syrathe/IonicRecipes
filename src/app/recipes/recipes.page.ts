import { Component, OnDestroy, OnInit } from '@angular/core';
import { RecipesService } from './recipes.service';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit, OnDestroy {
  recipes:Recipe[];

  constructor(private recipesService: RecipesService) {}

  ngOnDestroy(): void {
    console.log("");
  }

  ngOnInit() {
    this.recipes = this.recipesService.getAllRecipes();
    console.log('Loaded Recipes');
    console.log(this.recipes);
  }

  ionViewWillEnter(){
    console.log("ionViewWillEnter");
    this.recipes = this.recipesService.getAllRecipes();
  }

  ionViewDidEnter(){
    console.log("ionViewDidEnter");
  }

  ionViewWillLeave(){
    console.log("ionViewWillLeave");
  }

  ionViewDidLeave(){
    console.log("ionViewDidLeave");
  }
}
