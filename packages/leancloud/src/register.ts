import AV from './AV';
import type { RegisterProps } from './types';

const register = ({ username, password, phone, email }: RegisterProps) => {
  const user = new AV.User();

  user.setUsername(username);
  user.setPassword(password);

  // 可选
  if (email) {
    user.setEmail(email);
  }
  if (phone) {
    user.setMobilePhoneNumber(phone);
  }

  return user.signUp();
};

export default register;
