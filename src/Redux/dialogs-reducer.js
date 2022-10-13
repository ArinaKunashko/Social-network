const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    
        dialogs: [
            { id: 1, name: 'Arina' },
            { id: 2, name: 'Roma' },
            { id: 3, name: 'Angelina' },
            { id: 4, name: 'Anastasia' },
            { id: 5, name: 'Vitaly' },
            { id: 6, name: 'Nina' }
        ],
        messages: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'How are you?' },
            { id: 3, message: 'How doing' },
            { id: 4, message: 'How things?' },
            { id: 5, message: 'Anythings new?' },
            { id: 6, message: 'Any news?' },
        ], 
        
    }


const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case UPDATE_NEW_MESSAGE_BODY: 
        return  {
            ...state,
            newMessageBody: action.body
        }
            
        
        case SEND_MESSAGE: 
        let body = action.newMessageBody
       return {
            ...state,
        messages: [...state.messages, { id: 7, message: body }]
        }
          
        default:
            return state;
    }
}
export const sendMessageCreator = (newMessageBody) => {
    return {
        type: SEND_MESSAGE, newMessageBody
}
}

export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY , 
        body: body
    }
}
export default dialogsReducer;