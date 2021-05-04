export { };

/* オプショナルなパラメータの定義 */

/**
 * height       :身長
 * weight       :体重
 * printable    :console.logによる出力の有無
 */
// 対象の変数の直後に"?"を付けると対象の変数はオプショナルになる
let bmi: (height: number, weight: number, printable?: boolean) => number = (
    height: number, weight: number, printable?: boolean
): number => {
    const bmi: number = weight / (height * height);

    if (printable){
        console.log({ bmi });
    }

    return bmi;
};

bmi(1.78, 86);
console.log("================================");
bmi(1.78, 86, true);
console.log("================================");
bmi(1.78, 86, false);