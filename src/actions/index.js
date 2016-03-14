import axios from 'axios';

const ROOT_URL = 'http://localhost:3000/api';

export const fetchFeaturedPosts = () => {
  const request = axios.get(`${ROOT_URL}/posts.json`);

  return {
    type: 'FETCH_FEATURED_POSTS',
    payload: request
  }
}

export const fetchFeaturedTags = () => {
  const request = axios.get(`${ROOT_URL}/tags.json`);

  return {
    type: 'FETCH_FEATURED_TAGS',
    payload: request
  }
}

export const followTag = (id, name) => {
  return {
    type: 'FOLLOW_TAG',
    id: id,
    name: name
  }
}

export const unfollowTag = (id) => {
  return {
    type: 'UNFOLLOW_TAG',
    id: id
  }
}
