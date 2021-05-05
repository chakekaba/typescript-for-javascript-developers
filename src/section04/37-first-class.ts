export {};

/* TypeScriptのクラス */

class Person {
    // メンバ変数の宣言
    name: string;
    age: number;

    // コンストラクタは戻り値を返さないので、型を設定する必要なし
    // 仮にvoidを設定しても、エラーとなる。
    constructor(name: string, age: number) {
        // 初期化処理
        this.name = name;
        this.age = age;
    }

    profile(): string {
        return `name: ${this.name}, age: ${this.age}`
    }
}

let taro = new Person('Taro', 30);

console.log(taro);
// Person { name: 'Taro', age: 30 } と出力される。

console.log(taro.profile());