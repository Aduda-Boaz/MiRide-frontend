import { BookingConstants } from '../constants/Constants';
import { fetchAllMentors, fetchOneMentor } from '../Service';

export const fetchMentors = () => async dispatch => {
  const res = await fetchAllMentors();
  dispatch({
    type: BookingConstants.ALL_MENTORS,
    payload: res.data
  });
}

export const mentor = (id) => async dispatch => {
  const res = await fetchOneMentor(id);
  dispatch({
    type: BookingConstants.ONE_MENTOR,
    payload: res.data
  });
};
