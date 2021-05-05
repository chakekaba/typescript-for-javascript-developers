export {};

/* namespaceによる名前空間 */

// 日本語名
namespace Japanese {
    // "export"を指定することで、名前空間の外からアクセスすることができるようになる。
    export namespace Tokyo {
        export class Person {
            constructor(public name: string) {}
        }
    }

    export namespace Osaka {
        export class Person {
            constructor(public name: string) {}
        }
    }
}

// 英語名
namespace English {
    export class Person {
        constructor(
            public firstName: string, 
            public middleName: string, 
            public lastName: string
        ) {}
    }
}

// Japanese.Tokyo内のPersonクラス
const me = new Japanese.Tokyo.Person('Taro');
console.log(me.name);

// Japanese.Osaka内のPersonクラス
const meOsaka = new Japanese.Osaka.Person('Jiro');
console.log(meOsaka.name);

// English内のPersonクラス
const michael = new English.Person('Michael', 'Joseph', 'Jackson');
console.log(michael);

