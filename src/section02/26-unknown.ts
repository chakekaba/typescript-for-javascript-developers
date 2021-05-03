export {};

/* unknown型 */

const kansu = (): number => 43;

let numberAny: any = kansu();
// anyだと、値が適切でなくてもエラーが発生しない
let sumAny = numberAny + 10;
sumAny = numberAny + 'AAA';

// numberUnknownの型がわからないもの(unknown型)として、定義
let numberUnknown: unknown = kansu();

// コンパイルエラーが発生する。
// let sumUnknown = numberUnknown + 10;

console.log(typeof numberUnknown);

// タイプガード処理：型安全なコードを書くための処理
if (typeof numberUnknown === 'number') {
    // numberUnknownの型がnumberの場合
    let sumUnknown = numberUnknown + 10;
}