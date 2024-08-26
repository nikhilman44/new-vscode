import { useNavigate } from 'react-router-dom';
import Login from '../Login/index';

const LoginWrapper = () => {
  const navigate = useNavigate();
  return <Login navigate={navigate} />;
};

export default LoginWrapper;
