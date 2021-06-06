export {};

/* Conditional Typesで使用されるinferキーワードについて */

function add(a: number, b: number){
    return a + b;
}

console.log(add(1, 2));

/* ruturnType */
// type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
type ReturnTypeFromAdd = ReturnType<typeof add>;
// type ReturnTypeFromAdd = number

/* ReturnTypeの型定義分解 */
type MyReturnType<T extends (...args: any) => any> = T extends (
    ...args: any
    ) => infer R 
        ? R 
        : any;
