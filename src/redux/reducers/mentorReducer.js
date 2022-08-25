import { BookingConstants } from '../constants/Constants';

const initialState = {
  allMentors: [],
  oneMentor: {},
};

export default function mentorReducer(state = initialState, action) {
  switch (action.type) {
    case BookingConstants.ALL_MENTORS:
      return {
        ...state,
        allMentors: action.payload,
      };
    case BookingConstants.ONE_MENTOR:
      return {
        ...state,
        oneMentor: action.payload,
      };
    default:
      return state;
  }
}
