export {};

/* Mapped Types */

type Profile = {
    name: string;
    age: number
}

type PartialProfile = Partial<Profile>;
// Partial型の定義
// type Partial<T> = { [P in keyof T]?: T[P] | undefined; }
// ↑の処理を調べる

type PropertyTypes = keyof Profile;
// プロパティ名を文字列リテラル型として受け取る
// type PropertyTypes = "name" | "age"

type OptionalPartial<T> = {
    // [P in keyof T]?: T[P];
    [P in keyof T]?: T[P] | null;// null許容
};

type OptionalProfile = OptionalPartial<Profile>;