export {};

/* コンストラクタによる初期化処理 */
class Person {
    // コンストラクタでアクセス修飾子を設定することで、メンバ変数の宣言と初期化処理が同時に行われる
    constructor(public name: string, protected age: number) {
    }
}

const me = new Person('Taro', 43);
console.log(me);