import React, { useState } from 'react';
import { Button, Form, Input } from 'antd'
import { RouteComponentProps } from 'react-router-dom';
import { User, UserAddResponse } from '../typings/api';
import request, { AxiosResponse } from '../api/request'

type Props = RouteComponentProps
function UserAdd (props: Props) {
  let [user, setUser] = useState<User>({} as User)
  const handleSubmit = (event: React.FormEvent) => {
    request.post<UserAddResponse>('/api/users', user).then((response: AxiosResponse<UserAddResponse>) => {
      let { data, code } = response.data
      if (code === 0) {
        props.history.push('/user/list')
      } else {
        console.log('添加失败')
      }
    })
  }
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      username: event.target.value
    })
  }
  return (
    <Form>
      <Form.Item>
        <Input
          placeholder="用户名"
          style={{width: '120px'}}
          value={user.username}
          onChange={handleNameChange}>
        </Input>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit"></Button>
      </Form.Item>
    </Form>
  )
}

export default UserAdd;
