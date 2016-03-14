import React, { Component, PropTypes } from 'react';

class TagList extends Component {
  render() {
    return (
      <div className="tag-list">
        <h4>{this.props.heading}</h4>
        <div className="tags-wrapper">
          {this.renderTags()}
        </div>
      </div>
    );
  }

  renderTags() {
    return this.props.tags.map(tag => {
      return <span key={tag.id} className="tag">{tag.name}</span>
    });
  }
}

TagList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired,

  heading: PropTypes.string.isRequired
};

export default TagList;
