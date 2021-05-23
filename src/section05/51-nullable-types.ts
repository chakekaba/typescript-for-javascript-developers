export {};

/* nullable type */

let profile: {
    name: string;
    age: number
} = {
    name: 'Ham',
    age: null //型 'null' を型 'number' に割り当てることはできません。
};

let profile1: {
    name: string;
    age: number | null // nullを許容
} = {
    name: 'Ham',
    age: null
};