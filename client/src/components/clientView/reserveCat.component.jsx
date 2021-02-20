import React, { Component, Fragment } from 'react';

import sr from '../../scrollReveal';

import Cat from '../../pics/cat.png';
import CatSmall from '../../pics/cat-small.png';
import Reserve from '../../pics/reserve.png';
import Reservation from './reservation.component';

export default class ReserveCat extends Component {
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
        const configReservationCat = {
            origin: 'left',
            duration: 500,
            delay: 350,
            distance: '50px',
            scale: 1,
            easing: 'ease',
        }

        const configReservationWord = {
            origin: 'left',
            duration: 500,
            delay: 450,
            distance: '50px',
            scale: 1,
            easing: 'ease',
        }
        
        sr.reveal(this.refs.reservationCat, configReservationCat);
        sr.reveal(this.refs.reservationWord, configReservationWord);
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
            <Fragment>
                <div className="reserve reserve-cat d-none d-lg-block">
                    <img onClick={ this.showReservation }  src={Cat} alt="cat" id="cat" ref="reservationCat"/>
                </div>
                <div className="reserve reserve-word d-none d-lg-block">
                    <img onClick={ this.showReservation } src={Reserve} alt="reserve" id="reserve" ref="reservationWord"/>
                </div>
                <div className="reserve reserve-cat-small d-block d-lg-none">
                    <img onClick={ this.showReservation } src={CatSmall} alt="cat-small" id="cat-small" />
                </div>
                { this.state.isReserveModalOpen ? <Reservation closeReservation = { this.closeReservation } /> : '' }
            </Fragment>
        );
    }
}