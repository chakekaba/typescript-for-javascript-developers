export {};
/* 継承 */

// 動物クラス
class Animal {
    constructor(public name: string) {}

    run(): string {
        return 'I can run';
    }
}

// ライオンクラス
class Lion extends Animal {
    public speed: number;
    // 派生クラスのコンストラクタ内に何も処理を記述しないと、以下のメッセージが表示
    // 「派生クラスのコンストラクターには 'super' の呼び出しを含める必要があります。」
    constructor(name: string, speed: number) {
        super(name);
        this.speed = speed;
    }

    run(): string {
        // 親クラスのメソッドを呼び出し
        const parentMessage = super.run();
        console.log({ parentMessage })
        return `${super.run()} ${this.speed}km/h.`;
    }
}

// let animal = new Animal();
// console.log(animal.run());

// let lion = new Lion();
// console.log(lion.run());

console.log(new Animal('Mickey').run());
console.log(new Lion('Simba', 90).run());