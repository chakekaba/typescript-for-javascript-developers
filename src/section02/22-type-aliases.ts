export {};

type Mojiretsu = string;

const fooString: string = 'Hello';
const fooMojiretsu: Mojiretsu = 'Hello';

const example1 = {
    name: 'Ham',
    age: 43
}

// エイリアスによる型定義
type Profile = {
    name: string;
    age: number;
}

// 
const example2: Profile = {
    name: 'Ham',
    age: 43
}

// example1の型をProfile2として使用
type Profile2 = typeof example1;