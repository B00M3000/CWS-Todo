import mongoose from 'mongoose';

export interface UserDocData {
  _id: string;
  google_id: string;
  name: string;
  avatar_url: string;
  type: "user" | "admin";
}

const schema = new mongoose.Schema<UserDocData>(
  {
    google_id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    avatar_url: { type: String, required: true },
    type: { type: String, required: true, default: "user" },
  },
  { timestamps: true },
);

export type UserDocument = mongoose.HydratedDocument<UserDocData>;

export const UserSchema: mongoose.Model<UserDocData> =
  mongoose.models.Users || mongoose.model('Users', schema);

export const UserIdentifierPrefix = 'u'
