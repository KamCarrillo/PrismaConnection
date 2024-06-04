import { db } from "./utils/db.server";

export type User = {
  email: string;
  name: string;
};

export const listUsers = async (): Promise<User[]> => {
    return db.user.findMany({
      select: {
        id:true,
        email: true,
        name: true,
      },
    });
  };
  
  export const getUser = async (id: number): Promise<User | null> => {
    return db.user.findUnique({
      where: {
        id,
      },
    });
  };
  
  export const createUser = async (
    user: Omit<User, "id">
  ): Promise<User> => {
    const { email, name } = user;
    return db.user.create({
      data: {
        email,
        name,
      },
      select: {
        id: true,
        email:true,
        name:true,
      },
    });
  };