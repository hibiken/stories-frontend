import { combineReducers } from 'redux';
import followingTags from './followingTags';
import featuredTags from './featuredTags';

const storiesApp = combineReducers({
  featuredTags,
  followingTags
});

export default storiesApp;
