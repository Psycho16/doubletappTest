import { UserModel } from "@models/common/user.model"


export type LoginRequest = {
  email: string
  password: string
}

export type LoginResponse = {
  token: string
  user: UserModel
}