import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import sidebarReducer from './sidebar-reducer'
import usersReducer from './users-reducer'
import authReducer from './auth-reducer'
import thunkMiddleware from 'redux-thunk'
import {Form}  from 'formik'
import appReducer from './app-reducer'

let reducers = combineReducers ({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    FormData: Form,
    app: appReducer,
})

let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)))

window.store = store
 
export default store
