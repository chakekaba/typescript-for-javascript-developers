export {};

/* getterとsetter */

/**
 * owner
 *  初期化時に設定できる
 *  途中で変更できない
 *  参照できる。
 * 
 * secretNumber
 *  初期化時に設定できる
 *  途中で変更できない。
 */
class MyNumberCard {
    // 所有者
    protected _owner: string;
    // 個人番号
    protected _secretNumber: number;

    // コンストラクタ
    constructor(owner: string, secretNumber: number) {
        this._owner = owner;
        this._secretNumber = secretNumber;
    }

    get owner() {
        return this._owner
    }

    set secretNumber(secretNumber: number) {
        this._secretNumber = secretNumber;
    }
}

let card = new MyNumberCard('Taro', 1234567890);
console.log(card.owner);
console.log(card);

card.secretNumber = 1111111111;
console.log(card);

// undefinedになる。
console.log(card.secretNumber);