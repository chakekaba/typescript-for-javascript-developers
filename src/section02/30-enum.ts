export {};

/* 列挙型 */

enum Months {
    // 先頭の数値に
    January = 1,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December
}


console.log(Months.January);
console.log(Months.February);
console.log(Months.December);

// 数値が振られている
console.log(typeof Months.January);

// 文字列が振られている列挙型
enum COLORS {
    RED = '#FF0000',
    WHITE = '#FFFFFF',
    GREEN = '#008000',
    BLUE = '#0000FF',
    BLACK = '#000000'
}

let green = COLORS.GREEN;
console.log({ green });

// enum型に要素を追加する
enum COLORS {
    YELLOW = '#FFFF00',
    GRAY = '#808080'
}

COLORS.GRAY;

enum Youbis {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Fryday,
    Saturday
}

// 異なる列挙型要素を比較した場合、下記のエラーが発生
// This condition will always return 'false' since the types 'Youbis' and 'Months' have no overlap.ts(2367)
console.log(Youbis.Monday === Months.January);