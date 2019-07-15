import { connect } from 'react-redux';
import { addTodo } from '../actions';
import NewTodo from '../components/NewTodo';

const mapStateToProps = (todo) => {
  return {
    ...todo
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddTodo: todo => {
      dispatch(addTodo(todo));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewTodo);