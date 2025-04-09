import React from 'react';
import Navbar from "@/components/Navbar";

function Layout({children}:Readonly<{ children:React.ReactNode }>) {
    return (
        <main className="px-5 py-3">
            <Navbar/>
            {children}
        </main>
    );
}

export default Layout;