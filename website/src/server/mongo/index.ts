import env from '@/server/env';
import mongoose from 'mongoose';

// loading schemas
import { UserSchema, UserIdentifierPrefix } from './schemas/user'; 
import { SessionSchema, SessionIdentifierPrefix } from './schemas/session'; 

const schemasInfo = [
  { name: "Users", schema: UserSchema, prefix: UserIdentifierPrefix },
  { name: "Sessions", schema: SessionSchema, prefix: SessionIdentifierPrefix },
]

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async () => {
  if (mongoose.connections.length > 0) {
    await mongoose.disconnect();
  }
  await mongoose.connect(env.MONGO_URI);
};

function parseIdentifier(id: string){
  const parts = id.split('_')
  return {
    prefix: parts[0],
    id: parts[1]
  }
}

function getDocument(pid: string, keystring?: string){
  const expanded = parseIdentifier(pid)
  const schemaInfo = schemasInfo.find(s => s.prefix == expanded.prefix)
  if(schemaInfo){
    const document = schemaInfo.schema.findOne({ _id: expanded.id }, keystring)
  } else {
    throw new Error(`No schhema found for ${expanded.prefix} prefix`)
  }
}

export * from './schemas/user';
export * from './schemas/session';