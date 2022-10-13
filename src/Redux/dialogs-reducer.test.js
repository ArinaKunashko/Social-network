import dialogsReducer, {sendMessageCreator} from "./dialogs-reducer";


let state = {
    
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

test('length of dialogs should be incremented ', () => {
    let action = sendMessageCreator("Hello World!")
   let newState = dialogsReducer(state, action)
    expect(newState.messages.length).toBe(7)

  });
  
test('message of message should be correct ', () => {
    let action = sendMessageCreator("Hello World!")
   let newState = dialogsReducer(state, action)
    expect(newState.messages[6].message).toBe("Hello World!")

  });