import React from 'react';
import IErrorPageProp from "./IErrorPageProps";

import HeroBanner from '@/layouts/HeroBanner';
import ErrorNav from '@/components/ErrorNavigation';

const ErrorPage: React.FC<IErrorPageProp> = props => {
    return (
        <>
            <HeroBanner
                title="Whoops, something went wrong!"
                subtext="oh dear, what do we do?"
            />
            <ErrorNav />
        </>
    );
};

export default ErrorPage;