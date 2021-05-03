export {};

// never型：関数の中で

function error(message: string):never {
    // 受け取ったメッセージのエラーを発生させる。
    throw new Error(message);
}

try {
    let result = error('test');
    console.log({ result })
} catch (error) {
    console.log("=============================================\n");
    console.log({ error});
}

let foo: void = undefined;

// エラーが発生する
// let bar: never = undefined;

let bar: never = error('only me');