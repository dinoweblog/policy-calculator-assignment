const express = require("express");

const router = express.Router();

const Policy = require("../models/policy.model");

router.post("", async (req, res) => {
  try {
    let user = await Policy.create(req.body);

    return res.send(user);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("", async (req, res) => {
  try {
    let user = await Policy.find().lean().exec();

    return res.send(user);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

module.exports = router;
