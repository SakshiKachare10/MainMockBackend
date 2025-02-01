const mongoose = require("mongoose");

const PrimaryContactSchema = new mongoose.Schema({
  email: { type: String, unique: true, sparse: true },
  phoneNumber: { type: String, unique: true, sparse: true },
  isPrimary: { type: Boolean, default: true },
  secondaryContactIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "SecondaryContact" }],
});

module.exports = mongoose.model("PrimaryContact", PrimaryContactSchema);