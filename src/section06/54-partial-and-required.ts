export {};

/* PartialとRequired */

/* Partialについて */

type Profile1 = {
    name: string;
    age?: number;
    zipCode: number;
};

// オプショナルなプロパティを設定する方法
// ①
// 33-optional-arguments.ts　参照
// type Profile2 = {
//     name?: string;
//     age?: number;
// };

// ②Partialを使用する方法
// 全てのプロパティがオプショナルな型
type PartialType = Partial<Profile1>;
// type PartialType = {
//     name?: string | undefined;
//     age?: number | undefined;
//     zipCode?: number | undefined;
// }

/* Requiredについて */
// 全てのプロパティが必須な型
type RequiredType = Required<Profile1>;
// type PartialType = {
//     name?: string | undefined;
//     age?: number | undefined;
//     zipCode?: number | undefined;
// }