const API_URL = process.env.REACT_APP_API_ROOT;

const API_ROUTES = {
  events:
    process.env.NODE_ENV !== 'production'
      ? `${API_URL}/api/v1/events/?ordering=-date`
      : `http://www.mocky.io/v2/5d8e18753100003ec52b5335`,
  calendar: `${API_URL}/api/v1/calendar/`,
};

export { API_ROUTES as default };
