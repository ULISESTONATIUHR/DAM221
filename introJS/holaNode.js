console.log("Hola mundo NODE ");

let edad1=20;
let edad2=30;
console.log("Edad promedio:");
console.log((edad1 + edad2) / 2);

console.log("-----Medir Proceso  -----");
console.time("Mi proceso")
    for(let i=0; i<100000000; i++){
    }
console.timeEnd("Mi proceso")