import React, { Component, Fragment } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import BrandPic from '../../pics/brand.png';
import BrandSmallPic from '../../pics/brand-small.png';
import Cat from '../../pics/cat.png';
import CatSmall from '../../pics/cat-small.png';
import Reserve from '../../pics/reserve.png';
import ReserveSmall from '../../pics/reserve-small.png';
/* import Main1 from '../../pics/main/main.jpg';
import Main1Small from '../../pics/main/main-small.jpg'; */

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <div className="main">
                <Navbar collapseOnSelect className="client-nav" expand="lg" variant="light" fixed="top">
                    <Navbar.Brand href="/" className="d-none d-xl-block ml-5" >
                        <img src={BrandPic} alt="BradImage"/>
                    </Navbar.Brand>
                    <div className="container">
                        <Navbar.Brand href="/" className="d-block d-xl-none" >
                            <img src={BrandSmallPic} alt="BradSmallImage"/>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbar-responsive" />
                        <Navbar.Collapse id="navbar-responsive" className="p-0 m-0">
                            <Nav className="mr-auto ml-auto">
                                <Nav.Link href="/" className="px-4">施設案内</Nav.Link>
                                <Nav.Link href="/" className="px-4">周辺案内</Nav.Link>
                                <Nav.Link href="/" className="px-4">アクセス</Nav.Link>
                                <Nav.Link href="/" className="px-4 border-none">お問い合わせ</Nav.Link>
                            </Nav>
                            <Nav className="mr-auto ml-auto">
                                <Nav.Link href="/" className="px-4 border-none translate">EN <i className="fas fa-arrows-alt-h"></i> JP</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>
                <div className="reserve reserve-cat d-none d-lg-block">
                    <img src={Cat} alt="cat" id="cat" />
                </div>
                <div className="reserve reserve-word d-none d-lg-block">
                    <img src={Reserve} alt="reserve" id="reserve" />
                </div>
                <div className="reserve reserve-cat-small d-block d-lg-none">
                    <button type="button" className="btn btn-small">予約はこちら</button>
                    <img src={CatSmall} alt="cat-small" id="cat-small" />
                </div>
            </div>
        );
    }
}