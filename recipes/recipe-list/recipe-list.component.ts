import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe.jpg'
    ),
    new Recipe(
      'Another Test was selected',
      'This is simply another test',
      'https://img.bestrecipes.com.au/GmWTemLJ/w643-h428-cfill-q90/br/2019/02/1980-crunchy-chicken-twisties-drumsticks-951509-1.jpg'
    ),
    new Recipe(
      'Another Test was selected',
      'This is simply another test',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/250px-Eq_it-na_pizza-margherita_sep2005_sml.jpg'
    ),
    new Recipe(
      'Another Test was selected',
      'This is simply another test',
      'https://images.immediate.co.uk/production/volatile/sites/30/2022/05/Chicken-shawarma-salad--2e6dcda.jpg?quality=90&webp=true&resize=300,272'
    ),
    new Recipe(
      'Another Test was selected',
      'This is simply another test',
      'https://cheflolaskitchen.com/wp-content/uploads/2018/07/Easy-Homemade-Chicken-Shawarma39.jpg.webp'
    ),
  ];

  constructor() {}

  ngOnInit() {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
    console.log(recipe);
  }
}
