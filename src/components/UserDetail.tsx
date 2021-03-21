import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
interface Params {
  id: string
}
type Props = RouteComponentProps<Params>
function UserDetail (props: Props) {
  return (
    <div>
      <h2>UserDetail</h2>
      ID:
      {props.match.params.id}
    </div>
  )
}

export default UserDetail
