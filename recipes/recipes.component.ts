import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe = new Recipe('', '', '');
  checkselectedRecipe: Boolean = false;
  constructor() {}

  ngOnInit() {}
  onRecipeSelected2(data: Recipe) {
    //console.log(data);
    this.selectedRecipe = data;
    this.checkselectedRecipe = true;
    //console.log(this.checkselectedRecipe);
    //console.log(this.selectedRecipe);
  }
}
