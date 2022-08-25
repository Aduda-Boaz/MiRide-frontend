/* eslint-disable import/extensions */
import { configureStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './reducers/reducer';
import { fetchMentors } from './actions/mentorActions';

export const store = configureStore({
  reducer: reducers,
  middleware: applyMiddleware(thunk, logger),
});
store.dispatch(fetchMentors());

export default store;
