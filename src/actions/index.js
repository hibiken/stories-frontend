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
