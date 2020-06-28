import {applyMiddleware, combineReducers, createStore} from "redux";
import {lesson1Reducer} from "./reducers/lesson1Reducer";
import thunk from "redux-thunk";
let reducers = combineReducers({
    lesson1Page: lesson1Reducer,

});
const store = createStore(reducers, applyMiddleware(thunk));
export default store