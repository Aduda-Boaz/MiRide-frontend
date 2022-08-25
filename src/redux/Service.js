/* eslint-disable camelcase */
import axios from 'axios';

const Url = 'http://localhost:8080/api/V1/';

export const fetchAllMentors = () => (dispatch) => axios.get(`${Url}mentors`)
  .then((res) => {
    dispatch({
      type: 'ALL_MENTORS',
      payload: res.data,
    });
  }).catch((err) => {
    console.log(err);
  });

export const fetchOneMentor = (id) => (dispatch) => axios.get(`${Url}mentors/${id}`)
  .then((res) => {
    dispatch({
      type: 'ONE_MENTOR',
      payload: res.data,
    });
  }).catch((err) => {
    console.log(err);
  });

export const createReservation = async (user_id, mentor_id, date, time) => (dispatch) => axios.post(`${Url}reservations`, {
  user_id,
  mentor_id,
  date,
  time,
}).then((res) => {
  dispatch({
    type: 'CREATE_RESERVATION',
    payload: res.data,
  });
}).catch((err) => {
  console.log(err);
});

export const fetchAllReservations = () => (dispatch) => axios.get(`${Url}reservations`)
  .then((res) => {
    dispatch({
      type: 'ALL_RESERVATIONS',
      payload: res.data,
    });
  }).catch((err) => {
    console.log(err);
  });

export const fetchOneReservation = (id) => (dispatch) => axios.get(`${Url}reservations/${id}`)
  .then((res) => {
    dispatch({
      type: 'ONE_RESERVATION',
      payload: res.data,
    });
  }).catch((err) => {
    console.log(err);
  });
