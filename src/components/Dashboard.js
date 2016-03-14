import React from 'react';
import { connect } from 'react-redux';

import PostPanelList from '../containers/PostPanelList';
import FeaturedTagList from '../containers/FeaturedTagList';
import FollowingTagList from '../containers/FollowingTagList';
import { fetchFeaturedTags } from '../actions';

class Dashboard extends React.Component {
  componentWillMount() {
    this.props.fetchFeaturedTags();
  }

  render() {
    return (
      <div>
        <div className="col-md-6 col-md-offset-1">
          <PostPanelList />
        </div>

        <div className="col-md-4">
          <FeaturedTagList heading="Featured Tags" />

          <FollowingTagList heading="Tags You Follow" />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFeaturedTags: () => {
      dispatch(fetchFeaturedTags());
    }
  }
}

export default connect(null, mapDispatchToProps)(Dashboard);
