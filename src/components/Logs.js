import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/webActions';

const LogEntry = (props) =>{

    return (
        <div>
            <ul>
                <li>{props.item.ip_address}</li>
                <li>{props.item.location}</li>
                <li>{props.item.date}</li>
            </ul>
        </div>
    )
}


class Logs extends React.Component {

    render() {

        let {logs} = this.props;

        return (
            <div>
                { logs &&  logs.map((listItem,i) =>{

                    return <LogEntry key={i} item={listItem}/>
                })
                }
            </div>
        );
    }
}


const mapStateToProps = (state)=>{
    return {
        logs: state.webAppReducer.logs.logs
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
)(Logs);
