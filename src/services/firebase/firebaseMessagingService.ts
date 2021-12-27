import { getMessaging } from "firebase-admin/messaging";
import { IMessage } from "../../models/messages";

const firebaeMessaging = getMessaging();

export async function sendNotificationMessage(message: IMessage, topic: string) {
    try {
        const res = await firebaeMessaging.send({
            notification: {
                title: message.sender.name,
                body: message.body
            },
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

export async function subscribeUserToTopic(registractionToken: string, topic: string) {
    try {
        console.log("registractionToken:", registractionToken);
        const res = await firebaeMessaging.subscribeToTopic(registractionToken, topic);
        console.log("Successfully subscribed to topic:", res);
    } catch (error) {
        // TODO: add better error handling here
        console.log("Error subscribing to topic:", error);
    }
}