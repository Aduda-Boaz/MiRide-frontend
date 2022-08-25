import { BookingConstants } from '../constants/Constants';

const initialState = {
  allReservations: [],
  oneReservation: {},
};

export default function reservationReducer(state = initialState, action) {
  switch (action.type) {
    case BookingConstants.ALL_RESERVATIONS:
      return {
        ...state,
        allReservations: action.payload,
      };
    case BookingConstants.ONE_RESERVATION:
      return {
        ...state,
        oneReservation: action.payload,
      };
    default:
      return state;
  }
}
