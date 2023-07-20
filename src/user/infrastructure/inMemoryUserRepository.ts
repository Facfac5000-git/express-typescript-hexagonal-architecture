// Hardcoded Repository for Interface
import { User } from "../domain/user";
import { UserRepository } from "../domain/userRepository";

const users: User[] = [
  {
    id: "1",
    email: "luna.macarena.chayle.bournonville@example.com",
  },
  {
    id: "2",
    email: "lucia.delvalle.chayle.cisnero@example.com",
  },
];

export class InMemoryUserRepository implements UserRepository {
  async getById(userId: string): Promise<User | null> {
    const user = users.find((user) => user.id === userId);

    return user ? new User(user.id, user.email) : null;
  }
}
