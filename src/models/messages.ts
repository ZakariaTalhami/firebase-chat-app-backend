import { model, Schema } from "mongoose";

export interface IMessage {
    id?: string,
    sender: {
        name: string
    },
    body: string,
    timestamp: number
}

export type sortIMessges = (a: IMessage, b: IMessage) => number;
export const messageDesc: sortIMessges = (a, b) => b.timestamp - a.timestamp;
export const messageAsc: sortIMessges = (a, b) => a.timestamp - b.timestamp;

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