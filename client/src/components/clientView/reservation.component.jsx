import React, { Component } from 'react';
import sr from '../../scrollReveal';

export default class Reservation extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }

    }
    
    componentDidMount() {
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

    render() {
        return (
            <div className="reservation">
                <div className="reserve-modal" ref='reserveWindow'>
                    <button className="btn px-5"
                        onClick={
                            this.props.closeReservation
                        }
                    >
                        <i className="fas fa-times"></i>
                    </button>
                    <div className="row px-5">
                            <div className="col-4">
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
                            <div className="col-8">
                                <div className="row">
                                    <div className="col-6 form-group">
                                        <label>チェックイン</label>
                                        <input
                                            type="date"
                                            required
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="col-6 form-group">
                                        <label>チェックアウト</label>
                                        <input
                                            type="date"
                                            required
                                            className="form-control"
                                        />
                                    </div>
                                </div>
                                <label>人数</label>
                                <div className="row border p-2 mb-3 m-1 ninzu">
                                    <div className="col-3 form-group">
                                        <label>大人(13-)</label>
                                        <input
                                            type="number"
                                            required
                                            className="form-control"
                                            min="1"
                                            max="13"
                                        />
                                    </div>
                                    <div className="col-3 form-group">
                                        <label>小学生(7-12)</label>
                                        <input
                                            type="number"
                                            required
                                            className="form-control"
                                            min="0"
                                            max="13"
                                        />
                                    </div>
                                    <div className="col-3 form-group">
                                        <label>未就学児(4-6)</label>
                                        <input
                                            type="number"
                                            required
                                            className="form-control"
                                            min="0"
                                            max="13"
                                        />
                                    </div>
                                    <div className="col-3 form-group">
                                        <label>幼児(0-3)</label>
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
                            <div className="col-12 form-group">
                                <div className="row justify-content-end">
                                    <div className="col-2 form-group">
                                        <label>朝食</label>
                                        <select
                                        required
                                        className="form-control">
                                            <option value="朝食なし">朝食なし</option>
                                            <option value="朝食あり">朝食あり</option>
                                        </select>
                                    </div>
                                    <div className="col-2 form-group">
                                        <label>到着時刻</label>
                                        <input
                                            type="time"
                                            required
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="col-2 form-group">
                                        <label>交通手段</label>
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
                            <div className="form-group pb-4">
                                <input type="submit" value="予約" className="btn btn-outline-secondary" />
                            </div>
                        </div>
                </div>
            </div>
        );
    }
}