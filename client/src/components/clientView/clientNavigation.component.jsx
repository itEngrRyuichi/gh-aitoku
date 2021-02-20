import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import sr from '../../scrollReveal';

import BrandPic from '../../pics/brand.png';
import BrandSmallPic from '../../pics/brand-small.png';
import Reservation from './reservation.component';

export default class ClientNavigation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isReserveModalOpen: false
        }
        this.showReservation = this.showReservation.bind(this);
        this.closeReservation = this.closeReservation.bind(this);
    }
    componentDidMount() {
        if (this.props.animated === true) {
            this.animated();
        }
    }
    animated() {
        const configClientNavigation = {
            origin: 'top',
            duration: 500,
            delay: 0,
            distance: '200px',
            scale: 1,
            easing: 'ease',
        }

        const configBrand = {
            origin: 'top',
            duration: 500,
            delay: 50,
            distance: '100px',
            scale: 1,
            easing: 'ease',
        }

        const configNavItem1 = {
            origin: 'top',
            duration: 500,
            delay: 100,
            distance: '100px',
            scale: 1,
            easing: 'ease',
        }

        const configNavItem2 = {
            origin: 'top',
            duration: 500,
            delay: 150,
            distance: '100px',
            scale: 1,
            easing: 'ease',
        }

        const configNavItem3 = {
            origin: 'top',
            duration: 500,
            delay: 200,
            distance: '100px',
            scale: 1,
            easing: 'ease',
        }

        const configNavItem4 = {
            origin: 'top',
            duration: 500,
            delay: 250,
            distance: '100px',
            scale: 1,
            easing: 'ease',
        }

        const configNavItem5 = {
            origin: 'top',
            duration: 500,
            delay: 400,
            distance: '100px',
            scale: 1,
            easing: 'ease',
        }

        const configNavItem6 = {
            origin: 'top',
            duration: 500,
            delay: 450,
            distance: '100px',
            scale: 1,
            easing: 'ease',
        }

        sr.reveal(this.refs.clientNavigation, configClientNavigation);
        sr.reveal(this.refs.navItemBrand, configBrand);
        sr.reveal(this.refs.navItem1, configNavItem1);
        sr.reveal(this.refs.navItem2, configNavItem2);
        sr.reveal(this.refs.navItem3, configNavItem3);
        sr.reveal(this.refs.navItem4, configNavItem4);
        sr.reveal(this.refs.navItem5, configNavItem5);
        sr.reveal(this.refs.navItem6, configNavItem6);
    }

    clientNaviItemEng() {
        return 
    }

    showReservation() {
        this.setState({
            isReserveModalOpen: true
        });
    }

    closeReservation() {
        this.setState({
            isReserveModalOpen: false
        });
    }

    render() {
        return (
            <>
                <Navbar collapseOnSelect className="client-nav" expand="lg" variant="light" fixed="top" ref="clientNavigation">
                    <Navbar.Brand href="/" className="d-none d-xl-block ml-5" >
                        <img src={BrandPic} alt="BradImage"/>
                    </Navbar.Brand>
                    <div className="container">
                        <Navbar.Brand href="/" className="d-block d-xl-none"  ref="navItemBrand">
                            <img src={BrandSmallPic} alt="BradSmallImage"/>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbar-responsive" />
                        <Navbar.Collapse id="navbar-responsive" className="p-0 m-0">
                            <Nav className="mr-auto ml-auto">
                                <Nav.Link href="/facility" className={`px-4 topic-item ${this.props.page==='facility' ? 'selected' : ''}`} ref="navItem1">お部屋・施設</Nav.Link>
                                <Nav.Link href="/activity" className={`px-4 topic-item ${this.props.page==='activity' ? 'selected' : ''}`}  ref="navItem2">周辺案内</Nav.Link>
                                <Nav.Link href="/access" className={`px-4 topic-item ${this.props.page==='access' ? 'selected' : ''}`}  ref="navItem3">アクセス</Nav.Link>
                                <Nav.Link href="/contact" className={`px-4 topic-item ${this.props.page==='contact' ? 'selected' : ''}`}  ref="navItem4">お問い合わせ</Nav.Link>
                            </Nav>
                            <Nav className="mr-auto ml-auto">
                                <Nav.Link onClick={ this.showReservation } className="px-4 reserve-item" ref="navItem5">宿泊予約</Nav.Link>
                                <Nav.Link href="/" className="px-4 translate" ref="navItem6">EN <i className="fas fa-arrows-alt-h"></i> JP</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
                { this.state.isReserveModalOpen ? <Reservation closeReservation = { this.closeReservation } /> : '' }
            </>
        );
    }
}