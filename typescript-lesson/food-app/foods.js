"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const food_js_1 = require("./food.js");
class Foods {
    constructor() {
        this.elements = document.querySelectorAll('.food');
        this._activeElement = [];
        this._activeElementScore = [];
        this.elements.forEach(element => {
            new food_js_1.Food(element);
        });
    }
    get activeElements() {
        this._activeElement = [];
        this.elements.forEach(element => {
            if (element.classList.contains('food--active')) {
                this._activeElement.push(element);
            }
        });
        return this._activeElement;
    }
    get activeElementScore() {
        this._activeElementScore = [];
        this._activeElement.forEach(element => {
            const foodScore = element.querySelector('.food_score');
            if (foodScore) {
                this._activeElementScore.push(Number(foodScore.textContent));
            }
        });
        return this._activeElementScore;
    }
    static getInstance() {
        if (!Foods.instance) {
            Foods.instance = new Foods();
        }
        return Foods.instance;
    }
}
