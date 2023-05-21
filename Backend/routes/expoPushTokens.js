const express = require("express");
const router = express.Router();
const usersStore = require("../store/users");
const auth = require("../middleware/auth");

router.post(
  "/",
  [auth],
  (req, res) => {
    const user = usersStore.getUserById(req.user.userId);
    if (!user) return res.status(400).send({ error: "Invalid user." });

    user.expoPushToken = req.body.token;
    console.log("User registered for notifications: ", user);
    res.status(201).send();
  }
);

module.exports = router;
