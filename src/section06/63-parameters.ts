export {};

/* Parameters */

const debugProfile = (name: string, age: number) => {
    console.log({ name, age});
};

debugProfile('Ham', 43);

// Parameters
// type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never
type Profile = Parameters<typeof debugProfile>;
// type Profile = [string, number]

const profile: Profile = ['Gloria', 76];

debugProfile(...profile);

type MyParameters<T extends (...args: any) => any> = T extends (
    ...args: infer P
    ) => any 
        ? P 
        : never;