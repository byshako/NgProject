import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('RECIPE NAME', 'RECIPE DESCRIPTION', 'http://www.seriouseats.com/recipes/assets_c/2016/12/20161201-crispy-roast-potatoes-29-thumb-1500xauto-435281.jpg'),
    new Recipe('2 RECIPE NAME', '2 RECIPE DESCRIPTION', 'http://goodtoknow.media.ipcdigital.co.uk/111/000016ef4/543a_orh412w625/Butter-chicken-recipe.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }
  // new Recipe('1st Test', 'this is sample', 'http://is2.mzstatic.com/image/thumb/Purple69/v4/90/5f/5c/905f5cc2-c96a-9602-0552-0f2a013527e4/source/552x414bb.jpg'),
}
