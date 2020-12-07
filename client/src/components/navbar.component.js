import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/admin" className="navbar-brand"></Link>
                <div className="collpase navbar-collapse container">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/admin/settings" className="nav-link"><i className="fas fa-cog"></i> 設定</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/admin/create" className="nav-link"><i className="fas fa-user-plus"></i> 新規予約</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/admin" className="nav-link"><i className="fas fa-list"></i> 予約リスト</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/admin/schedule" className="nav-link"><i className="far fa-calendar-alt"></i> スケジュール</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}