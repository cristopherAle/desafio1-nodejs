const {registrar, leer} = require('./operaciones');

const [orden, nomMascota, edadMascota, raza, colorMascota, diagnostico] = process.argv.slice(2)

if (orden=== 'registrar'){
    registrar (nomMascota, edadMascota, raza, colorMascota, diagnostico)
}

if(orden ==='leer'){
    leer()
}