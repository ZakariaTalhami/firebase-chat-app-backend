import { IMessage, Message } from "../../models/messages";

/**
 * 
 * Process:
 *      Step 1: Save message in the database
 *      Step 2: Send out notification
 * 
 * @param message 
 */
export async function sendMessage(message: IMessage) {
    console.log(message);
    const newMessage = new Message(message);
    newMessage.save();
    return newMessage;
}
