import {connect} from 'react-redux';
import Column from './Column';

const mapStateToProps = (state, props) => ({
  cards: getColumnsForColumn(state, props.id),

});



export const getColumnsForColumn = ({cards}, listId) => cards.filter(card => card.listId == listId);
export default connect(mapStateToProps)(Column);
