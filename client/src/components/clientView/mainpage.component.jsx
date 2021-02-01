import React, { Component } from 'react';
import readyImg from '../../pics/ready.jpg';
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
                    <ReserveCat animated={true} />
                    <div className="d-flex justify-content-center pt-5">
                        <img src={ readyImg } alt="ready"  className="readyImg" />
                    </div>
                    <div className="d-flex justify-content-center pt-5">
                        <a href="http://aitoku.com/">予約はこちらからお願いします</a>
                    </div>
                </div>
                <Footer />
            </Fragment>
        );
    }
}