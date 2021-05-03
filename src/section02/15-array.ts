export {};

let numbers:number[] = [1, 2, 3];

//オリジナルの型のリスト作成で使われる書き方
let number2:Array<number> = [1, 2, 3];

let strings: string[] = ['TypeScript', 'JavaScript', 'CoffeeScript'];

// 二次元配列
let nijigenHairetsu: number[][] = [
    [50, 100],
    [150, 300]
];

// 複数のデータ型オブジェクトが格納されている配列
let hairetsu: (string | number | boolean)[] = [1, false, 'Japan'];