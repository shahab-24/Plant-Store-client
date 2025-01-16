
import useRole from '../hooks/useRole';
import { Navigate } from 'react-router-dom';
import LoadingSpinner from '../components/Shared/LoadingSpinner';

const AdminRoute = ({children}) => {
        const [ role, isLoading]  = useRole()
        
      
        if (isLoading) return <LoadingSpinner />
        if (role === 'admin') return children
        return <Navigate to='/dashboard'  replace='true' />
};

export default AdminRoute;