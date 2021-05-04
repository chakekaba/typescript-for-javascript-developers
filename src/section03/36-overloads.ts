export {};

/* 関数のオーバーロード */

// シグネチャ(関数の定義)
function double(value: number): number;
function double(value: string): string;

// number,string以外の型が引数の場合、エラーになる。
function double(value: any): any {
    if (typeof value === "number") {
        return value * 2;
    } else {
        return value + value;
    }
};

console.log(double('Go '));
console.log(double(100));
// コンパイルエラー発生
console.log(double(true));
 