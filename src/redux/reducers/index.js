// the reducer function takes the current state and the action that just got dispatched
// in order to computer the NEW application state!
// it's also a PURE FUNCTION (same input --> same output)

// just like a component's state, even the redux store has to start from somewhere...
// so let's write the initial state for Redux!

const initialState = {
  // let's implement a cart feature
  cart: {
    // in the cart, let's remember an array of books
    content: [], // the value of content will be our array of books in the cart!
  },
}

// = initialState means the DEFAULT VALUE of the argument!
const mainReducer = (state = initialState, action) => {
    // the reducer function will be in charge of computing the 
    // new state of the application every time an action gets dispatched
    // our reducer needs to be told what to do when a particular action gets dispatched
    // so we have a bunch of possible actions, so let's write a switch case to manage them all!
    switch(action.type){
        // case1
        // case2
        default:
            // the default case is for an action.type that we didn't think of
            // maybe an edge case, maybe a bug, something unhandled...
            // what is the new state we're going to compute out of this edge case??
            return state
            // returning the state as it was in our default case makes the application unbreakable!
    }
}

export default mainReducer