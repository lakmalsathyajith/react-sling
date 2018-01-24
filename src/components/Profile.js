import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/webActions';

class Profile extends React.Component {

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
        profile: state.webAppReducer.profile.data.user
    };
}

const mapDispatchToProps = (dispatch)=> {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);
