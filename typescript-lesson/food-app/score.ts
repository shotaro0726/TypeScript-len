import {ScoreAble} from './interfaces.js'
import { Foods } from './foods.js'

export class Score implements ScoreAble {
    private static instance: Score;
    get totalScore() {
        const foods = Foods.getInstance();
        return foods.activeElementScore.reduce((total, score) => total + score);
    }
    render() {
        document.querySelector('.score__number')!.textContent = String(this.totalScore);
    }
    private constructor(){ }
    static getInstance() {
        if (Score.instance) {
            Score.instance = new Score();
        }
        return Score.instance;
    }
}