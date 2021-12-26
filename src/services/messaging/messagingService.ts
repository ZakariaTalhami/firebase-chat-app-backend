import { database } from "firebase-admin";
import { IMessage, messageAsc, sortIMessges } from "../../models/messages";
import { sendNotificationMessage } from "../firebase/firebaseMessagingService";

const db = database();
const messagingRef = db.ref('Messaging')

/**
 * 
 * Process:
 *      Step 1: Save message in the database
 *      Step 2: Send out notification
 * 
 * @param message 
 */
export async function sendMessage(message: IMessage) {
    // Save to firebase
    messagingRef.push(message);
    // Send Notification Message
    sendNotificationMessage(message, 'chat');
    return message;
}

export async function getMessages(sortFunction: sortIMessges = messageAsc): Promise<IMessage[]> {
    const msgList: IMessage [] = [];
    const messages = await messagingRef.once('value');
    messages.forEach(msg => {
        const msgId = msg.key ?? "";
        const msgData = msg.val() as Pick<IMessage, 'sender' | 'body' | 'timestamp'>;
        msgList.push({
            id: msgId,
            ...msgData
        })
    });
    
    return msgList.sort(sortFunction);
}
