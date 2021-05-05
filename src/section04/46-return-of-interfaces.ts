export {};

/* インターフェース */

class Mahotuskai {}
class Souryo {}

class Taro extends Mahotuskai {}

interface Kenja {
    // 攻撃魔法
    ionazun(): void;
}

interface Senshi {
    kougeki(): void;
}

class Jiro implements Kenja, Senshi {
    ionazun(): void {
        console.log('ionazun');
    }

    kougeki(): void {
        console.log('kougeki');
    }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();