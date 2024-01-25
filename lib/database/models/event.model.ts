import { Document, Schema, model, models } from "mongoose";

export interface IEvent extends Document {
    _id: String,
    title: string;
    description?: string;
    location?: string;
    photo: string;
    createdAt: Date;
    price?: string;
    isFree: boolean;
    url?: string;
    category: {_id: string, name: string};
    organizer: {_id: string, firstName: string, lastName: string};
    startDate: Date;
    endDate: Date;
}

const EventSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    location: {
        type: String,
    },
    photo: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        required: Date.now,
    },
    price: {
        type: String
    },
    isFree: {
        type: Boolean,
        default: false,
    },
    url: {
        type: String,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
    },
    organizer: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    startDate: {
        type: Date,
        required: Date.now,
    },
    endDate: {
        type: Date,
        required: Date.now,
    },
})

const Event = models.Event || model('Event', EventSchema)

export default Event