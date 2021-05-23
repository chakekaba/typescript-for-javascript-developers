export {};

/* 型の互換性 */

/* 互換性ガある例 */
let fooCompatible: any;
let barCompatible: string = 'TypeScript';

console.log(typeof fooCompatible);
// undefined

// 「エラーは発生しない。」＝「any型はstring型と互換性がある」
fooCompatible = barCompatible;

console.log(typeof fooCompatible);
// string
// string型のデータを代入されたことで、データ型がanyからstringに遷移した

/* 互換性がない例 */
let fooIncompatible: string;
let barIncompatible: number = 1;

fooIncompatible = barIncompatible;

/*  */
let fooString: string;
let barString: string = 'string';

fooString = barString;

let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral';
fooString = fooStringLiteral;

/*  */
let fooNumber: number;
let fooNumberLiteral: 1976 = 1976;
fooNumber = fooNumberLiteral;

/*  */
// interface Animal {
//     age: number;
// }
interface Animal {
    age: number;
    name: string;
}

// animalクラスに依存しないPersonクラス
class Person {
    constructor(public age: number) {}
}

let me: Animal;
me = new Person(43);