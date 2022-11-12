import profileReducer, {addPostActionCreator, deletePost} from './profile-reducer'

let state = {
    posts: [
        { id: 1, message: 'If you are the smartest person in the room, then you are not in the room where you should be.', likesCount: 12 },
        { id: 2, message: 'All we have to decide is what to do with the time that is given to us', likesCount: 11 },
        { id: 3, message: 'Life is like a box of chocolates, you never know what you’re gonna get', likesCount: 15 },
    ], 
}

test('length of posts should be incremented ', () => {
    let action = addPostActionCreator("Hello")
   let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(4)
  })
  
test('message of posts should be correct ', () => {
    let action = addPostActionCreator("Hello")
   let newState = profileReducer(state, action)
    expect(newState.posts[3].message).toBe("Hello")
  })

  test('length of posts should be decrement ', () => {
    let action = deletePost(1)
   let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(2)
  })

  test('after deleting length of posts should not be decrement if id is incorrect', () => {
    let action = deletePost(1000)
   let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(3)
  })