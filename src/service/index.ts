/* eslint-disable import/no-unresolved */
import { AxiosPromise } from 'axios';
import request from '@/service/request';

/**
 * 登录login接口
 */

interface ILogin {
  adminName: string;
  adminPwd: string;
  verifyCode: string;
  no: string;
}
type ILoginResponseData = { code: number; msg: string };

export const GetLogin = (params: ILogin): AxiosPromise<ILoginResponseData> => {
  const res = request.post('/admin/login', params);
  return res;
};
/**
 * 验证码接口
 */
type IVerifycodeResponseData = {
  code: number;
  msg: string;
  data: { svg: string; no: string };
};
export const GetVerifycode = async () => {
  const res = <AxiosPromise<IVerifycodeResponseData>>request.get('/admin/verifycode');
  return (await res).data.data;
};
export default {};
