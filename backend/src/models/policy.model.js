const mongoose = require("mongoose");

const policyCalcSchema = new mongoose.Schema(
  {
    DOB: { type: String, required: true },
    gender: { type: String, required: true },
    sumAssured: { type: Number, required: true },
    modelPremium: { type: Number, required: true },
    premiumFrequency: { type: String, required: true },
    PT: { type: Number, required: true },
    PPT: { type: Number, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("policy", policyCalcSchema);
