import React from 'react'
import Navbar from '../components/Navbar'
import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'

const dashboard = () => {
    return (
        <>
        <Sidebar />
        <main className="main-content">
            <Navbar />
            <div className="conatiner-fluid content-inner mt-6 py-0">
                
            </div>
        </main>
        </>
    )
}

export default dashboard
