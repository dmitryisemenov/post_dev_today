import { ActionType } from "src/util/types";
import axios from 'axios';

export const initial = () => {
    return true;
}

export const getListOfPosts = () => (dispatch: React.Dispatch<any>) => {
    axios.get('https://simple-blog-api.crew.red/posts')
        .then(res => {
            const data = res
            console.log(data)
            dispatch({
                type: 'get-list',
                list: data.data
            })
            if (data.status === 200) {
                dispatch({
                    type: 'get-list',
                    list: data.data
                })
            }
        })
        .catch(err => console.error(err))
}

export type PostActions =
    | ActionType<typeof initial>
    | ActionType<typeof getListOfPosts>