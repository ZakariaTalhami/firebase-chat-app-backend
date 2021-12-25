import { model, Schema } from "mongoose";

export interface IMessage {
    sender: {
        name: string
    },
    body: string,
    timestamp: number
}

const messageSchema = new Schema({
    sender: {
        name: {
            type: String,
            required: true
        }
    },
    body: {
        type: String,
        required: true
    },
    timestamp: {
        type: Number,
        required: true
    }
});

const Message = model<IMessage>('Message', messageSchema);

export {
    Message
}