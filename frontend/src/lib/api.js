const API_URL = 'http://api.localhost'

const API_ROUTES = {
  events: process.env.NODE_ENV === 'production' ? `${API_URL}/api/v1/events/?ordering=-date` : `http://www.mocky.io/v2/5d8d04b52e00005aa1abde6c`,
  calendar: `${API_URL}/api/v1/calendar/`,
}

export { API_ROUTES as default }