import {FoodsAble} from './interfaces.js';
import {Food} from './food.js'

class Foods implements FoodsAble {
    private static instance: Foods;
    elements = document.querySelectorAll<HTMLDivElement>('.food');
    private _activeElement: HTMLDivElement[] = [];
    private _activeElementScore: number[] = [];
    get activeElements() {
        this._activeElement = [];
        this.elements.forEach(element => {
            if (element.classList.contains('food--active')) {
                this._activeElement.push(element);
            }
        })
        return this._activeElement;
    }
    get activeElementScore() {
        this._activeElementScore = [];
        this._activeElement.forEach(element => {
            const foodScore = element.querySelector('.food_score');
            if (foodScore) {
                this._activeElementScore.push(Number(foodScore.textContent));
            }
        })
        return this._activeElementScore;
    }
    constructor() {
        this.elements.forEach(element => {
            new Food(element);
        })
    }
    static getInstance() {
        if (!Foods.instance) {
            Foods.instance = new Foods();
        }
        return Foods.instance;
    }
}