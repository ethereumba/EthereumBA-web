const API_URL = process.env.REACT_APP_API_ROOT;

const API_ROUTES = {
  events: `${API_URL}/api/v1/events/?ordering=-date`,
  calendar: `${API_URL}/api/v1/calendar/`,
  baseEvent: `${API_URL}/api/v1/events`,
};

export { API_ROUTES as default, API_URL };
