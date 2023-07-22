// Hardcoded Repository for Interface
import { getModelForClass, prop } from "@typegoose/typegoose";
import { Types } from "mongoose";

import { User } from "../domain/user";
import { UserRepository } from "../domain/userRepository";

class MongoUser {
  @prop({ auto: true, default: Types.ObjectId })
  _id!: Types.ObjectId;

  @prop({ required: true, unique: true })
  id!: string;

  @prop({ required: true, unique: true })
  email!: string;
}

const UserModel = getModelForClass(MongoUser);

export class mongoDBUserRepository implements UserRepository {
  async getById(userId: string): Promise<User | null> {
    const user = await UserModel.findOne({ id: userId });
    return user ? new User(user.id, user.email) : null;
  }
}
