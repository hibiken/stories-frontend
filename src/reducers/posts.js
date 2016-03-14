const posts = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_FEATURED_POSTS':
      return action.payload.data;
    default:
      return state;
  }
}

export default posts;
