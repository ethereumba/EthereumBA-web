const API_URL = 'http://api.localhost'

const API_ROUTES = {
  events: `${API_URL}/api/v1/events/?ordering=-date`,
  calendar: `${API_URL}/api/v1/calendar/`,
}

export { API_ROUTES as default }
