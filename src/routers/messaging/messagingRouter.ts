import express from "express";
import { body } from "express-validator";
import { sentMessageController } from "../../controllers/sendMesageController";

const router = express.Router();

router.post(
  "/message",
  body("sender.name").isString(),
  body("body").isString(),
  body("timestamp").isNumeric(),
  sentMessageController
);

export default router;
