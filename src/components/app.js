import React, { Component } from 'react';
export default class App extends Component {
  render() {
    return (
      <div>
  	      <div className="container">        
  	        {this.props.children}
  	      </div>       
	  </div>
    );
  }
}
