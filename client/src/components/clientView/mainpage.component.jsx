import React, { Component } from 'react';
import HomePic from '../../pics/main/home.jpg';
import Autumn from '../../pics/main/autumn.jpg';
import Upright from '../../pics/main/upright.jpg';
import ClientNavigation from './clientNavigation.component';
import ReserveCat from './reserveCat.component';
import Footer from './footer';
import { Fragment } from 'react';

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }
    componentDidMount() {
    }

    render() {
        return (
            <Fragment>
                <div className="main">
                    <ClientNavigation
                        animated={true} />
                    {/* <ReserveCat animated={true} /> */}
                    <div className="d-flex justify-content-center main-pics">
                        <img src={HomePic} alt="homePicture" className="homePic" />
                        <div className="cover"></div>
                        <img src={Autumn} alt="autumn" className="autumn"/>
                        <img src={Upright} alt="upright" className="upright"/>
                    </div>
                    <div className="d-flex justify-content-center introduction">
                        <h1 className="intro-title">
                            Introduction
                        </h1>
                    </div>
                </div>
                <Footer />
            </Fragment>
        );
    }
}