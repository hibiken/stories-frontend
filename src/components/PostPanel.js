import React, { Component, PropTypes } from 'react';

class PostPanel extends Component {
  render() {
    return (
      <div className="post-panel">
        <img src={`http://localhost:3000${this.props.avatar_image_url}`} />
        <p>By {this.props.username}</p>
        <small>{this.props.published_at}</small>
        <img src={`http://localhost:3000${this.props.picture_url}`} />
        <h3>{this.props.title}</h3>
        <p dangerouslySetInnerHTML={this.postBody()} />
      </div>
    );
  }

  postBody() {
    return { __html: this.props.body }
  }
}

PostPanel.propTypes = {
  title: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
}

export default PostPanel;
