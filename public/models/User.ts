import { Schema, model, Document } from 'mongoose';

interface UserSchemaTypes extends Document {
  email: string;
  password: string;
}

const schema = new Schema<UserSchemaTypes>({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export default model<UserSchemaTypes>('User', schema);
