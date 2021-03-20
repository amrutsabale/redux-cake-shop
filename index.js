const redux = require("redux");

const initialState = {
  numOfCakes: 10,
};

// action
const BUY_CAKE = "BUY_CAKE";

//action creator
const buyCake = () => {
  return { type: BUY_CAKE, info: "First redux action" };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };

    default:
      return state;
  }
};

// store
const store = redux.createStore(reducer);
/*
for multiple reducers
const rootReducer=redux.combineReducers({
    cake:cakeReducer,
    icecream:icecreamReducer
})
const store=redux.createStore(rootReducer)
*/
console.log("Initial State ", store.getState());

// subscribed to store to get updates whenever state get updated
const unsubscribe = store.subscribe(() =>
  console.log("updated state", store.getState())
);

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

unsubscribe();
