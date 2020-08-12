const { Schema, model } = require("mongoose");

const ClienteSchema = new Schema({
  IdCliente: { type: String, required: true },
  IdPsicologo: { type: String, required: true },
}
);

module.exports = model("Cliente", ClienteSchema);