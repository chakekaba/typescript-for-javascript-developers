export {};

/* インターフェース */

// タイプエイリアス
type ObjectType = {
    name: string;
    age: number;
};

// インターフェース
interface ObjectInterface {
    name: string;
    age: number;
}

let object: ObjectInterface = {
    name: 'Ham-san',
    age: 43
}