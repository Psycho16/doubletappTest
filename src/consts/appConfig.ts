export default {
  api: {
    baseUrl: process.env.REACT_APP_API_BASE_URL,
    secret: process.env.REACT_APP_API_SECRET
  },
  localStorage: {
    authTokenStorageName: 'authToken',
    userRoleStorageName: 'userRole'
  }
}