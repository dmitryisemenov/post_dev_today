import { PostActions } from "./post.actions";
import { PostState } from "./post.state";


export const postReducer = (actions: PostActions, state: PostState): PostState => {
    switch (actions.type) {
        case 'get-list': {
            return {
                ...state,
                list: actions.list
            }
        }

        default: {
            return state;
        }
    }
}