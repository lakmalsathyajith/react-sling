import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/webActions';
//import FuelSavingsForm from '../FuelSavingsForm';


const AppListItem= (props) =>{

    return <div></div>
}


class AppList extends React.Component {


    componentWillMount(){
        console.log('=================',this.props)
    }


    render() {

        console.log('======++===========',this.props)

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

// FuelSavingsPage.propTypes = {
//     actions: PropTypes.object.isRequired,
//     fuelSavings: PropTypes.object.isRequired
// };

function mapStateToProps(state) {
    return {
        appList: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AppList);
