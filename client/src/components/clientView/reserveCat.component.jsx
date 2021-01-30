import React, { Component, Fragment } from 'react';

import sr from '../../scrollReveal';

import Cat from '../../pics/cat.png';
import CatSmall from '../../pics/cat-small.png';
import Reserve from '../../pics/reserve.png';

export default class ReserveCat extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }
    componentDidMount() {

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
        
        sr.reveal(this.refs.reservationCat, configReservationCat);
        sr.reveal(this.refs.reservationWord, configReservationWord);
    }

    render() {
        return (
            <Fragment>
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
            </Fragment>
        );
    }
}