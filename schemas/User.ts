import mongoose from 'mongoose';    

interface UserData {
    name: string;
}

const schema = new mongoose.Schema<UserData>({
    name: { type: String, required: true },
}, { timestamps: true })

export type UserDocument = mongoose.HydratedDocument<UserData>;

export const UserSchema: mongoose.Model<UserData> =
  mongoose.models['Users'] || mongoose.model('Users', schema);