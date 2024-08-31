import React from 'react'
import NavigationBar from '../ui/shared/NavigationBar'
import LogSign from '../ui/shared/LogSign'


const Header = () => {
    return (
        <>
            <div className="header">
                <img src="main.svg" alt="" />
                <NavigationBar />
                <LogSign />

            </div>
        </>
    )
}

export default Header
