// const nombre = prompt ('nombre')
// let apellido = prompt ('apellido')
//  console.log (apellido, nombre)

// console.log (`hola, soy ${nombre} ${apellido}`)


// const materia={
//     profesor:"Javier",
//     tema: "react",
//     horas:"si"
// }


// const materia2={...materia}
// materia2.profesor="yo"


// console.table (materia)
// console.table (materia2)

const numeros  = [1,2,3]
let numeros2=[...numeros]
numeros2=numeros.map((numero)=>{
    return numero*2
})

console.table(numeros2)