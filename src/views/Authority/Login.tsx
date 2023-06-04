import React from 'react';
import { Card, Button, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import store from 'storejs';
import { useNavigate } from 'react-router-dom';
import { useRequest } from 'ahooks';
import { getTopPlaylist } from '@/service';
import loginImg from '../../static/images/login .png';

export default function Login() {
  const { data: TopPlaylist } = useRequest(() => getTopPlaylist({ cat: '全部' }));
  const navigator = useNavigate();
  const onFinish = (values: any) => {
    store.set('token', values);
    navigator('/layout');
    // eslint-disable-next-line no-console
    console.log('Received values of form: ', values);
  };
  return (
    <div className="w-full  flex justify-center">
      <ul>
        {TopPlaylist?.map((item) => (
          <li key={item.id}>{item.coverImgId}</li>
        ))}
      </ul>
      <div className="w-[800px]  flex flex-col">
        <div className="title my-[40px] w-full flex justify-center items-center">
          <div className="logo  w-[45px] leading-[40px] h-[40px] bg-[#ff3456]">logo</div>
          <div className="title  leading-[40px] h-[40px] ml-[12px] text-[26px] font-bold">
            卢文斌一秒快送后台管理系统554657657657
          </div>
        </div>
        <div className="form_warp">
          <Card style={{ width: 800, height: 500 }}>
            <div className="flex">
              <div className="w-1/2 p-[40px]">
                <img className="w-[360px] h-[360px]" src={loginImg} alt="" />
              </div>
              <div className="w-1/2 content p-[40px]">
                <div className="text-center text-[20px] font-normal w-full ">账号密码登录</div>
                <div className="mt-[40px]">
                  <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                  >
                    <Form.Item
                      name="username"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your Username!',
                        },
                      ]}
                    >
                      <Input
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        placeholder="Username"
                      />
                    </Form.Item>
                    <Form.Item
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your Password!',
                        },
                      ]}
                    >
                      <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                      />
                    </Form.Item>
                    <Form.Item
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your Password!',
                        },
                      ]}
                    >
                      <div className="w-full h-full flex items-center">
                        <div className="inpCode w-[55%]">
                          <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                          />
                        </div>

                        <div className="h-full w-[45%]">4558</div>
                      </div>
                    </Form.Item>

                    <Form.Item>
                      <Button type="primary" htmlType="submit" className="login-form-button w-full">
                        登录
                      </Button>
                    </Form.Item>
                  </Form>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
