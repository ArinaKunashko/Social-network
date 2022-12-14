import React, { Suspense } from 'react'
import './App.css'
import HeaderContainer from './Components/Header/HeaderContainer'
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Component } from 'react'
import { connect } from 'react-redux'
import { initializeApp } from './Redux/app-reducer'
import Preloader from './Components/common/preloader/preloader'
import store from './Redux/redux-store'
import { Provider } from 'react-redux'
import { ThemeProvider, createTheme } from '@mui/material/styles'

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
    // if (!this.props.initialized) {
    //   return <Preloader />
    // }

    const theme = createTheme({
      palette: {
        primary: {
          main: '#252424',
        },
        secondary: {
          main: '#004D40',
        },
        orange: {
          main: '#FDD835',
        },
      },
    })

    return (

      <ThemeProvider theme={theme}>
        <HashRouter>
          <div className='app-wrapper'>
            <HeaderContainer />
            <div className='app-wrapper-content'>
              <Suspense fallback={<Preloader />}>
                <Routes>
                  <Route path='/' element={<Navigate to='/profile' />} />
                  <Route exact path='/dialogs' element={<DialogsContainer />} />
                  <Route path='/profile' element={<ProfileContainer />} />
                  <Route path='/profile/:userId' element={<ProfileContainer />} />
                  <Route path='/users' element={<UsersContainer />} />
                  <Route path='/login' element={<LoginPage />} />
                  {/* <Route path='*' element={<div> 404 NOT FOUND </div>} /> */}
                </Routes>
              </Suspense>
            </div>
          </div>
        </HashRouter>
      </ThemeProvider>
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
