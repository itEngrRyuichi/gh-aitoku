import React, { Component } from 'react';
import sr from '../../scrollReveal';

export default class Reservation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isContactSelected: true,
            isPeopleSelected: false,
            isDateSelected: false,
            isDetailSelected: false,
            isConfirmSelected: false,
        }
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
                            placeholder="山田太郎"
                        />
                    </div>
                    <div className="form-group">
                        <label>電話番号</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            placeholder="08012345678"
                        />
                    </div>
                    <div className="form-group">
                        <label>Eメール</label>
                        <input
                            type="text"
                            required
                            className="form-control"
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
                        />
                    </div>
                    <div className="col-6">
                        <label>チェックアウト</label>
                        <input
                            type="date"
                            required
                            className="form-control date-selector"
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
                <div className="col-8" ref='peopleRender'>
                    <div className="row justify-content-center py-3">
                        <div className="col-5"><label>大人 (13歳以上)</label></div>
                        <div className="col-3">
                            <input
                                type="number"
                                required
                                className="form-control"
                                min="1"
                                max="13"
                            />
                        </div>
                    </div>
                    <div className="row justify-content-center py-3">
                        <div className="col-5"><label>小学生 (7歳から12歳まで)</label></div>
                        <div className="col-3">
                            <input
                                type="number"
                                required
                                className="form-control"
                                min="0"
                                max="13"
                            />
                        </div>
                    </div>
                    <div className="row justify-content-center py-3">
                        <div className="col-5"><label>未就学児 (4歳から6歳まで)</label></div>
                        <div className="col-3">
                            <input
                                type="number"
                                required
                                className="form-control"
                                min="0"
                                max="13"
                            />
                        </div>
                    </div>
                    <div className="row justify-content-center py-3">
                        <div className="col-5"><label>幼児 (0歳から3歳まで)</label></div>
                        <div className="col-3">
                            <input
                                type="number"
                                required
                                className="form-control"
                                min="0"
                                max="13"
                            />
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
                            className="form-control">
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
                            />
                        </div>
                    </div>
                    <div className="row justify-content-center py-2">
                        <div className="col-3"><label>交通手段</label></div>
                        <div className="col-3">
                            <select
                            required
                            className="form-control">
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