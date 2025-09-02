import { LoginForm } from '@/components/login-form';
import { Helmet } from 'react-helmet';

const LoginPage = () => {
  return (
    <>
      <Helmet title="Login | Mirae Assesment" />
      <LoginForm />
    </>
  );
};

export default LoginPage;
