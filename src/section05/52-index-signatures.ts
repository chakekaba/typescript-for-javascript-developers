export {};

/* インデックスシグネチャ */

// 後付けでオブジェクトにプロパティを追加したい
let profile: { name?: string } = {};

profile.name = 'Ham'; // オプショナルなプロパティを設定
profile.age = 43; // プロパティ 'age' は型 '{ name?: string | undefined; }' に存在しません。

// How to write index signatures
// { [ index: typeForIndex]: typeForValue}

let profile1: {[index: string]: string | number} = {};

profile1.name = 'Ham';
profile1.age = 43;
profile1.nationality = 'Japan'


interface Profile {
    isUnderTwenty: boolean;
    [index: string]: string | number | boolean;
}


let profile2: Profile = {isUnderTwenty: false};

profile2.name = 'Ham';
profile2.age = 43;
profile2.nationality = 'Japan'