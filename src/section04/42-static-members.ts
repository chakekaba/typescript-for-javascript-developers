export {};

/* 静的メンバ */

class Me {
    static isProgrammer: boolean = true;
    static firstName: string = 'Taro';
    static lastName: string = 'Suzuki';

    static work() {
        // メンバ変数を参照した文字列を返す
        return `Hey, guys! This is ${this.firstName}! Are you interested in TypeScript? Let's dive into TypeScript`;
    }
}

// let me = new Me();
// console.log(me.isProgrammer);

// 静的メンバへのアクセス
console.log(Me.isProgrammer);
console.log(Me.work());