const fs = require("fs")

/* ■ Nombre del animal
■ Edad
■ Tipo de animal
■ Color del animal
■ Enfermedad */

const registrar = (nomMascota, edadMascota, raza, colorMascota, diagnostico) => {
  const data = JSON.parse(fs.readFileSync("citas.json", "utf-8"));
  data.push({ nomMascota, edadMascota, raza, colorMascota, diagnostico });
  fs.writeFileSync("citas.json", JSON.stringify(data));
  console.log("data created successfully");
};


const leer = ()=>{
  const data = JSON.parse(fs.readFileSync("citas.json", "utf8"));
  console.log(data);
};

module.exports={
  registrar,
  leer,
};