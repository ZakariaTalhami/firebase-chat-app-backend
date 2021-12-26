import express from "express";
import { body } from "express-validator";
import { getMessagesController, sentMessageController } from "../../controllers/sendMesageController";

const router = express.Router();

router.post(
  "/message",
  body("sender.name").isString(),
  body("body").isString(),
  body("timestamp").isNumeric(),
  sentMessageController
);

router.get(
  "/message",
  getMessagesController
);

export default router;
