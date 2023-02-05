import * as React from 'react';
import { ReactNode } from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <NavBar />
            <main> {children}</main>
            <Footer />
        </>
    );
};

export default Layout;
