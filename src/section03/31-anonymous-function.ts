export {};

/* 無名関数による関数定義 */
// 変数bmiの型アノテーションを明示すると以下のようになる
let bmi: (height: number, weight: number) => number = function (
    height: number, weight: number
): number {
    return weight / (height * height);
};

console.log(bmi(1.78, 86));