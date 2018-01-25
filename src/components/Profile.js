import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getProfile} from '../actions/loginAction';

class Profile extends React.Component {

  componentWillMount(){

    let {getProfile} = this.props
    getProfile()
  }


    render() {

        let {profile} = this.props;
        return (

            <div>
                <div>{profile.first_name}</div>
                <div>{profile.last_name}</div>
                <div>{profile.middle_name}</div>
                <div>{profile.phone}</div>
            </div>
        );
    }
}


const mapStateToProps = (state)=>{
    return {
        profile: (state.userReducer.profile.user) ? state.userReducer.profile.user: []
    };
}

const mapDispatchToProps = (dispatch)=> {
    return bindActionCreators(
      {
        getProfile
      }, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);
