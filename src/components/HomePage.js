import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import {bindActionCreators} from "redux";
import {authenticate} from "../actions/loginAction";
import {connect} from "react-redux";

class HomePage extends  Component{

   componentWillMount(){

       this.props.authenticate()
   }


  render(){
  return (
    <div>
      <h1>React Slingshot</h1>

      <h2>Get Started</h2>
      <ol>
        <li>Review the <Link to="/fuel-savings">demo app</Link></li>
        <li>Remove the demo and start coding: npm run remove-demo</li>
      </ol>
    </div>
  );
  }
}

const mapStateToProps = (state)=>{
  return {

  };
}

const mapDispatchToProps =(dispatch) => {

  return bindActionCreators({
    authenticate
  }, dispatch);

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
