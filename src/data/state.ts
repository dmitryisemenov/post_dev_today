import { combineReducers } from "./combineReducers"
import { postReducer } from "./post/post.reducer"

export const initialState: AppState = {
    posts: {
        list: []
    }
}

export const reducers = combineReducers({
    posts: postReducer
})

export type AppState = ReturnType<typeof reducers>