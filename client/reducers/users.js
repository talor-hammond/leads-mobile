import { GET_USER } from '../actions/users/'

export default function users(state = [], action) {
    switch (action.type) {
        case GET_USER:
            return [action.user] // 'state'
        default:
            return state
    }
}
