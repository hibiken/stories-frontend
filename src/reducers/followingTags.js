const followingTags = (state = [], action) => {
  switch (action.type) {
    case 'FOLLOW_TAG':
      return [ ... state, { id: action.id, name: action.name } ];
    case 'UNFOLLOW_TAG':
      return state.filter(tag => tag.id !== action.id);
    default:
      return state;
  }
}

export default followingTags;
