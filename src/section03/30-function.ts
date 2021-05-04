export {};

/* functionキーワードによる関数定義 */
function bmi(height: number, weight: number): number {
    return weight / (height * height);
}

console.log(bmi(1.78, 86));