/* eslint-disable no-cond-assign */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react';
import { Card, Button, Form, Input, message } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useRequest } from 'ahooks';
import { GetLogin, GetVerifycode } from '@/service';
import logo from '@/assets/logo.svg';
import cookie from 'react-cookies';
import loginImg from '../../static/images/login .png';

export default function Login() {
  const navigator = useNavigate();
  // 获取登录成功后cookie携带的token
  const getCookie = (name: string): string => {
    let arr;
    const reg = new RegExp(`(^| )${name}=([^;]*)(;|$)`);
    if ((arr = document.cookie.match(reg))) return unescape(arr[2]);
    return '';
  };
  // 登录接口
  const { run: RunLogin } = useRequest(GetLogin, {
    manual: true,
    onSuccess(res) {
      if (res.data.code === 200) {
        message.success('登录成功，稍后进入');
        // 存值的语法：
        cookie.save('token', getCookie('token'), { path: '/' });
        const t = setTimeout(() => {
          navigator('/layout');
          clearTimeout(t);
        }, 2000);
      } else {
        message.error(res.data.msg);
      }
    },
  });
  // 获取验证图片
  const [verifyCodeImg, setVerifyCodeImg] =
    useState<Awaited<ReturnType<typeof GetVerifycode>>['svg']>('');
  // 获取登录参数
  const [no, setNo] = useState('');

  const { run: runSetVer } = useRequest(GetVerifycode, {
    manual: true,
    onSuccess(res) {
      setNo(res.no);
      setVerifyCodeImg(res.svg);
    },
  });
  useEffect(() => {
    GetVerifycode().then((res) => {
      setVerifyCodeImg(res.svg);
      setNo(res.no);
    });
  }, []);

  const onFinish = (values: any) => {
    const { password, username, yzm } = values;

    RunLogin({
      adminName: username,
      adminPwd: password,
      no,
      verifyCode: yzm,
    });
  };
  return (
    <div className="w-full  flex justify-center">
      <div className="w-[800px]  flex flex-col">
        <div className="title my-[40px] w-full flex justify-center items-center">
          <div className="logo  w-[45px] leading-[40px] h-[40px] ">
            <img src={logo} className="w-full h-full" alt="" />
          </div>
          <div className="title  leading-[40px] h-[40px] ml-[12px] text-[26px] font-bold">
            一秒快送后台管理系统
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
                          message: '请输入账号!',
                        },
                      ]}
                    >
                      <Input
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        placeholder="管理员账号"
                      />
                    </Form.Item>
                    <Form.Item
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: '请输入账号!',
                        },
                      ]}
                    >
                      <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="管理员密码"
                      />
                    </Form.Item>
                    <Form.Item
                      name="yzm"
                      rules={[
                        {
                          required: true,
                          message: '请输入验证码!',
                        },
                      ]}
                    >
                      <div className="w-full h-full flex items-center">
                        <div className="inpCode w-[55%]">
                          <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="输入验证码"
                          />
                        </div>
                        <img
                          onClick={runSetVer}
                          src={`data:image/svg+xml;base64,${btoa(verifyCodeImg)}`}
                          alt=""
                          width="150"
                          height="50"
                        />
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
      <footer className="w-full h-auto fixed bottom-0 ">
        <div className="w-full text-center text-[12px]">
          Copyright © 2022 包小盒 All right reserved.
        </div>
        <div className="w-full text-center text-[14px] mt-[8px]">
          浙ICP备19025175号-4 aaa浙公网安备 33010602011191号
        </div>
      </footer>
    </div>
  );
}
