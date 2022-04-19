import React, { Component } from 'react';

const NavBar = () => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-light">
                <div className="container-fluid justify-content-center">
                    <a className="row navbar-brand" href="#">
                        <h3>
                            Resume
                        </h3>
                    </a>
                </div>
            </nav >
        </React.Fragment >
    );
}

export default NavBar;