import { connect } from 'react-redux';
import TagList from '../components/TagList';

const mapStateToProps = (state) => {
  return {
    tags: state.featuredTags
  };
}

export default connect(mapStateToProps)(TagList);
