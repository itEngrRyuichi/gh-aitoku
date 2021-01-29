import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import sr from '../../scrollReveal';

import BrandPic from '../../pics/brand.png';
import BrandSmallPic from '../../pics/brand-small.png';
import Cat from '../../pics/cat.png';
import CatSmall from '../../pics/cat-small.png';
import Reserve from '../../pics/reserve.png';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }
    componentDidMount() {
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

        const configReservationCat = {
            origin: 'torightp',
            duration: 500,
            delay: 350,
            distance: '50px',
            scale: 1,
            easing: 'ease',
        }

        const configReservationWord = {
            origin: 'torightp',
            duration: 500,
            delay: 450,
            distance: '50px',
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
        sr.reveal(this.refs.reservationCat, configReservationCat);
        sr.reveal(this.refs.reservationWord, configReservationWord);
    }

    render() {
        return (
            <div className="main">
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
                                <Nav.Link href="/" className="px-4" ref="navItem1">施設案内</Nav.Link>
                                <Nav.Link href="/" className="px-4" ref="navItem2">周辺案内</Nav.Link>
                                <Nav.Link href="/" className="px-4" ref="navItem3">アクセス</Nav.Link>
                                <Nav.Link href="/" className="px-4 border-none" ref="navItem4">お問い合わせ</Nav.Link>
                            </Nav>
                            <Nav className="mr-auto ml-auto">
                                <Nav.Link href="/" className="px-4 border-none translate" ref="navItem5">EN <i className="fas fa-arrows-alt-h"></i> JP</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
                <div className="reserve reserve-cat d-none d-lg-block">
                    <img src={Cat} alt="cat" id="cat" ref="reservationCat"/>
                </div>
                <div className="reserve reserve-word d-none d-lg-block">
                    <img src={Reserve} alt="reserve" id="reserve" ref="reservationWord"/>
                </div>
                <div className="reserve reserve-cat-small d-block d-lg-none">
                    <button type="button" className="btn btn-small">予約はこちら</button>
                    <img src={CatSmall} alt="cat-small" id="cat-small" />
                </div>
            </div>
        );
    }
}