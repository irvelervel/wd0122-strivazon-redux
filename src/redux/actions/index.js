// here we're going to put all our action dispatching logic!
// we're going to fill this index.js file with ACTION CREATORS!
// action creator are functions returning actions!

export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const SET_USERNAME = 'SET_USERNAME'

export const addToCartAction = (bookToAdd) => {
  return {
    type: ADD_TO_CART, // this is mandatory
    payload: bookToAdd, // this is not a mandatory property for every action
    // but our reducer needs this book in order to fill the cart correctly!
  }
}

export const removeFromCartAction = (indexToRemove) => {
  return {
    type: REMOVE_FROM_CART,
    payload: indexToRemove,
  }
}
// removeFromCartAction is called an ACTION CREATOR
// is a function returning an ACTION

export const setUsernameAction = (newName) => {
  return {
    type: SET_USERNAME,
    payload: newName,
  }
}
