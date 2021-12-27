import { Request, Response } from "express";
import { getMessages } from "../services/messaging/messagingService";

export const getMessagesController = async (req: Request, res: Response) => {
    try {
        const messages = await getMessages();
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({
            messages: "Unable to load messages!"
        })
    }
}
