import { Navigate } from 'react-router-dom';

const RedirectRoutes = ({ isAuth }) => {
    return isAuth ? (
        <Navigate to='/home' replace />
    ) : (
        <Navigate to='/auth' replace />
    );
};

export default RedirectRoutes;
