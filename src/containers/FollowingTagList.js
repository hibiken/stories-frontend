import { connect } from 'react-redux';
import TagList from '../components/TagList';

const mapStateToProps = (state) => {
  return {
    tags: state.followingTags
  };
}

export default connect(mapStateToProps)(TagList);
