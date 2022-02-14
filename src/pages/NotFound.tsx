import { useLocation } from "react-router-dom";
import React from 'react';

function NotFound() {
    const location = useLocation();
    return (
        <div className="p-2">
            <h1>404, Not Found</h1>
            <p>No Match for {location.pathname}</p>
        </div>
    )
}

export default NotFound;