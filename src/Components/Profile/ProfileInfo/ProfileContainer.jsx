import React, { Component } from 'react'
import Profile from '../Profile'
import { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile } from '../../../Redux/profile-reducer'
import { connect } from 'react-redux'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { withAuthNavigate } from '../../../hoc/withAuthNavigare'
import { compose } from 'redux'

class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.router.params.userId
        if (!userId) {
            userId = this.props.authorizedUserIdUserId
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps) {
        if (this.props.router.params.userId != prevProps.router.params.userId) {
            this.refreshProfile()
        }
    }
    render() {
        return (

            <Profile {...this.props}
                isOwner={!this.props.router.params.userId}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}
                savePhoto={this.props.savePhoto}
            />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserIdUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
})

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation()
        let navigate = useNavigate()
        let params = useParams()
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        )
    }
    return ComponentWithRouterProp
}

export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile }),
    withRouter,
    withAuthNavigate
)(ProfileContainer)
