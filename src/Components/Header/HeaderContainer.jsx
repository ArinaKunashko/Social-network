import React from 'react'
import Header from './Header'
import { logout } from '../../Redux/auth-reducer'
import { connect } from 'react-redux'


class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props}  />
    }
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    profilePhoto: state.profilePage.profile ? state.profilePage.profile.photos.small : null,
})

export default connect(mapStateToProps, { logout })(HeaderContainer)
