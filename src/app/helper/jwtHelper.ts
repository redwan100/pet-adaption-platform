import { User } from "@prisma/client";
import jwt, { JwtPayload, Secret } from "jsonwebtoken";

const generateToken = (
  payload: Partial<User>,
  secret: Secret,
  expiresIn: string
) => {
  const token = jwt.sign(payload, secret, {
    expiresIn,
  });

  return token;
};

const verifyToken = (token: string, secret: Secret) => {
  return jwt.verify(token, secret) as JwtPayload;
};

export const jwtHelper = {
  generateToken,
  verifyToken,
};
