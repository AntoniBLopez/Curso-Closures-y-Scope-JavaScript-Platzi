

var hello = 'Hello! Var'
let world = 'Hello World Let'
const helloWorld = 'Hello World Const'
console.log(hello)

const anotherFunction = () => {
    console.log(hello)
    console.log(world)
    console.log(helloWorld)
}

anotherFunction()


const toni = () => {
    variableSinPalabraReservada = 'Hola Toni'
}

toni()

console.log(variableSinPalabraReservada)

const toni2 = () => {
    const toni = variableSinPalabraReservada = 'Hola Toni2' // Se puede ejecutar variableSinPalabraReservada desde el scope global ->
    // variableSinPalabraReservada = 'Hola Toni2'    // Esta línea es lo mismo que la lína 26              -> pero es una mala práctica
}

toni2()

console.log(variableSinPalabraReservada)