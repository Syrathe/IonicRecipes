import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService }  from '../recipes.service';
import { Recipe } from '../recipe.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit, OnDestroy {
  loadedRecipe: Recipe;
  recipesService: RecipesService = inject(RecipesService);
  recipeList: Recipe[] = [];

  constructor(
    private activatedRoute:ActivatedRoute,
    recipesService: RecipesService,
    private router: Router,
    private alertCtrl: AlertController
  ) {
    this.recipeList=recipesService.getAllRecipes();
  }
  ngOnDestroy(): void {
    console.log('Recipe Detail Destroyed');
  }

  onDeleteRecipe(){
    this.alertCtrl.create({
      header: 'Are you sure?',
      message: 'Do you really want to delete thiss recipe?',
      buttons: [{
        text:'Cancel',
        role:'cancel'
      },{
        text:'Delete',
        handler:() => {
          this.recipesService.deleteRecipe(this.loadedRecipe.id);
          this.router.navigate(['/recipes']);
        }
      }]
    }).then(alertEl => {
      alertEl.present();
    })

  }

  ngOnInit() {
    console.log('Recipe Detail ng On Init')
    this.activatedRoute.paramMap.subscribe(paramMap =>{
      if(paramMap.has('recipeId')){
        const recipeId = paramMap.get('recipeId');
        if (recipeId==null){
          //redirect
          this.router.navigate(['/recipes'])
          return
        } else {
          this.loadedRecipe = this.recipesService.getRecipe(recipeId);
        }
      }
    });
  }

  ionViewWillEnter(){
    console.log("ionViewWillEnter");
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
