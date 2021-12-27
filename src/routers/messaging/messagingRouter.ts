import express from "express";
import { body } from "express-validator";
import { getMessagesController } from "../../controllers/getMessagesController";
import { sentMessageController } from "../../controllers/sendMesageController";
import { subscribeToTopicController } from "../../controllers/subscribeToTopicController";

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

router.post(
  "/message/subscribe",
  body("token").isString(),
  subscribeToTopicController
);

export default router;
