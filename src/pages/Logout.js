import React, { useEffect } from 'react'

const Logout = () => {
    useEffect(() => {
        // clear local storage
        localStorage.clear();
        // redirect to login page
        window.location.href = '/login';
    }, []);

    return (
        <div>
            
        </div>
    )
}

export default Logout
