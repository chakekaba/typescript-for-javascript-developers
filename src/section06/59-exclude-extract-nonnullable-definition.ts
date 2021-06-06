export {};

/* Conditional Types と Distributive Conditional Typesについてマスターしよう */

type DebugType = () => void;
type SomeTypes = string | number | DebugType;

/* Exclude 除外する*/
type FunctionType = Exclude<SomeTypes, string | number>; 
// ①
// type MyExclude<T> = T extends string | number ? never : T;
// ② Distributive conditional types
type MyExclude = 
(string extends string | number ? never : string) |//never
(number extends string | number ? never : number) |//never
(DebugType extends string | number ? never : DebugType);//DebugType
type MyFunctionType = MyExclude;

/* Exract 抽出する*/
type FUnctionTypeByExtract = Extract<SomeTypes, DebugType>;
// type Extract<T, U> = T extends U ? T : never
// type FUnctionTypeByExtract = () => void


/* NunNullable */
type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;
// type NonNullable<T> = T extends null | undefined ? never : T
// type NonNullableTypes = string | number

