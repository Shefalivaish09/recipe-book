import {
  Component,
  OnInit,
  EventEmitter,
  Output
} from '@angular/core';
import {
  Recipe
} from '../recipe';
@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

@Output() recipeSelected = new EventEmitter<Recipe>();

recipes : Recipe[] = [
   new Recipe ("Pizaa", "How to make Pizza" , "http://www.cicis.com/media/1243/pizza_adven_zestypepperoni.png",[]),
    new Recipe ("Noodles", "How to make noodles" , "http://www.gimmesomeoven.com/wp-content/uploads/2009/10/sesame-noodles.jpg",[]),
    new Recipe ("Green salad", "How to make green salad" , "http://recetasfaciles.co/wp-content/uploads/2012/01/ensalada-caribena.jpg",[])

] ;


  constructor() {}

  ngOnInit() {}

  onSelected (recipe : Recipe) {
    this.recipeSelected.emit(recipe);

  }

}
