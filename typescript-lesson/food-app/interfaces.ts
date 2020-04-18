export interface ScoreAble {
    readonly totalScore: number;
    render(): void;
}

export interface FoodAble {
    element: HTMLDivElement;
    clickEventHandler(): void;
}

export interface FoodsAble {
    elements: NodeListOf<HTMLDivElement>;
    readonly activeElements: HTMLDivElement[];
    readonly activeElementScore: number[];
}
