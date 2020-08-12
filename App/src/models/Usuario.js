const { Schema, model } = require("mongoose");

const bcrypt = require("bcryptjs");

const UserSchema = new Schema({
  Nombre: { type: String, require: true},
  ApPaterno: { type: String, required: true },
  ApMaterno: { type: String, required: true },
  Email: { type: String, required: true, unique: true},
  Tipo: { type: String, required: true },
  Pais: { type: String, required: true },
  Tel: { type: Number, required: true},
  Fecha_Nac: { type: Date, required: true },
  password: { type: String, required: true}
});

UserSchema.methods.encryptPassword = async password => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

UserSchema.methods.matchPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = model("User", UserSchema);