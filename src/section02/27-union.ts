export {};

/* 共用体型（union型） */
let value: number | string = 1;
value = 'foo';

type Item1 = {
    id: number;
    rare: number;
    cnt: number;
}

type Item2 = {
    id: string;
    rare: number;
    name: string;
}

type MixedItem = Item1 & Item2;
let item: MixedItem = {
    id: 1,
    rare: 4,
    cnt: 5,
    name: 'heal potion'
}