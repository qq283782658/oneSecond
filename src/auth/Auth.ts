import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import cookie from 'react-cookies';

export default function Auth(props: any) {
  // 编程方式导航
  const navigate = useNavigate();
  // 获取当前的url地址数据
  const location = useLocation();
  const token = cookie.load('token');

  // && !props.value.includes(location.pathname)
  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [location.pathname]);

  return props.children;
}
