const featuredTags = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_FEATURED_TAGS':
      return action.payload.data;
    default:
      return state;
  }
}

export default featuredTags;
