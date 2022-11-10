import React, { Suspense } from 'react'
import './App.css'
import HeaderContainer from './Components/Header/HeaderContainer'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Component } from 'react'
import { connect } from 'react-redux'
import { initializeApp } from './Redux/app-reducer'
import Preloader from './Components/common/preloader/preloader'
import store from './Redux/redux-store'
import { Provider } from 'react-redux'

const ProfileContainer = React.lazy(() => import('./Components/Profile/ProfileInfo/ProfileContainer'))
const DialogsContainer = React.lazy(() => import('./Components/Dialogs/DialogsContainer'))
const LoginPage = React.lazy(() => import('./Components/Login/Login'))
const UsersContainer = React.lazy(() => import('./Components/Users/UsersContainer'))

class App extends Component {
  catchAllUnhandledError = (reason, promise) => {
    alert('Some error occured')
    // console.error(promiseRejectionEvent)
  }
  componentDidMount() {
    this.props.initializeApp()
    window.addEventListener("unhandledrejection", this.catchAllUnhandledError)
    // handle error here, for example log   
  }
  componentWillUnmount() {
    window.removeEventListener("unhandledrejection", this.catchAllUnhandledError)
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (

      <BrowserRouter>
        <div className='app-wrapper'>
          <HeaderContainer />
          <Navbar />
          <div className='app-wrapper-content'>
            <Suspense fallback={<Preloader />}>
              <Routes>
                <Route exact path='/dialogs' element={<DialogsContainer />} />
                <Route path='/profile' element={<ProfileContainer />} />
                <Route path='/Social-network' element={<Navigate to='/profile' />} />
                <Route path='/profile/:userId' element={<ProfileContainer />} />
                <Route path='/users' element={<UsersContainer />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='*' element={<div> 404 NOT FOUND </div>} />
              </Routes>
            </Suspense>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

let AppContainer = connect(mapStateToProps, { initializeApp })(App)

const AppJs = (props) => {
  return <React.StrictMode>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </React.StrictMode>
}

export default AppJs
