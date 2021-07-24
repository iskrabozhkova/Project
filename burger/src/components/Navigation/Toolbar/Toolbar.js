import React from 'react'
import './Toolbar.css'
import NavigationItems from '../NavigationItems/NavigationItems'


const Toolbar = (props) => (
    <header className="Toolbar">
        <div>MENU</div>
        <nav>
            <NavigationItems/>
        </nav>
    </header>
)

export default Toolbar;