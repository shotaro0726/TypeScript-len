"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const foods_js_1 = require("./foods.js");
class Score {
    constructor() { }
    get totalScore() {
        const foods = foods_js_1.Foods.getInstance();
        return foods.activeElementScore.reduce((total, score) => total + score);
    }
    render() {
        document.querySelector('.score__number').textContent = String(this.totalScore);
    }
    static getInstance() {
        if (Score.instance) {
            Score.instance = new Score();
        }
        return Score.instance;
    }
}
exports.Score = Score;
