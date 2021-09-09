import AV from './AV';

export interface RegisterProps {
  username: string;
  password: string;
  phone?: string;
  email?: string;
}

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
