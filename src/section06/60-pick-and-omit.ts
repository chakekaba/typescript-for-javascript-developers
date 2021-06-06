export {};

type DetailedProfile = {
    name: string;
    height: number;
    weight: number;
}

/* pick 第２引数に指定したプロパティのみ使用した、新たな型*/
// type Pick<T, K extends keyof T> = { [P in K]: T[P]; }
type SimpleProfile = Pick<DetailedProfile, 'name' | 'weight'>;
// type SimpleProfile = {
//     name: string;
//     weight: number;
// }

/* omit  第２引数に指定したプロパティを除外した、新たな型*/
// type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
type SmallProfile = Omit<DetailedProfile, 'height'>;
// type SmallProfile = {
//     name: string;
//     weight: number;
// }

// omitの型定義分解
type MyOmit = Pick<
    DetailedProfile, 
    Exclude<'name' | 'height' | 'weight', 'height'>>;// 'name' | 'weight'
type MySmallProfile = MyOmit;