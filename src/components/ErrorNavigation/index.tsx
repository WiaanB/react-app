import React from 'react';
import { useNavigate } from 'react-router-dom';

import { NavButton } from './styles';

const ErrorNav: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="flex justify-around items-center">
            <NavButton
                className="p-3 rounded shadow hover:shadow-xl border-2 border-black"
                onClick={() => navigate("/")}
                label="Go Home"
                color="#fc6156"
            />
            <NavButton
                className="p-3 rounded shadow hover:shadow-xl border-2 border-black"
                onClick={() => navigate(-1)}
                label="Go Back"
            />
        </div>
    )
};

export default ErrorNav;