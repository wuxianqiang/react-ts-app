import { Table, Button } from 'antd';
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
  let limit = 5
  let [users, setUsers] = useState<Array<User>>([{_id: '1', username: '李四'}])
  let [offset, setOffset] = useState(0)
  // 执行一次调用接口
  // useEffect(() => {
  //   (async function getList() {
  //     let response = await request.get<UserListResponse, AxiosResponse<UserListResponse>>(`/api/users?limit=${limit}&offset=${offset}`)
  //     let { data, code } = response.data
  //     if (code === 0) {
  //       setUsers(data)
  //     } else {
  //       console.log('接口失败')
  //     }
  //   })()
  // }, [offset])
  const handleClick = () => {
    setOffset(0)
  }
  return (
    // <Table columns={columns} dataSource={users} rowKey={(row: User) => row._id}></Table>
    <>
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
    <Button onClick={handleClick}>刷新</Button>
    </>
  )
}
export default UserList
