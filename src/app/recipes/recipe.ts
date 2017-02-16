import {Ingredients} from '../shopping-list/ingredients';
export class Recipe {
    constructor(public name, public description , public imagePath, public ingredients : Ingredients[]) {};
}
