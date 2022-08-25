import { combineReducers } from 'redux';
import mentorReducer from './mentorReducer';
import reservationReducer from './reservationReducer';

const reducers = combineReducers({
  mentorReducer,
  reservationReducer,
});

export default reducers;
