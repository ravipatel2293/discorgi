import { gql, useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { isLoggedInVar } from '../cache';
import LoginForm from '../components/auth/LoginForm';

const LOGIN_USER = gql`
  mutation LoginUser($loginUserData: UserCreateInput!) {
    loginUser(data: $loginUserData) {
      token
    }
  }
`;

const Login = () => {
  const history = useHistory();

  const [loginUser, { loading, error }] = useMutation(LOGIN_USER, {
    onCompleted({ loginUser: user }) {
      sessionStorage.setItem('token', user.token);
      isLoggedInVar(true);
      history.push('/channels/welcome/1');
    },
  });


  return <LoginForm loginUser={loginUser} error={error} loading={loading} />;
};

export default Login;
