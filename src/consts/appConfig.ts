export default {
  api: {
    baseUrl: process.env.REACT_APP_API_BASE_URL,
    secret: process.env.REACT_APP_API_SECRET,
    token: process.env.REACT_APP_TOKEN
  },
  localStorage: {
    authTokenStorageName: 'authToken',
    userRoleStorageName: 'userRole'
  }
}