import React from 'react';
import IHeroBannerProps from './IHeroBannerProps';

import { HeroBannerContainer } from './styles';

const HeroBanner: React.FC<IHeroBannerProps> = ({ title, subtext }) => {
    return (
        <HeroBannerContainer className="w-screen flex justify-center items-center flex-col">
            <h1 className="text-7xl">{title}</h1>
            {subtext && <p className="text-2xl">{subtext}</p>}
        </HeroBannerContainer>
    )
}

export default HeroBanner;