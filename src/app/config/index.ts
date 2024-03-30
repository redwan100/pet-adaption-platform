import dotenv from "dotenv";
import path from "path";
import { cwd } from "process";
dotenv.config({ path: path.join(cwd(), ".env") });

export default {
  salt_round: process.env.SALT_ROUND,
  jwt: {
    jwt_secret: process.env.JWT_SECRET,
    jwt_expires_in: process.env.JWT_EXPIRES_IN,
    refresh_secret: process.env.REFRESH_SECRET,
    refresh_expires_in: process.env.REFRESH_EXPIRES_IN,
  },
};
