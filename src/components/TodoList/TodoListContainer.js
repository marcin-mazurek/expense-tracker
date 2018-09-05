import { connect } from "react-redux";
import TodoList from "./TodoList";
import { addTask, toggleTask, changeNewItemText } from "../../model/actions";

const mapStateToProps = state => ({
  tasks: state.tasks,
  newItemText: state.newItemText
});

const mapDispatchToProps = dispatch => ({
  onToggle: id => dispatch(toggleTask(id)),
  onNewItemAdded: newItem => dispatch(addTask(newItem)),
  onNewItemTextChange: text => dispatch(changeNewItemText(text))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
