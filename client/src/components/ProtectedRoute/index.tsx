import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import {jwtDecode} from 'jwt-decode';

interface CustomJwtPayload {
  role: string;
}

const ProtectedRoute = ({ children, requiredRole }: { children: JSX.Element, requiredRole: string }) => {
  const navigate = useNavigate();
  const jwtToken = Cookies.get('jwt_token');

  useEffect(() => {
    if (!jwtToken) {
      navigate('/login');
    } else {
      try {
        const decoded = jwtDecode<CustomJwtPayload>(jwtToken);
        if (decoded.role !== requiredRole) {
          navigate('/');
        }
      } catch (error) {
        navigate('/login');
      }
    }
  }, [jwtToken, navigate, requiredRole]);
  return jwtToken ? children : null;
};

export default ProtectedRoute;
