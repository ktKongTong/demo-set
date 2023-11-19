import React from 'react';

interface CenterLayoutProps {
    children: React.ReactNode;
}

const CenterLayout: React.FC<CenterLayoutProps> = ({ children }) => {
    return (
        <div className="flex justify-center items-center h-screen">
            {children}
        </div>
    );
};

export default CenterLayout;
