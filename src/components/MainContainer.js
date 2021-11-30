import React from 'react'

const MainContainer = ({ children }) => {
    return (
        <div className="conatiner-fluid content-inner mt-6 py-0">
            <div className="row">
                {children}
            </div>
        </div>
    )
}

export default MainContainer
