import { getMessaging } from "firebase-admin/messaging";
import { IMessage } from "../../models/messages";

const firebaeMessaging = getMessaging();

export async function sendNotificationMessage(message: IMessage, topic: string) {
    try {
        const res = await firebaeMessaging.send({
            data: {
                body: message.body,
                senderName: message.sender.name,
                timestamp: message.timestamp.toString()
            }, 
            topic
        });
        console.log('Successfully sent message:', res);
    } catch (error) {
        console.log('Error sending message:', error);
    }
}