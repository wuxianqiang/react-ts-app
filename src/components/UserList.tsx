import { Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { RouteComponentProps, withRouter, Link } from 'react-router-dom'
import { User, UserListResponse } from '../typings/api'
import request, {AxiosResponse} from '../api/request'


const columns = [
  {
    title: '用户名',
    dataIndex: 'username',
    key: 'username'
  }
]

function UserList () {
  let [users, setUsers] = useState<Array<User>>([{_id: '1', username: '李四'}])
  // 执行一次调用接口
  // useEffect(() => {
  //   (async function getList() {
  //     let response = await request.get<UserListResponse, AxiosResponse<UserListResponse>>('/api/users')
  //     let { data, code } = response.data
  //     if (code === 0) {
  //       setUsers(data)
  //     } else {
  //       console.log('接口失败')
  //     }
  //   })()
  // }, [])
  return (
    // <Table columns={columns} dataSource={users} rowKey={(row: User) => row._id}></Table>
    <ul>
      {
        users.map((user: User) => (
          <li key={user._id}>
            <Link to={`/user/detail/${user._id}`}>
              {user.username}
            </Link>
          </li>
        ))
      }
    </ul>
  )
}
export default UserList
