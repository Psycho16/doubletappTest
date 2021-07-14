import config from '@consts/appConfig'


const authTokenKey = config.localStorage.authTokenStorageName
const userRoleKey = config.localStorage.userRoleStorageName

// AuthToken
export const getAuthToken = (): string | null => localStorage.getItem(authTokenKey)

export const setAuthToken = (token: string): void => {
  localStorage.setItem(authTokenKey, token)
}

export const removeAuthToken = (): void => {
  localStorage.removeItem(authTokenKey)
}

// UserRole
export const getUserRole = (): string | null => localStorage.getItem(userRoleKey)

export const setUserRole = (userRole: string): void => {
  localStorage.setItem(userRoleKey, userRole)
}

export const removeUserRole = (): void => {
  localStorage.removeItem(userRoleKey)
}

export const clearLocalStorage = (): void => {
  localStorage.clear()
}