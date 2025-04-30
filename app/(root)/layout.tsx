import React from 'react';
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner"




function Layout({children}:Readonly<{ children:React.ReactNode }>) {
    return (
        <main className="px-5 py-3">
            <Navbar/>
            {children}
            <Toaster />
        </main>
    );
}

export default Layout;