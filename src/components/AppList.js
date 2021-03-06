import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/webActions';

const AppListItem= (props) =>{

    return (
        <div>
            <div>{props.item.app_name}</div>
            {(props.item.logo_url)?<img src={props.item.logo_url} />: null }
        </div>
    )
}


class AppList extends React.Component {

    render() {

        let {appList} = this.props;

        return (
            <div>
                { appList &&  appList.map((listItem,i) =>{

                        return <AppListItem key={i} item={listItem}/>
                    })
                }
            </div>
        );
    }
}


const mapStateToProps = (state)=>{
    return {
        appList: state.webAppReducer.appList.apps
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
)(AppList);
