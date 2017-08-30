import React, { Component } from 'react';
import TodoAdd from './todos_add';
import TodoList from './todos_list';
import { connect } from 'react-redux';

class Todos extends Component {
  componentWillMount() {
    if (!this.props.authenticated) {
      return;
    }
  }

  render() {
    return (
      <div >
        <TodoAdd />
        <TodoList />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { authenticated: state.tasks.authenticated}
}

export default connect(mapStateToProps)(Todos);
