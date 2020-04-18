var Score = /** @class */ (function () {
    function Score() {
    }
    Object.defineProperty(Score.prototype, "totalScore", {
        get: function () {
            var foods = Foods.getInstance();
            return foods.activeElementScore.reduce(function (total, score) { return total + score; });
        },
        enumerable: true,
        configurable: true
    });
    Score.prototype.render = function () {
        document.querySelector('.score__number').textContent = String(this.totalScore);
    };
    Score.getInstance = function () {
        if (Score.instance) {
            Score.instance = new Score();
        }
        return Score.instance;
    };
    return Score;
}());
var Food = /** @class */ (function () {
    function Food(element) {
        this.element = element;
        element.addEventListener('click', this.clickEventHandler.bind(this));
    }
    Food.prototype.clickEventHandler = function () {
        this.element.classList.toggle('food--active');
        var score = Score.getInstance();
        score.render();
    };
    return Food;
}());
var Foods = /** @class */ (function () {
    function Foods() {
        this.elements = document.querySelectorAll('.food');
        this._activeElement = [];
        this._activeElementScore = [];
        this.elements.forEach(function (element) {
            new Food(element);
        });
    }
    Object.defineProperty(Foods.prototype, "activeElements", {
        get: function () {
            var _this = this;
            this._activeElement = [];
            this.elements.forEach(function (element) {
                if (element.classList.contains('food--active')) {
                    _this._activeElement.push(element);
                }
            });
            return this._activeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Foods.prototype, "activeElementScore", {
        get: function () {
            var _this = this;
            this._activeElementScore = [];
            this._activeElement.forEach(function (element) {
                var foodScore = element.querySelector('.food_score');
                if (foodScore) {
                    _this._activeElementScore.push(Number(foodScore.textContent));
                }
            });
            return this._activeElementScore;
        },
        enumerable: true,
        configurable: true
    });
    Foods.getInstance = function () {
        if (!Foods.instance) {
            Foods.instance = new Foods();
        }
        return Foods.instance;
    };
    return Foods;
}());
var foods = Foods.getInstance();
