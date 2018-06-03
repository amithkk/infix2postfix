import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (

        <nav className="navbar navbar-inverse navbar-static-top">
            <div className="container-fluid">
                <div className="navbar-header" style={{marginRight: 0, marginLeft: 0}}>
                    <a className="navbar-brand">Infix To Postfix Converter</a>
                </div>
                <div className="hidden-xs navbar-right navbar-nav nav ">
                    <a href="https://github.com/amithkk/infix2postfix">
                        <button id="gh-btn" className="btn navbar-btn btn-primary">
                            <i className="glyphicon glyphicon-console"/>
                            View On Github
                        </button>
                    </a>
                </div>
            </div>

        </nav>
    )

};

export default Navbar;