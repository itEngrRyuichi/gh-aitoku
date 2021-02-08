import React, { Component } from 'react';
import sr from '../../scrollReveal';

export default class Reservation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            checkin: new Date(''),
            checkout: new Date(''),
            duration: '',
            username: '',
            phone: '',
            email: '',
            adult_no: 2,
            middle_no: 0,
            child_no: 0,
            baby_no: 0,
            adult_fee: '',
            middle_fee: '',
            child_fee: '',
            baby_fee: '',
            room: '',
            rooms: [],
            arrival: '13:00',
            access: '自動車',
            food: '朝食なし',
            description: '特になし',

            // original
            isContactSelected: true,
            isPeopleSelected: false,
            isDateSelected: false,
            isDetailSelected: false,
            isConfirmSelected: false,
        }

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeCheckin = this.onChangeCheckin.bind(this);
        this.onChangeCheckout = this.onChangeCheckout.bind(this);
        this.onChangeAdult = this.onChangeAdult.bind(this);
        this.onChangeMiddle = this.onChangeMiddle.bind(this);
        this.onChangeChild = this.onChangeChild.bind(this);
        this.onChangeBaby = this.onChangeBaby.bind(this);
        this.onChangeArrival = this.onChangeArrival.bind(this);
        this.onChangeAccess = this.onChangeAccess.bind(this);
        this.onChangeFood = this.onChangeFood.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);

        this.contactRender = this.contactRender.bind(this);
        this.dateRender = this.dateRender.bind(this);
        this.peopleRender = this.peopleRender.bind(this);
        this.detailRender = this.detailRender.bind(this);
        this.confirmRender = this.confirmRender.bind(this);
        this.selectContact = this.selectContact.bind(this);
        this.selectPeople = this.selectPeople.bind(this);
        this.selectDate = this.selectDate.bind(this);
        this.selectDetail = this.selectDetail.bind(this);
        this.selectConfirm = this.selectConfirm.bind(this);
    }
    
    componentDidMount() {
        this.selectContact();
        this.animated();

        let check_in = new Date();
        let check_out = new Date();
        const checkin = new Date(check_in.setDate(check_in.getDate() + 3));
        const checkout = new Date(check_out.setDate(check_out.getDate() + 4));
        this.setState({
            checkin: new Date(checkin).toISOString().split('T')[0],
            checkout: new Date(checkout).toISOString().split('T')[0]
        });
    }

    animated(){
        const configReserveWindow = {
            origin: 'right',
            duration: 500,
            delay: 250,
            distance: '500px',
            scale: 1,
            easing: 'ease',
        }
        sr.reveal(this.refs.reserveWindow, configReserveWindow);
    }

    // onChanges
    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangePhone(e) {
        this.setState({
            phone: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangeCheckin(e) {
        this.setState({
            checkin: e.target.value
        });
    }

    onChangeCheckout(e) {
        this.setState({
            checkout: e.target.value
        });
    }

    onChangeAdult(e) {
        this.setState({
            adult_no: e.target.value
        });
    }

    onChangeMiddle(e) {
        this.setState({
            middle_no: e.target.value
        });
    }

    onChangeChild(e) {
        this.setState({
            child_no: e.target.value
        });
    }

    onChangeBaby(e) {
        this.setState({
            baby_no: e.target.value
        });
    }

    onChangeArrival(e) {
        this.setState({
            arrival: e.target.value
        });
    }

    onChangeAccess(e) {
        this.setState({
            access: e.target.value
        });
    }

    onChangeFood(e) {
        this.setState({
            food: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    // render related functions
    selectContact() {
        this.setState({
            isContactSelected: true,
            isPeopleSelected: false,
            isDateSelected: false,
            isDetailSelected: false,
            isConfirmSelected: false,
        });
    }

    selectPeople() {
        this.setState({
            isContactSelected: false,
            isPeopleSelected: true,
            isDateSelected: false,
            isDetailSelected: false,
            isConfirmSelected: false,
        });
    }

    selectDate() {
        this.setState({
            isContactSelected: false,
            isPeopleSelected: false,
            isDateSelected: true,
            isDetailSelected: false,
            isConfirmSelected: false,
        });
    }

    selectDetail() {
        this.setState({
            isContactSelected: false,
            isPeopleSelected: false,
            isDateSelected: false,
            isDetailSelected: true,
            isConfirmSelected: false,
        });
    }

    selectConfirm() {
        this.setState({
            isContactSelected: false,
            isPeopleSelected: false,
            isDateSelected: false,
            isDetailSelected: false,
            isConfirmSelected: true,
        });
    }

    // renders
    contactRender() {
        return(
            <>
                <div className="col-6" ref='contactRender'>
                    <div className="form-group">
                        <label>お名前</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                            placeholder="山田太郎"
                        />
                    </div>
                    <div className="form-group">
                        <label>電話番号</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            value={this.state.phone}
                            onChange={this.onChangePhone}
                            placeholder="08012345678"
                        />
                    </div>
                    <div className="form-group">
                        <label>Eメール</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            value={this.state.email}
                            onChange={this.onChangeEmail}
                            placeholder="example@gmail.com"
                        />
                    </div>
                </div>
                <div className="col-12 text-center">
                    <div className="form-group py-4">
                        <button type="button" className="btn" onClick={ this.selectPeople }>次のSTEPへ</button>
                    </div>
                </div>
            </>
        );
    }

    dateRender() {
        return(
            <>
                <div className="row form-group" ref='dateRender'>
                    <div className="col-6">
                        <label>チェックイン</label>
                        <input
                            type="date"
                            required
                            className="form-control date-selector"
                            value={this.state.checkin}
                            onChange={this.onChangeCheckin}
                        />
                    </div>
                    <div className="col-6">
                        <label>チェックアウト</label>
                        <input
                            type="date"
                            required
                            className="form-control date-selector"
                            value={this.state.checkout}
                            onChange={this.onChangeCheckout}
                        />
                    </div>
                </div>
                <div className="col-12 text-center">
                    <div className="form-group py-4">
                        <button type="button" className="btn" onClick={ this.selectDetail }>次のSTEPへ</button>
                    </div>
                </div>
            </>
        );
    }

    peopleRender() {
        return(
            <>
                <div className="col-10" ref='peopleRender'>
                    <div className="row justify-content-center py-3">
                        <div className="col-5"><label>大人 (13歳以上)</label></div>
                        <div className="col-2">
                            <input
                                type="number"
                                required
                                className="form-control"
                                min="1"
                                max="13"
                                value={this.state.adult_no}
                                onChange={this.onChangeAdult}
                            />
                        </div>
                        <div className="col-1">
                            <label>名様</label>
                        </div>
                    </div>
                    <div className="row justify-content-center py-3">
                        <div className="col-5"><label>小学生 (7歳から12歳まで)</label></div>
                        <div className="col-2">
                            <input
                                type="number"
                                required
                                className="form-control"
                                min="0"
                                max="13"
                                value={this.state.middle_no}
                                onChange={this.onChangeMiddle}
                            />
                        </div>
                        <div className="col-1">
                            <label>名様</label>
                        </div>
                    </div>
                    <div className="row justify-content-center py-3">
                        <div className="col-5"><label>未就学児 (4歳から6歳まで)</label></div>
                        <div className="col-2">
                            <input
                                type="number"
                                required
                                className="form-control"
                                min="0"
                                max="13"
                                value={this.state.child_no}
                                onChange={this.onChangeChild}
                                value={this.state.child_no}
                                onChange={this.onChangeChild}
                            />
                        </div>
                        <div className="col-1">
                            <label>名様</label>
                        </div>
                    </div>
                    <div className="row justify-content-center py-3">
                        <div className="col-5"><label>幼児 (0歳から3歳まで)</label></div>
                        <div className="col-2">
                            <input
                                type="number"
                                required
                                className="form-control"
                                min="0"
                                max="13"
                                value={this.state.baby_no}
                                onChange={this.onChangeBaby}
                            />
                        </div>
                        <div className="col-1">
                            <label>名様</label>
                        </div>
                    </div>
                </div>
                <div className="col-12 text-center">
                    <div className="form-group py-4">
                        <button type="button" className="btn" onClick={ this.selectDate }>次のSTEPへ</button>
                    </div>
                </div>
            </>
        );
    }

    detailRender() {
        return(
            <>
                <div className="col-8"  ref='detailRender'>
                    <div className="row justify-content-center py-2">
                        <div className="col-3"><label>朝食</label></div>
                        <div className="col-3">
                            <select
                            required
                            className="form-control"
                            value={this.state.food}
                            onChange={this.onChangeFood}>
                                <option value="朝食なし">朝食なし</option>
                                <option value="朝食あり">朝食あり</option>
                            </select>
                        </div>
                    </div>
                    <div className="row justify-content-center py-2">
                        <div className="col-3"><label>到着時刻</label></div>
                        <div className="col-3">
                            <input
                                type="time"
                                required
                                className="form-control"
                                value={this.state.arrival}
                                onChange={this.onChangeArrival}
                            />
                        </div>
                    </div>
                    <div className="row justify-content-center py-2">
                        <div className="col-3"><label>交通手段</label></div>
                        <div className="col-3">
                            <select
                            required
                            className="form-control"
                            value={this.state.access}
                            onChange={this.onChangeAccess}>
                                <option value="自動車">自動車</option>
                                <option value="列車">列車</option>
                                <option value="バス">バス</option>
                                <option value="パラシュート">パラシュート</option>
                            </select>
                        </div>
                    </div>
                    <label>ご要望記入欄</label>
                    <textarea
                    className="form-control"
                    required
                    value={this.state.description}
                    onChange={this.onChangeDescription}
                    ></textarea>
                </div>
                <div className="col-12 text-center">
                    <div className="form-group py-4">
                        <button type="button" className="btn confirm" onClick={ this.selectConfirm }>入力確認へ</button>
                    </div>
                </div>
            </>
        );
    }

    confirmRender() {
        return(
            <>
                <div className="col-8"  ref='confirmRender'>
                    {/* TODO 確認画面 */}
                </div>
                <div className="col-12 text-center">
                    <div className="form-group py-4">
                        <button type="button" className="btn confirm">Eメールに送信</button>
                    </div>
                </div>
            </>
        );
    }

    render() {
        return (
            <div className="reservation">
                <div className="reserve-modal" ref='reserveWindow'>
                    <button className="btn px-5 close-button"
                        onClick={
                            this.props.closeReservation
                        }
                    >
                        <i className="fas fa-times"></i>
                    </button>
                    <div className="row justify-content-center">
                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <p className={`nav-link ${this.state.isContactSelected ? 'active' : ''}`} onClick={ this.selectContact }><text className="small">STEP 1</text><br />お名前/連絡先</p>
                            </li>
                            <li className="nav-item">
                                <p className={`nav-link ${this.state.isPeopleSelected ? 'active' : ''}`} onClick={ this.selectPeople }><text className="small">STEP 2</text><br />人数</p>
                            </li>
                            <li className="nav-item">
                                <p className={`nav-link ${this.state.isDateSelected ? 'active' : ''}`} onClick={ this.selectDate }><text className="small">STEP 3</text><br />予定日</p>
                            </li>
                            <li className="nav-item">
                                <p className={`nav-link ${this.state.isDetailSelected ? 'active' : ''}`} onClick={ this.selectDetail }><text className="small">STEP 4</text><br />朝食/交通手段など</p>
                            </li>
                            <li className="nav-item">
                                <p className={`nav-link ${this.state.isConfirmSelected ? 'active-confirm' : ''}`} onClick={ this.selectConfirm }><text className="small">STEP 5</text><br />入力確認</p>
                            </li>
                        </ul>
                    </div>
                    <div className="py-5 row justify-content-center reserve-content">
                        { this.state.isContactSelected == true ? this.contactRender() : '' }
                        { this.state.isPeopleSelected ? this.peopleRender() : '' }
                        { this.state.isDateSelected ? this.dateRender() : '' }
                        { this.state.isDetailSelected ? this.detailRender() : '' }
                        { this.state.isConfirmSelected ? this.confirmRender() : '' }
                    </div>
                </div>
            </div>
        );
    }
}