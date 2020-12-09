import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default class AdminNavigation extends Component {

    render() {
        return (
            <div classname="custom-navigation">
                <Navbar collapseOnSelect expand="lg" className="py-2">
                    <div className="container">
                        <Navbar.Toggle aria-controls="navbar-responsive" />
                        <Navbar.Collapse id="navbar-responsive">
                            <Nav className="mr-auto ml-auto">
                                <Nav.Link href="/about" className="px-4 my-2 border-right">館内施設</Nav.Link>
                                <Nav.Link href="/facility" className="px-4 my-2 border-right">周辺施設</Nav.Link>
                                <Nav.Link href="/access" className="px-4 my-2 border-right">交通</Nav.Link>
                                <Nav.Link href="/reservation" className="px-4 my-2">お問い合わせ・予約</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </div>
        );
    }
}