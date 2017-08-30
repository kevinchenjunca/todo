import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class TodoList extends Component {


  componentWillMount() {
    this.props.retrieveTodos(this.props.user.id);
  }

  renderTodos(todo) {
    return (
      <div key={todo.key}>
        <input key={todo.key} type="checkbox"/>
        {todo.title}
      </div>
    )
  }

  renderCompleted(todo) {
    return (
      <div key={todo.key}>
        <input type="checkbox" readOnly checked/>
        {todo.title}
      </div>
    )
  }  

  render() {
    return (
      <div className="container">
          <div className="row">
              <div className="col-xs-12 col-sm-6">
                  {this.props.todo?this.props.todo.map(this.renderTodos):""}
              </div>
              <div className="col-xs-12 col-sm-6">
                  {this.props.completed?this.props.completed.map(this.renderCompleted):""}              
              </div>              
          </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { todo: state.tasks.todo, completed: state.tasks.completed, user: state.tasks.auth };
}

export default connect(mapStateToProps, actions)(TodoList);
