import { Request, Response } from "express";
import { validationResult } from "express-validator";
import { IMessage } from "../models/messages";
import { sendMessage } from "../services/messaging/messagingService";

export const sentMessageController = async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const message = req.body as Pick<IMessage, "body" | "sender" | "timestamp">

    if(message) {
        await sendMessage(message);
        res.status(201).send();
    } else {
        res.status(400).json({
            message: "Must include message"
        });
    }
};
    