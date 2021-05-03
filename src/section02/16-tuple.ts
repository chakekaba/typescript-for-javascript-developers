export {};

// 配列の指定位置に決まった型のデータを指定したい場合はタプル型
let profile: [string, number] = ['Ham', 43];

// エラーが発生する場合
profile = [43, 'Ham'];

