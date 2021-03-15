import { AnyAction } from "redux";

export interface CounterState {
  count: number
}

const initialState: CounterState = {
  count: 0
}

export default function reducer(state: CounterState = initialState, action: AnyAction): CounterState {
  console.log(action)
  switch (action.type) {
    case 'ADD':
      return { count: state.count + 1 }
    default:
      return state
  }
}
