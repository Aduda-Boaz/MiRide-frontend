import { BookingConstants } from '../constants/Constants';
import { fetchAllReservations, createReservation, fetchOneReservation,  } from '../Service';

export const fetchReservations = (user_id, data) => async dispatch => {
  const res = await fetchAllReservations(user_id, data);
  dispatch({
    type: BookingConstants.ALL_RESERVATIONS,
    payload: res.data
  });
};

export const createNewReservation = (user_id, mentor_id, date, time) => async dispatch => {
  const res = await createReservation(user_id, mentor_id, date, time);
  dispatch({
    type: BookingConstants.CREATE_RESERVATION,
    payload: res.data
  });
}

export const fetchSingleReservation = (user_id, id) => async dispatch => {
  const res = await fetchOneReservation(user_id, id);
  dispatch({
    type: BookingConstants.ONE_MENTOR,
    payload: res.data
  });
};

export const getMentor = (mentor_id) => {
  return {
    type: BookingConstants.ONE_MENTOR,
    payload: mentor_id
  }
}