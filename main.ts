function multiplicacao(argumento1:number , argumento2:number):number{
    return argumento1 * argumento2
}

function concatenacao(nome:string):string{
    return `Olá ${nome}!`;
}

console.log(multiplicacao(12, 32))
console.log(concatenacao("julia"))