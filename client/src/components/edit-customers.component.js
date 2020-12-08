import React, { Component } from 'react';
import axios from 'axios';

export default class EditCustomers extends Component {
    constructor(props) {
        super(props);

        this.onChangeCheckin = this.onChangeCheckin.bind(this);
        this.onChangeCheckout = this.onChangeCheckout.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeAdult = this.onChangeAdult.bind(this);
        this.onChangeMiddle = this.onChangeMiddle.bind(this);
        this.onChangeChild = this.onChangeChild.bind(this);
        this.onChangeBaby = this.onChangeBaby.bind(this);
        this.onChangeRoom = this.onChangeRoom.bind(this);
        this.onChangeArrival = this.onChangeArrival.bind(this);
        this.onChangeAccess = this.onChangeAccess.bind(this);
        this.onChangeFood = this.onChangeFood.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            checkin: '',
            checkout: '',
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
            room: 1,
            arrival: '',
            access: '',
            food: '',
            description: '',
        }
    }

    componentDidMount() {
        axios.get('http://aitoku-server.herokuapp.com/customers/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    checkin: new Date(response.data.checkin).toISOString().split('T')[0],
                    checkout: new Date(response.data.checkout).toISOString().split('T')[0],
                    username: response.data.username,
                    phone: response.data.phone,
                    email: response.data.email,
                    adult_no: response.data.adult_no,
                    middle_no: response.data.middle_no,
                    child_no: response.data.child_no,
                    baby_no: response.data.baby_no,
                    adult_fee: response.data.adult_fee,
                    middle_fee: response.data.middle_fee,
                    child_fee: response.data.child_fee,
                    baby_fee: response.data.baby_fee,
                    room: response.data.room,
                    arrival: response.data.arrival,
                    access: response.data.access,
                    food: response.data.food,
                    description: response.data.description,
                })
            })
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

    onChangeAdult(e) {
        this.setState({
            adult_no: e.target.value
        });
        const adult_no = e.target.value;
        const middle_no = this.state.middle_no;
        const child_no = this.state.child_no;
        const baby_no = this.state.baby_no;
        this.onChangeRoom(adult_no, middle_no, child_no, baby_no);
    }

    onChangeMiddle(e) {
        this.setState({
            middle_no: e.target.value
        });
        const adult_no = this.state.adult_no;
        const middle_no = e.target.value;
        const child_no = this.state.child_no;
        const baby_no = this.state.baby_no;
        this.onChangeRoom(adult_no, middle_no, child_no, baby_no);
    }

    onChangeChild(e) {
        this.setState({
            child_no: e.target.value
        });
        const adult_no = this.state.adult_no;
        const middle_no = this.state.middle_no;
        const child_no = e.target.value;
        const baby_no = this.state.baby_no;
        this.onChangeRoom(adult_no, middle_no, child_no, baby_no);
    }

    onChangeBaby(e) {
        this.setState({
            baby_no: e.target.value
        });
        const adult_no = this.state.adult_no;
        const middle_no = this.state.middle_no;
        const child_no = this.state.child_no;
        const baby_no = e.target.value;
        this.onChangeRoom(adult_no, middle_no, child_no, baby_no);
    }

    onChangeRoom(adult_no, middle_no, child_no, baby_no) {
        console.log('onChagneRoom');
        const meanValue = (adult_no*1.0 + middle_no*0.5 + child_no*0.25 + baby_no*0) / 4 ;
        if (meanValue > 3) {
            this.setState({
                room: 'over'
            });
        } else if (meanValue > 2) {
            this.setState({
                room: 3
            });
        } else if (meanValue > 1) {
            this.setState({
                room: 2
            });
        } else if (meanValue > 0) {
            this.setState({
                room: 1
            });
        } else {
            this.setState({
                room: 'over'
            });
        }
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

    onSubmit(e) {
        e.preventDefault();

        const customer = {
            checkin: this.state.checkin,
            checkout: this.state.checkout,
            username: this.state.username,
            phone: this.state.phone,
            email: this.state.email,
            adult_no: this.state.adult_no,
            middle_no: this.state.middle_no,
            child_no: this.state.child_no,
            baby_no: this.state.baby_no,
            adult_fee: this.state.adult_fee,
            middle_fee: this.state.middle_fee,
            child_fee: this.state.child_fee,
            baby_fee: this.state.baby_fee,
            room: this.state.room,
            arrival: this.state.arrival,
            access: this.state.access,
            food: this.state.food,
            description: this.state.description,
        }

        console.log(customer);

        axios.post('http://aitoku-server.herokuapp.com/customers/update/'+this.props.match.params.id, customer) 
            .then(res => console.log(res.data));

        window.location = '/admin/';
    }

    priceList() {
        const msDiff = new Date(this.state.checkout).getTime() - new Date(this.state.checkin).getTime();
        const duration = Math.floor(msDiff / (1000 * 60 * 60 * 24));
        return (
            <>
                <label className="py-4">料金内訳 -{this.state.food}-</label>
                <div className="row justify-content-center py-2 border-bottom">
                    <table className="table uchiwake col-10">
                        <thead className="thead-light">
                            <tr>
                                <th></th>
                                <th>人数</th>
                                <th>費用</th>
                                <th>日数</th>
                                <th>合計費用</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th><i className="fas fa-male fa-2x pr-2 pl-1"></i> (大人)</th>
                                <td>{this.state.adult_no}</td>
                                <td>{this.state.adult_fee}</td>
                                <td>{duration}</td>
                                <td>{this.state.adult_no*this.state.adult_fee*duration}</td>
                            </tr>
                            <tr>
                                <th><i className="fas fa-child fa-lg pr-2"></i> (小学生)</th>
                                <td>{this.state.middle_no}</td>
                                <td>{this.state.middle_fee}</td>
                                <td>{duration}</td>
                                <td>{this.state.middle_no*this.state.middle_fee*duration}</td>
                            </tr>
                            <tr>
                                <th><i className="fas fa-child pr-2 pl-1"></i> (未就学児)</th>
                                <td>{this.state.child_no}</td>
                                <td>{this.state.child_fee}</td>
                                <td>{duration}</td>
                                <td>{this.state.child_no*this.state.child_fee*duration}</td>
                            </tr>
                            <tr>
                                <th><i className="fas fa-baby pr-2 pl-1"></i> (幼児)</th>
                                <td>{this.state.baby_no}</td>
                                <td>{this.state.baby_fee}</td>
                                <td>{duration}</td>
                                <td>{this.state.baby_no*this.state.baby_fee*duration}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="py-3 goukei">合計 {(this.state.adult_no*this.state.adult_fee + this.state.middle_no*this.state.middle_fee + this.state.child_no*this.state.child_fee + this.state.baby_no*this.state.baby_fee)*duration}円</p>
            </>
        );
    }

    render() {
        return (
            <div>
                <p className="pt-5 title">編集</p>
                <hr />
                <form onSubmit={this.onSubmit}>
                    <div className="row">
                        <div className="col-6">
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
                        <div className="col-6">
                            <div className="row">
                                <div className="col-6 form-group">
                                    <label>チェックイン</label>
                                    <input
                                        type="date"
                                        required
                                        className="form-control"
                                        value={this.state.checkin}
                                        onChange={this.onChangeCheckin}
                                    />
                                </div>
                                <div className="col-6 form-group">
                                    <label>チェックアウト</label>
                                    <input
                                        type="date"
                                        required
                                        className="form-control"
                                        value={this.state.checkout}
                                        onChange={this.onChangeCheckout}
                                    />
                                </div>
                            </div>
                            <label>人数</label>
                            <div className="row border p-3 mb-3 m-1 ninzu">
                                <div className="col-3 form-group">
                                    <label>大人(13-)</label>
                                    <input
                                        type="number"
                                        required
                                        className="form-control"
                                        value={this.state.adult_no}
                                        onChange={this.onChangeAdult}
                                    />
                                </div>
                                <div className="col-3 form-group">
                                    <label>小学生(7-12)</label>
                                    <input
                                        type="number"
                                        required
                                        className="form-control"
                                        value={this.state.middle_no}
                                        onChange={this.onChangeMiddle}
                                    />
                                </div>
                                <div className="col-3 form-group">
                                    <label>未就学児(4-6)</label>
                                    <input
                                        type="number"
                                        required
                                        className="form-control"
                                        value={this.state.child_no}
                                        onChange={this.onChangeChild}
                                    />
                                </div>
                                <div className="col-3 form-group">
                                    <label>幼児(0-3)</label>
                                    <input
                                        type="number"
                                        required
                                        className="form-control"
                                        value={this.state.baby_no}
                                        onChange={this.onChangeBaby}
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
                                    className="form-control"
                                    value={this.state.food}
                                    onChange={this.onChangeFood}>
                                        <option value="朝食なし">朝食なし</option>
                                        <option value="朝食あり">朝食あり</option>
                                    </select>
                                </div>
                                <div className="col-2 form-group">
                                    <label>お部屋数</label>
                                    <input
                                        type="text"
                                        required
                                        className="form-control"
                                        readOnly
                                        value={this.state.room}
                                    />
                                </div>
                                <div className="col-2 form-group">
                                    <label>到着時刻</label>
                                    <input
                                        type="time"
                                        required
                                        className="form-control"
                                        value={this.state.arrival}
                                        onChange={this.onChangeArrival}
                                    />
                                </div>
                                <div className="col-2 form-group">
                                    <label>交通手段</label>
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
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                            ></textarea>
                        </div>
                    </div>
                    <hr />
                    { this.priceList() }
                    <div className="form-group">
                        <input type="submit" value="編集" className="btn btn-outline-secondary" />
                    </div>
                </form>
            </div>
        )
    }
}