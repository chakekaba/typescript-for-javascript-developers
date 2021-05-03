export {};

/* 型安全 */

let isFinished: boolean = true;
// コンパイルエラーが発生する。
isFinished = 1;