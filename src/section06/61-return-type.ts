export {};

function add(a: number, b: number){
    return a + b;
}

console.log(add(1, 2));

/* ruturnType */
type ReturnTypeFromAdd = ReturnType<typeof add>;
// type ReturnTypeFromAdd = number