import { combineReducers, ReducersMapObject, AnyAction, Reducer } from 'redux'
import counter, { CounterState} from './count'
import { connectRouter, RouterState } from 'connected-react-router'
import history from '../../history'

//接口其实就是定义合并后的状态
export interface CombinedState {
  counter1: CounterState,
  router: RouterState
}

let reducers:ReducersMapObject<CombinedState, AnyAction> = {
  counter1: counter,
  router: connectRouter(history)
}

let reducer:Reducer<CombinedState, AnyAction> = combineReducers(reducers)
export default reducer

