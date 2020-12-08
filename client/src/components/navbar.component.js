import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default class AdminNavigation extends Component {

    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <div className="container">
                        <Navbar.Brand href="/admin">愛徳 管理者</Navbar.Brand>
                        <Navbar.Toggle aria-controls="admin-navbar-responsive" />
                        <Navbar.Collapse id="admin-navbar-responsive">
                            <Nav className="mr-auto">
                                <Nav.Link href="/admin/settings"><i className="fas fa-cog"></i> 設定</Nav.Link>
                                <Nav.Link href="/admin/create"><i className="fas fa-user-plus"></i> 新規予約</Nav.Link>
                                <Nav.Link href="/admin"><i className="fas fa-list"></i> 予約リスト</Nav.Link>
                                <Nav.Link href="/admin/schedule"><i className="far fa-calendar-alt"></i> スケジュール</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href="/">お客様画面へ</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
            </div>
        );
    }
}