import {
  AlipayCircleOutlined,
  LockOutlined,
  MobileOutlined,
  TaobaoCircleOutlined,
  UserOutlined,
  WeiboCircleOutlined,
} from '@ant-design/icons';
import { Alert, Space, message, Tabs } from 'antd';
import React, { useState } from 'react';
import ProForm, { ProFormCheckbox, ProFormText } from '@ant-design/pro-form';
import { Link, history } from 'alita';
import { Wufeng } from '@alita/icons';
import { logIn } from '@alita/cloud';
import type { LogInType, LogInProps, ErrorResponse } from '@alita/cloud';
import styles from './index.less';
import { WUFENG_LOCAL_NAME } from '@/constants';

const LoginMessage: React.FC<{
  content: string;
}> = ({ content }) => (
  <Alert
    style={{
      marginBottom: 24,
    }}
    message={content}
    type="error"
    showIcon
  />
);

const Login: React.FC = () => {
  const [submitting, setSubmitting] = useState(false);
  const [userLoginState, setUserLoginState] = useState<API.LoginResult>({});
  const [type, setType] = useState<LogInType>('account');
  // const { initialState, setInitialState } = useModel('@@initialState');

  const fetchUserInfo = async () => {
    // const userInfo = await initialState?.fetchUserInfo?.();
    // if (userInfo) {
    //   await setInitialState((s) => ({
    //     ...s,
    //     currentUser: userInfo,
    //   }));
    // }
  };

  const handleSubmit = async (values: LogInProps) => {
    setSubmitting(true);
    // try {
    // 登录
    logIn({ ...values, type }).then(
      (data) => {
        if (data) {
          localStorage.setItem(WUFENG_LOCAL_NAME, data.id || '');
          const defaultLoginSuccessMessage = '登录成功！';
          message.success(defaultLoginSuccessMessage);
          /** 此方法会跳转到 redirect 参数所在的位置 */
          if (!history) return;
          const { query } = history.location;
          const { redirect } = query as { redirect: string };
          history.push(redirect || '/');
        }
      },
      (err: ErrorResponse) => {
        setUserLoginState({ status: 'error', type });
      },
    );
    // } catch (error) {
    //   const defaultLoginFailureMessage = '登录失败，请重试！';

    //   message.error(defaultLoginFailureMessage);
    // }
    setSubmitting(false);
  };
  const { status, type: loginType } = userLoginState;

  return (
    <div className={styles.container}>
      <div className={styles.lang} data-lang>
        {/* {SelectLang && <SelectLang />} */}
      </div>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.header}>
            <Link to="/">
              <Wufeng style={{ width: '40px', height: '40px' }} />
              <span className={styles.title}>Wu Feng LowCode</span>
            </Link>
          </div>
          <div className={styles.desc}>无锋 - 重剑无锋，大巧不工</div>
        </div>

        <div className={styles.main}>
          <ProForm
            initialValues={{
              autoLogin: true,
            }}
            submitter={{
              searchConfig: {
                submitText: '登录',
              },
              render: (_, dom) => dom.pop(),
              submitButtonProps: {
                loading: submitting,
                size: 'large',
                style: {
                  width: '100%',
                },
              },
            }}
            onFinish={async (values) => {
              await handleSubmit(values as API.LoginParams);
            }}
          >
            <Tabs activeKey={type} onChange={setType}>
              <Tabs.TabPane key="account" tab="账户密码登录" />
              <Tabs.TabPane key="phone" tab="手机号登录" />
            </Tabs>

            {status === 'error' && loginType === 'account' && (
              <LoginMessage content="账户或密码错误" />
            )}
            {type === 'account' && (
              <>
                <ProFormText
                  name="username"
                  fieldProps={{
                    size: 'large',
                    prefix: <UserOutlined className={styles.prefixIcon} />,
                  }}
                  placeholder="用户名"
                  rules={[
                    {
                      required: true,
                      message: '请输入用户名!',
                    },
                  ]}
                />
                <ProFormText.Password
                  name="password"
                  fieldProps={{
                    size: 'large',
                    prefix: <LockOutlined className={styles.prefixIcon} />,
                  }}
                  placeholder="密码"
                  rules={[
                    {
                      required: true,
                      message: '请输入密码！',
                    },
                  ]}
                />
              </>
            )}

            {status === 'error' && loginType === 'phone' && <LoginMessage content="验证码错误" />}
            {type === 'phone' && (
              <>
                <ProFormText
                  fieldProps={{
                    size: 'large',
                    prefix: <MobileOutlined className={styles.prefixIcon} />,
                  }}
                  name="phone"
                  placeholder="手机号"
                  rules={[
                    {
                      required: true,
                      message: '请输入手机号！',
                    },
                    {
                      pattern: /^1\d{10}$/,
                      message: '手机号格式错误！',
                    },
                  ]}
                />
                <ProFormText.Password
                  name="password"
                  fieldProps={{
                    size: 'large',
                    prefix: <LockOutlined className={styles.prefixIcon} />,
                  }}
                  placeholder="密码"
                  rules={[
                    {
                      required: true,
                      message: '请输入密码！',
                    },
                  ]}
                />
                {/* <ProFormCaptcha
                  fieldProps={{
                    size: 'large',
                    prefix: <LockOutlined className={styles.prefixIcon} />,
                  }}
                  captchaProps={{
                    size: 'large',
                  }}
                  placeholder="请输入验证码"
                  captchaTextRender={(timing, count) => {
                    if (timing) {
                      return `${count} 获取验证码`;
                    }
                    return '获取验证码';
                  }}
                  name="captcha"
                  rules={[
                    {
                      required: true,
                      message: '请输入验证码！',
                    },
                  ]}
                  onGetCaptcha={async (phone) => {
                    const result = await getFakeCaptcha({
                      phone,
                    });
                    if (result === false) {
                      return;
                    }
                    message.success('获取验证码成功！验证码为：1234');
                  }}
                /> */}
              </>
            )}
            <div
              style={{
                marginBottom: 24,
              }}
            >
              <ProFormCheckbox noStyle name="autoLogin">
                自动登录
              </ProFormCheckbox>
              <a
                style={{
                  float: 'right',
                }}
                onClick={() => {
                  history.push('/register');
                }}
              >
                注册
              </a>
            </div>
          </ProForm>
          <Space className={styles.other}>
            其他登录方式
            <AlipayCircleOutlined className={styles.icon} />
            <TaobaoCircleOutlined className={styles.icon} />
            <WeiboCircleOutlined className={styles.icon} />
          </Space>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Login;
