export {};

/* constアサーション */

let name = 'Atsushi';

// 値の書き換えが可能
name = 'Ham';

// 型推論が'Ham'型となっている
let nickname = 'Ham' as const;
// 別の文字列を代入するとコンパイルエラー発生
nickname = 'Hamtaro';

// オブジェクトに対しても適用可能。全ての要素がread-onlyになる
let profile = {
    name: 'Atsushi',
    height: 178
} as const;

profile.name = 'Ham';
profile.height = 180;

