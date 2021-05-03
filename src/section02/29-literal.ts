export {};

/* リテラル型 */

// 文字のリテラル型
// 曜日
let dayOfTheWeek: '日'|'月'|'火'|'水'|'木'|'金'|'土' = '日';
dayOfTheWeek = '月';
// コンパイルエラー
// dayOfTheWeek = '光';

// 数値のリテラル型
// 月
let month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 = 1
month = 11;
// コンパイルエラー
month = 13;

// booleanのリテラル型
let TRUE: true = true;
// コンパイルエラー
TRUE = false;