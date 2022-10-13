import React, { Suspense, lazy, useEffect } from 'react';
import './App.css';
import HeaderContainer from './Components/Header/HeaderContainer';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route, Routes, HashRouter } from 'react-router-dom';
import state from './Redux/store';
import { Component } from 'react';
import { connect } from "react-redux";
import { initializeApp } from './Redux/app-reducer'
import Preloader from './Components/common/preloader/preloader';
import store from './Redux/redux-store';
import { Provider } from 'react-redux';
const ProfileContainer = React.lazy(() => import('./Components/Profile/ProfileInfo/ProfileContainer'));
const DialogsContainer = React.lazy(() => import('./Components/Dialogs/DialogsContainer'));
const LoginPage = React.lazy(() => import('./Components/Login/Login'));
const Friends = React.lazy(() => import('./Components/Friends/Friends'));
const UsersContainer = React.lazy(() => import('./Components/Users/UsersContainer'));
const Settings = React.lazy(() => import('./Components/Settings/Settings'));
const Music = React.lazy(() => import('./Components/Music/Music'));
const News = React.lazy(() => import('./Components/News/News'));



class App extends Component {
  componentDidMount() {
    this.props.initializeApp()
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
                <Route path='/profile/:userId' element={<ProfileContainer />} />
                <Route path='/news' element={<News />} />
                <Route path='/music' element={<Music />} />
                <Route path='/settings' element={<Settings />} />
                <Route path='/friends' element={<Friends state={state} />} />
                <Route path='/users' element={<UsersContainer />} />
                <Route path='/login' element={<LoginPage />} />
              </Routes>
            </Suspense>
          </div>
        </div>

      </BrowserRouter>

    );

  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})


let AppContainer = connect(mapStateToProps, { initializeApp })(App);

const AppJs = (props) => {
  return <React.StrictMode>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </React.StrictMode>
}

export default AppJs;