import axios from 'axios';

import API from '../../lib/api';

export const getSingleEventService = id => axios.get(`${API.baseEvent}/${id}`);
