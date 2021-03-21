import React from 'react'
import { AnyAction, Dispatch } from 'redux'
import { connect } from 'react-redux'
import { CounterState } from '../store/reducers/count'
import { CombinedState } from '../store/reducers'
import { push } from 'connected-react-router'
import { LocationDescriptorObject, LocationState } from 'history'
import { ThunkDispatch } from 'redux-thunk'

let mapStateToProps = (state:CombinedState):CounterState => state.counter1
let mapDispatchToProps = (dispatch: ThunkDispatch<CombinedState, {}, AnyAction>) => {
  return {
    add () { dispatch({ type: 'ADD' }) },
    goto (location: LocationDescriptorObject<LocationState>) {
      dispatch(push(location))
    },
    // redux-thunk 派发的是函数
    asyncAdd() {
      dispatch((dispatch, getState) => {
        setTimeout(() => {
          dispatch({ type: 'ADD' })
        }, 1000)
      })
    }
  }
}

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

class Counter extends React.Component<Props> {
  render () {
    return (
      <div>
        <button onClick={() => this.props.add()}>加</button>
        <div>{this.props.count}</div>
        <button onClick={() => this.props.goto({pathname: '/detail'})}>跳转到detail</button>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
