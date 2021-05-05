export {};

/* アクセス修飾子 */

class Person {
    // メンバ変数の宣言
    public name: string;/* アクセス修飾子を設定しない = public */
    private age: number;
    protected nationality: string;

    // コンストラクタは戻り値を返さないので、型を設定する必要なし
    // 仮にvoidを設定しても、エラーとなる。
    constructor(name: string, age: number, nationality: string) {
        // 初期化処理
        this.name = name;
        this.age = age;
        this.nationality = nationality;
    }

    profile(): string {
        return `name: ${this.name}, age: ${this.age}`;
    }
}

// 人造人間クラス
class Android extends Person {
    constructor(name: string, age: number, nationality: string) {
        super(name, age, nationality);
    }

    profile(): string {
        return `name: ${this.name}, age: ${this.age}, nationality: ${this.nationality}`;
    }
}

let taro = new Person('Taro', 30, 'Japan');

console.log(taro.profile());

// アクセス修飾子
console.log(taro.name);
console.log(taro.age);
console.log(taro.nationality);