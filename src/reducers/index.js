import { combineReducers } from 'redux';
import followingTags from './followingTags';

const storiesApp = combineReducers({
  followingTags
});

export default storiesApp;
