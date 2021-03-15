import { combineReducers, ReducersMapObject, AnyAction, Reducer } from 'redux'
import counter, { CounterState} from './count'
//接口其实就是定义合并后的状态
export interface CombinedState {
  counter1: CounterState
}

let reducers:ReducersMapObject<CombinedState, AnyAction> = {
  counter1: counter
}

let reducer:Reducer<CombinedState, AnyAction> = combineReducers(reducers)
export default reducer

