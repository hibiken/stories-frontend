import { combineReducers } from 'redux';
import posts from './posts';
import followingTags from './followingTags';
import featuredTags from './featuredTags';

const storiesApp = combineReducers({
  posts,
  featuredTags,
  followingTags
});

export default storiesApp;
