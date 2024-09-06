import mainCaller, { LoginAuthUser } from "./mainCaller";

export function AuthUser({ username, password }) {
    return LoginAuthUser(username, password);
  }