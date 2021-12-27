import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { subscribeToTopic } from "../services/messaging/messagingService";

export const subscribeToTopicController = async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const token = req.body.token;
    await subscribeToTopic(token);
    res.send()
};
