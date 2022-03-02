
function helloWorld () {
     const hello = 'Hello world'
     console.log(hello)
}
    
helloWorld()
console.log(hello) // Da error porque está declarada en un scope Local


//         Ámbito Léxico o Lexical Scope :

let scope = 'Soy un scope Global'

const functionScope = () => {
    let scope = 'Soy un scope Local'
    const func = () => {
        console.log(scope) // = 'Soy un scope Local'
    }
    
    func()
}

functionScope()
console.log(scope) // = 'Soy un scope Global'


const papa = (nuevoEngendro) =>{
    var cantidadDeHijos = 0;
    const crearEngendro = (nuevoEngendro) =>{
        cantidadDeHijos += nuevoEngendro;
        console.log(`cantidad de engendritos = ${cantidadDeHijos}`)
    }
    return crearEngendro;
}

const toni = papa()
toni(10)
toni(10)
toni(10)
// let traigamosHijosAlMundo = papa();
// traigamosHijosAlMundo(1)  // cantidad de engendritos = 1
// traigamosHijosAlMundo(1)  // cantidad de engendritos = 2
// traigamosHijosAlMundo(1)  // cantidad de engendritos = 3