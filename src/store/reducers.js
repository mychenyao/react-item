//定义redux规则
import { combineReducers } from 'redux'
import initialState from './state'

const user = (state = initialState.userData, action) => {
    const reduce = {
        'USER_DATA'() {
            console.log('kkkk');
            return {...state, userName: action.data}
        }
    }
    return reduce[action.type] ? reduce[action.type]() : state
}

export default combineReducers({
    user
})
