import hash from "bcryptjs";

export const hashPassword = async (pass: string) => {
  return await hash.hash(pass, 10);
};

export const verifyPassword = async (pass: string, hashPass: string) => {
  return await hash.compare(pass, hashPass);
};
