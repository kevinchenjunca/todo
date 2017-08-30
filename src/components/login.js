import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Login extends Component {

  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    //this.props.cleanMessage();  
  }

  handleFormSubmit(values) {   
    this.props.loginUser(values.username);
  }

  renderAlert() {   
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      )
    }
  }

  renderField(field) {
    return (
      <fieldset className="form-group">
        <label>{field.label} </label>
        <input {...field.input} type={field.type} className="form-control"/>
      </fieldset>
    )
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="container">
        <h1>LOGSIN TO VIEW OR ADD TO-DOS</h1>
        <div className="row">
            <div className="col-sm-offset-3 col-sm-3">     
                <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                  <Field name="username" type="text" label="Username" component={this.renderField}/>
                  {this.renderAlert()}
                </form>
            </div>        
        </div> 
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error};
}

export default reduxForm({
  form: 'LoginForm'
})(
  connect(mapStateToProps, actions)(Login)
);
