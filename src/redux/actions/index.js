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

// redux-thunk is a thunk middleware already enabled in our installation
// redux-thunk allows your redux installation to not only dispatch ACTIONS (js objects),
// but also FUNCTIONS
// it's important because these functions you can dispatch are ASYNC

// network calls (fetch()) can NOT be done in the reducers!
// reducers are pure function, they don't allow side-effects like a network call!

// we're going to perform our network calls in the action creators!
// we're going to write async functions here

export const addToCartActionWithThunk = (bookToAdd) => {
  return async (dispatch) => {
    // you're going to fetch data here, grab the result
    // and dispatch the data in order to reach the reducer
    // you're going to perform the async stuff here, one step before the reducer

    // thunk is going to allow the execution of this function and later on

    console.log("I'm dispatching this from a function!")
    // I can do whatever I want here...

    dispatch({
      type: ADD_TO_CART, // this is mandatory
      payload: bookToAdd, // this is not a mandatory property for every action
      // but our reducer needs this book in order to fill the cart correctly!
    })
  }
}
