import React from 'react'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { CounterState } from '../store/reducers/count'
import { CombinedState } from '../store/reducers'

let mapStateToProps = (state:CombinedState):CounterState => state.counter1
let mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    add () { dispatch({ type: 'ADD' }) }
  }
}

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

class Counter extends React.Component<Props> {
  render () {
    return (
      <div>
        <button onClick={() => this.props.add()}>加</button>
        <div>{this.props.count}</div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
