const { Schema, model } = require("mongoose");

const PsicologoSchema = new Schema({
  InstEducativa: { type: String, required: true },
  Especialidad: { type: String, required: true },
  Cedula: { type: String, required: true },
  IdUsuario: { type: String, required: true }
}
);

module.exports = model("Psicologo", PsicologoSchema);