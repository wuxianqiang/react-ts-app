import { Table } from 'antd';
import React, { useState } from 'react';
import { RouteComponentProps, withRouter, Link } from 'react-router-dom'
import { User } from '../typings/api'

const columns = [
  {
    title: '用户名',
    dataIndex: 'username',
    key: 'username'
  }
]
type Props = RouteComponentProps

function UserList () {
  let [users, setUsers] = useState<Array<User>>([])
  return (
    <Table columns={columns} dataSource={users} rowKey={(row: User) => row._id}></Table>
  )
}
export default UserList
