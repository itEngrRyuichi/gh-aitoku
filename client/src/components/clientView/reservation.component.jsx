import React, { Component, Fragment } from 'react';
import ClientNavigation from './clientNavigation.component';
import sr from '../../scrollReveal';
import Footer from './footer';

export default class Reservation extends Component {
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
                        animated={false}
                        page={'reservation'} />
                    <div className="reservation" ref='reserveWindow'>
                    </div>
                </div>
                <Footer />
            </Fragment>
        );
    }
}