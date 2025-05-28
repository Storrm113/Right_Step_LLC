import express from "express";
const router = express.Router();

router.post("/", (req, res) => {
  res.send({ success: true, message: "Message received!" });
});

export default router;
