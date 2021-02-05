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
        this.animated();
    }

    animated() {
        const configReserveWindow = {
        origin: 'right',
        duration: 500,
        delay: 0,
        distance: '1000px',
        scale: 1,
        easing: 'ease-in-out',
        }

        sr.reveal(this.refs.reserveWindow, configReserveWindow);
    }

    closed() {
        const configCloseWindows = {
            origin: 'left',
            duration: 500,
            delay: 0,
            distance: '1000px',
            scale: 1,
            easing: 'ease-out',
        }

        sr.reveal(this.refs.reserveWindow, configCloseWindows);
    }

    render() {
        return (
            <Fragment>
                <div className="main">
                    <ClientNavigation
                        animated={false}
                        page={'reservation'} />
                    <div className="reservation" ref='reserveWindow'>
                        <p onClick={ this.closed() } className="returnHome"><i className="fas fa-arrow-right"></i></p>
                    </div>
                </div>
                <Footer />
            </Fragment>
        );
    }
}