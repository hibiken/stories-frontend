import React from 'react';
import { connect } from 'react-redux';

import PostPanel from '../components/PostPanel';
import { fetchFeaturedPosts } from '../actions';

class PostPanelList extends React.Component {
  componentWillMount() {
    console.log('this would be a good time to go fetch posts');
    this.props.fetchFeaturedPosts();
  }

  render() {
    return (
      <div className="post-panel-list">
        {this.renderPostPanels()}
      </div>
    );
  }

  renderPostPanels() {
    return this.props.posts.map(post => {
      return <PostPanel key={post.id} {...post} />
    });
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFeaturedPosts: () => {
      dispatch(fetchFeaturedPosts());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPanelList);
