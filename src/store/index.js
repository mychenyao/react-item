//生成store容器
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import Reducers from './reducers'

export default function configureStore() {
    //applyMiddleware(thunkMiddleware) 允许action函数里面可以执行异步操作
    return createStore(Reducers, applyMiddleware(thunkMiddleware))

}
