import React, { Component } from 'react';
import { browserHistory} from 'react-router';
import { connect } from 'react-redux';

export default function(ComposedComponent) {
  class Authentication extends Component {

    componentWillMount() {
      if (!this.props.authenticated) {
        browserHistory.push('/');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        browserHistory.push('/');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }


  function mapStateToProps(state) {
    return { authenticated: state.tasks.authenticated};  
  }

  return connect(mapStateToProps)(Authentication);
}
