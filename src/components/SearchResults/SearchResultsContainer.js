import { connect } from 'react-redux';
import SearchResults from './SearchResults';
import { getSearchCardsForColumn } from '../../redux/cardRedux';
// import { getSearchColumnsForLis } from '../../redux/columnsRedux';

const mapStateToProps = (state, props) => {
  const string = props.match.params.id;

  return {
    cards: getSearchCardsForColumn(state, string),
  };
};

export default connect(mapStateToProps, null)(SearchResults);
