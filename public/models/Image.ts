import { Schema, model } from 'mongoose';

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    }
});

export default model('Image', schema);
