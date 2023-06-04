import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
// import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';

import Screening from '@/views/Screening';
import User from '@/views/User';
import Config from '@/views/Config';
import Coupon from '@/views/Coupon';
import Rider from '@/views/Rider';
import Order from '@/views/Order';
import City from '@/views/City';


// const Screening = React.lazy(() => import('@/views/Screening'));
// const User = React.lazy(() => import('@/views/User'));
// const Config = React.lazy(() => import('@/views/Config'));
// const Coupon = React.lazy(() => import('@/views/Coupon'));
// const Rider = React.lazy(() => import('@/views/Rider'));
// const Order = React.lazy(() => import('@/views/Order'));
// const City = React.lazy(() => import('@/views/City'));

const { Header, Content, Sider } = Layout;
const list = [
  {
    name: '数据总览',
    icon: '',
    key: '/',
  },
  {
    name: '用户管理',
    icon: '',
    key: '/user/agent/',
    children: [
      { name: '代理列表', key: '/user/agent/agents' },
      { name: '管理员列表', key: '/user/admins' },
      { name: '用户列表', key: '/user/users' },
    ],
  },
  {
    name: '订单管理',
    icon: '',
    key: '/order/',
    children: [
      { name: '订单列表', key: '/order/orders' },
      { name: '资金走向列表', key: '/order/capitaltrend' },
      { name: '取消订单配置', key: '/order/cancelset' },
      { name: '小费选项配置', key: '/order/feeset' },
    ],
  },
  {
    name: '骑手管理',
    icon: '',
    key: '/rider',
    children: [
      { name: '骑手列表', key: '/rider/riders' },
      { name: '骑手审核列表', key: '/rider/registers' },
    ],
  },
  {
    name: '城市管理',
    icon: '',
    key: '/city',
    children: [{ name: '运营城市列表', key: '/city/citys' }],
  },
  {
    name: '运营管理',
    icon: '',
    key: '/city/',
    children: [
      { name: '计价规则', key: '/city/valuation/valuations' },
      { name: '重量标签', key: '/city/weight/weight' },
      { name: '物品标签组', key: '/city/tag/tag' },
    ],
  },
  {
    name: '优惠券管理',
    icon: '',
    key: '/coupon/',
    children: [
      { name: '优惠券列表', key: '/coupon/coupons' },
      { name: '优惠券设置', key: '/coupon/setting' },
    ],
  },
  {
    name: '提现管理',
    icon: '',
    key: '/rider/',
    children: [
      { name: '提现列表', key: '/rider/cash' },
      { name: '提现设置', key: '/config/cash' },
    ],
  },
  {
    name: '系统设置',
    icon: '',
    key: '/config/',
    children: [
      { name: '小程序设置', key: '/config/app' },
      { name: '分享设置', key: '/config/share' },
      { name: '积分设置', key: '/config/integral' },
      { name: '订阅消息设置', key: '/config/wxsubscribe' },
      { name: '用户指南', key: '/config/user' },
      { name: '骑手指南', key: '/config/rider' },
      { name: '骑手协议', key: '/config/agreementRider' },
    ],
  },
];



const Home: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  const items2: MenuProps['items'] = list.map((item) => ({
    key: item.key,
    // icon: React.createElement(),
    label: item.name,
    onClick: (e) => {
      navigate(e.key);
    },
    children: item.children?.map((newItem) => ({
      key: newItem.key,
      label: newItem.name,
      onClick: (e) => {
        navigate(e.key);
      },
    })),
  }));
  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        {/* <div className="demo-logo" /> */}
        <div>
          <span className="text-white">一秒快送后台管理系统</span>
        </div>
      </Header>
      <Layout style={{ margin: '24px 0 0 0' }}>
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            items={items2}
          />
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 700,
              background: colorBgContainer,
            }}
          >
            <Routes>
              <Route path="" element={<Screening />} />
              <Route path="user/*" element={<User />} />
              <Route path="order/*" element={<Order />} />
              <Route path="rider/*" element={<Rider />} />
              <Route path="city/*" element={<City />} />
              <Route path="coupon/*" element={<Coupon />} />
              <Route path="config/*" element={<Config />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Home;
