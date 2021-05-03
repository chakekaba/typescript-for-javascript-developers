export {};

// object型：{}で囲ったオブジェクトの型

// 制約が甘い記法。別の型の要素で自由に変更出来てしまう。
let profile1: object = { name : 'Ham'};
profile1 = { birthYear: 1996 };

// {}もobject型の宣言として使用できる。{}内にアノテーションのプロパティを定義できる。
// let profile2: {} = { name: 'Ham'};
let profile2: {
    name: string;
} = { name: 'Ham'};
// エラー
// profile2 = { birthYear: 1996 };
profile2 = {name: 'Nimo'};