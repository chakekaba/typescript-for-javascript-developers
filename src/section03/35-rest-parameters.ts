export {};

/* Restパラメータの設定 */

// reduce関数の理解
const reducer = (accumulator: number, currentValue: number) => {
    // console.log({ accumulator, currentValue});
    return accumulator + currentValue;
};
[1, 2, 3, 4].reduce(reducer);

const sum: (...values: number[]) => number = (...values: number[]): number => {
    return values.reduce(reducer);
    // console.log(values);
};

console.log(sum(1, 2, 3, 4, 5));