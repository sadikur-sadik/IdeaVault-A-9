import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { jwt } from "better-auth/plugins";

const client = new MongoClient(process.env.MONGO_URI);
const db = client.db('idea-vault-database');

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client
  }),
  emailAndPassword: {
    enabled: true,
  },
  sessions: {
    cookieCache: {
      enabled: true, 
      strategy: "jwt", 
      maxAge: 60 * 60 * 24 * 7,
    },
  },
  plugins: [
    jwt()
  ],
});