export {};

/* readonly修飾子 */

class VisaCard {
    // readonly owner: string;
    // constructor(owner: string) {
    //     this.owner = owner;
    // }

    constructor(public readonly owner: string) {
    }
}

let myVisaCard = new VisaCard('Taro');
console.log(myVisaCard.owner);

// エラー発生
// myVisaCard.owner = 'Jiro';