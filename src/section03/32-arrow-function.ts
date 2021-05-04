export { };

/* アロー関数による関数定義 */
let bmi: (height: number, weight: number) => number = (
    height: number, weight: number
): number => {
    return weight / (height * height);
};

// 省略形
// let bmi: (height: number, weight: number) => number = (
//     height: number, weight: number
// ): number => weight / (height * height);

console.log(bmi(1.78, 86));