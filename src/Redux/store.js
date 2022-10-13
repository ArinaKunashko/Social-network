import sidebarReducer from "./sidebar-reducer"
import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"



let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'If you are the smartest person in the room, then you are not in the room where you should be.', likesCount: 12 },
        { id: 2, message: 'All we have to decide is what to do with the time that is given to us', likesCount: 11 },
        { id: 3, message: 'Life is like a box of chocolates, you never know what you’re gonna get', likesCount: 15 },
    
            ],
            newPostText: ' '
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Arina' },
                { id: 2, name: 'Roma' },
                { id: 3, name: 'Angelina' },
                { id: 4, name: 'Angelina' },
                { id: 5, name: 'Angelina' },
                { id: 6, name: 'Angelina' }
            ],
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'How are you?' },
                { id: 3, message: 'Kiss kiss kiss' },
                { id: 4, message: 'How are you?' },
                { id: 5, message: 'How are you?' },
                { id: 6, message: 'How are you?' },
            ], 
            newMessageBody: ''
        },
        
        sidebar: {
            friends: [
                { id: 1, name: 'Arina' },
                { id: 2, name: 'Roma' },
                { id: 3, name: 'Angelina' }
    
            ]
        }
    } ,
    _callSubscriber() {
        console.log('State')
    }, 

    getState() {
        return this._state
    },
    

    subscribe (observer) {
        this._callSubscriber = observer;
        },


    dispatch (action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state)


    }}


    window.store = store;
    export default store;
    
    






