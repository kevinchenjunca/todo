import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import * as actions from '../actions';
import ReactDOM from 'react-dom';

class TodoAdd extends Component {

 constructor(props) {
    super(props);
    this.state = {addingTodo:false};
 }


  onFormSubmit(values) {
    if (values.title.trim() == "") {
      return;
    }
    let todo = this.props.todo.map(function(todo){
      return {key: todo.key, title: todo.title}
    });
    let max = 0;
    this.props.todo.forEach(function(todo){
      max = Math.max(todo.key, max);
    })
    todo.push({key:max+1, title: values.title});
    this.props.addTodos(todo);
    this.forceUpdate();
    this.props.reset();      
  }

  showAddtodo() {
    this.setState({addingTodo:true});    
  }

  hideAddtodo() {
    this.setState({addingTodo:false});
    this.props.reset();    
  }

  renderField(field) {
    return (
      <div>
        <label>{field.label} </label>
        <input  {...field.input}  type="text" className="form-control"/>
      </div>
    );
  }

  renderButton() {
    if (!this.state.addingTodo) {
      return (
          <button type="button" onClick={this.showAddtodo.bind(this)} className="btn btn-primary">Add to-do</button>
      )
    } else {
      return (
          <button type="button" onClick={this.hideAddtodo.bind(this)} className="btn btn-primary">Cancel</button>
      )
    }
  }

  renderAddTODO() {
    const { handleSubmit } = this.props;
    if (this.state.addingTodo) {
      return(
          <div className="row">
              <div className="col-sm-offset-4 col-sm-4 todo">   
                    <div className="legend"><span>Add To-DO</span></div>  
                    <form onSubmit={handleSubmit(this.onFormSubmit.bind(this))} className="input-group">
                      <fieldset className="form-group">
                          <Field  name="title"  type="text" label="To-Do:" component={this.renderField.bind(this)}/>
                          <div className="mybtn">
                            <span className="input-group-btn">
                              <button type="reset" onClick={this.hideAddtodo.bind(this)} className="btn btn-secondary">Cancel</button>
                            </span>
                            <span className="input-group-btn">
                              <button type="submit" className="btn btn-primary">Create</button>
                            </span>   
                          </div>
                      </fieldset>                 
                    </form>
              </div>        
          </div> 
      )
    }
  }

  render() {
    return (

      <div>
        <div className="row">
            <div className="col-sm-4">     
                I want to work at DNN because I like DNN
                I am passionate about UI development especailly ReatJs
            </div>    
            <div className="col-sm-offset-4 col-sm-4">     
                  Welcome, {this.props.user?this.props.user.name:""}
            </div> 
        </div> 
        <div className="row">   
            <div className="col-sm-offset-8 col-sm-4">     
              {this.renderButton()}
            </div> 
        </div>
        {this.renderAddTODO()}        
      </div>  
      
    );
  }
}

function mapStateToProps(state) {
  return { user: state.tasks.auth, todo: state.tasks.todo };
}

export default reduxForm({
  form: 'form'
})(
  connect(mapStateToProps, actions)(TodoAdd)
);
