import React from 'react';
import { useNavigate } from 'react-router-dom';
import IHomeProp from "./IHomeProps";

import HeroBanner from '@/layouts/HeroBanner';
import { NavButton } from './styles';

const Home: React.FC<IHomeProp> = props => {
    const navigate = useNavigate();

    return (
        <div className="w-screen flex flex-col">
            <HeroBanner
                title="Hello World"
                subtext="where we start coding React!"
            />
            <NavButton
                onClick={() => navigate('/about')}
                label="Redirect"
                className="p-3 rounded shadow hover:shadow-xl border-2 border-black max-w-md self-center"
            />
        </div>
    );
};

export default Home;