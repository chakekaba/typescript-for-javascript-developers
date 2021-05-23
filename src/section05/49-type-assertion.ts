export {};

/* 型アサーション */

let name: any = 'Ham';

// 方法１
// let length = name.length as number;
let length = (name as string).length;

// 方法２（非推奨）
// let length = (<string>name).length;


console.log({ length });