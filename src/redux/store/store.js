import {applyMiddleware, combineReducers, createStore} from "redux";
import {MainReducer} from "../reducer/reducer";
import {BasketReducer} from "../reducer/BasketReduser";
import {FavoriteReducer} from "../reducer/FavoriteReduser";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";


export const store = createStore(combineReducers({
    main : MainReducer,
    basket: BasketReducer,
    favorites: FavoriteReducer,
}),composeWithDevTools(applyMiddleware(thunk)))

