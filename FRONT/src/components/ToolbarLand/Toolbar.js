import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavItem } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import './Toolbar.css';

class ToolbarLand extends React.Component {
    render() {
        return (
            <Router>
                <Navbar color="danger-color-dark" expand="md" scrolling>
                    <NavbarBrand className="Logo">
                        <a href="/">Antena <i class="fas fa-broadcast-tower"></i> CPS</a>
                    </NavbarBrand>
                        <NavbarNav right>
                          <NavItem>
                            <form className="login">
                                <input className="item" placeholder="Email" />
                                <input className="item" placeholder="Senha" />
                                <button className="item" type="item">Entrar</button>                            
                            </form>
                          </NavItem>
                        </NavbarNav>
                </Navbar>
            </Router>
        );
    }
}

export default ToolbarLand;