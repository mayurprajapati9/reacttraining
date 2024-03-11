import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('user');
        // Redirect to login page after logout
        navigate('/loginSignup/login');
    };

    return (
        <button className='p-2 ml-2 bg-red-200 px-10 rounded font-semibold' onClick={logout}>Logout</button>
    );
};

export default Logout;
