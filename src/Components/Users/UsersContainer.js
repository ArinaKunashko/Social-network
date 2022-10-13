import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage, toggleFollowingProgress, requestUsers } from '../../Redux/users-reducer';
import Users from './Users';
import Preloader from '../common/preloader/preloader';
import { withAuthNavigate } from '../../hoc/withAuthNavigare';
import { compose } from 'redux';
import { getPageSize, getTotalUsersCount, getCurrentPage, getIsFatching, getFollowingInProgress, getUsers } from '../../Redux/users-selectors'



class UsersContainer extends React.Component {
    componentDidMount() {
        const { currentPage, pageSize } = this.props
        this.props.getUsers(currentPage, pageSize)
    }

    onPageChanged = (pageNumber) => {
        const { pageSize } = this.props
        this.props.getUsers(pageNumber, pageSize)
    }

    render() {

        return <>
            {this.props.isFatching ? <Preloader /> : null}
            <Users totalItemsCount={this.props.totalItemsCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalItemsCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFatching: getIsFatching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}


export default compose(
    withAuthNavigate,
    connect(mapStateToProps, { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers: requestUsers })
)(UsersContainer)

