export {};

/* 中小クラス・抽象メソッド */

abstract class Animal {
    abstract cry(): string;
}

class Lion extends Animal {
    cry() {
        return 'roar';
    }
}

class Tiger extends Animal {
    cry() {
        return 'grrrr';
    }
}