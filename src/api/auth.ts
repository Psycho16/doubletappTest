import { LoginRequest, LoginResponse } from '@models/auth/login'
import { RegisterRequest, RegisterResponse } from '@models/auth/register'
import { http } from '@services/httpClient'


export const login = (data: LoginRequest) => http.post<LoginResponse>('/auth/login', data)

export const register = (data: RegisterRequest) => http.post<RegisterResponse>('/auth/register', data)