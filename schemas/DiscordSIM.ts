import mongoose from 'mongoose';    

interface DiscordSIMData {
    discord_id: string;
    user_id: string;
}

const schema = new mongoose.Schema<DiscordSIMData>({
    discord_id: { type: String, required: true },
    user_id: { type: String, required: true },
}, { timestamps: true })

export type UserDocument = mongoose.HydratedDocument<DiscordSIMData>;

export const UserSchema: mongoose.Model<DiscordSIMData> =
  mongoose.models['Discord SIM'] || mongoose.model('Discord SIM', schema);