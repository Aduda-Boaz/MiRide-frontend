import axios from 'axios';

const Url = 'http://localhost:8080/api/V1/';

export const fetchAllMentors = () => {
  return dispatch => {
    return axios.get(Url + 'mentors')
      .then(res => {
        dispatch({
          type: 'ALL_MENTORS',
          payload: res.data
        });
      }).catch(err => {
        console.log(err);
      }
      );
  }
}

export const fetchOneMentor = (id) => {
  return dispatch => {
    return axios.get(Url + 'mentors/' + id)
      .then(res => {
        dispatch({
          type: 'ONE_MENTOR',
          payload: res.data
        });
      }).catch(err => {
        console.log(err);
      }
      );
  }
}

export const createReservation = async (user_id, mentor_id, date, time) => {
  return dispatch => {
    return axios.post(Url + 'reservations', {
      user_id: user_id,
      mentor_id: mentor_id,
      date: date,
      time: time
    }).then(res => {
      dispatch({
        type: 'CREATE_RESERVATION',
        payload: res.data
      });
    }).catch(err => {
      console.log(err);
    }
    );
  }
}

export const fetchAllReservations = () => {
  return dispatch => {
    return axios.get(Url + 'reservations')
      .then(res => {
        dispatch({
          type: 'ALL_RESERVATIONS',
          payload: res.data
        });
      }).catch(err => {
        console.log(err);
      }
      );
  }
}

export const fetchOneReservation = (id) => {
  return dispatch => {
    return axios.get(Url + 'reservations/' + id)
      .then(res => {
        dispatch({
          type: 'ONE_RESERVATION',
          payload: res.data
        });
      }).catch(err => {
        console.log(err);
      }
      );
  }
}