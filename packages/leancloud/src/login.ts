import AV from './AV';
import type { LogInProps } from './types';

const logIn = ({ username, password, phone, email, type = 'account' }: LogInProps) => {
  if (type === 'phone' && phone) {
    return AV.User.logInWithMobilePhone(phone, password!);
  }
  if (type === 'email' && email) {
    return AV.User.loginWithEmail(email!, password!);
  }
  return AV.User.logIn(username!, password!);
};

export default logIn;
