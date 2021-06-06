export {};

type DebugType = () => void;
type SomeTypes = string | number | DebugType;

/* Exclude 除外する*/
type FunctionType = Exclude<SomeTypes, string | number>;
// type FunctionType = () => void

type NunFunctionType = Exclude<SomeTypes, DebugType>;
// type NunFunctionType = string | number

// 全ての関数の型を除外したい場合
type TypeExcludingFunction = Exclude<SomeTypes, Function>;
// type TypeExcludingFunction = string | number

/* Exract 抽出する*/
type FUnctionTypeByExtract = Extract<SomeTypes, DebugType>;
// type FUnctionTypeByExtract = () => void

type NonFunctionTypeByExtract = Extract<SomeTypes, string | number>;
// type NonFunctionTypeByExtract = string | number

type FunctionTypeByExtractingFunction = Extract<SomeTypes, Function>;
// type FunctionTypeByExtractingFunction = () => void


/* NunNullable */
type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;
// type NonNullableTypes = string | number