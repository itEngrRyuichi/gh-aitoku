import React, { Component, Fragment } from 'react';

import AdminNavigation from "./adminnavbar.component";

import axios from 'axios';

export default class CreateCustomers extends Component {
    constructor(props) {
        super(props);

        this.getBreakfastAdult = this.getBreakfastAdult.bind(this);
        this.getBreakfastMiddle = this.getBreakfastMiddle.bind(this);
        this.getBreakfastChild = this.getBreakfastChild.bind(this);
        this.getBreakfastBaby = this.getBreakfastBaby.bind(this);
        this.getStayAdult = this.getStayAdult.bind(this);
        this.getStayMiddle = this.getStayMiddle.bind(this);
        this.getStayChild = this.getStayChild.bind(this);
        this.getStayBaby = this.getStayBaby.bind(this);
        this.onChangeCheckin = this.onChangeCheckin.bind(this);
        this.onChangeCheckout = this.onChangeCheckout.bind(this);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeAdult = this.onChangeAdult.bind(this);
        this.onChangeMiddle = this.onChangeMiddle.bind(this);
        this.onChangeChild = this.onChangeChild.bind(this);
        this.onChangeBaby = this.onChangeBaby.bind(this);
        this.onChangeArrival = this.onChangeArrival.bind(this);
        this.onChangeAccess = this.onChangeAccess.bind(this);
        this.onChangeFood = this.onChangeFood.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.getReserveRooms = this.getReserveRooms.bind(this);
        this.getAvailableRooms = this.getAvailableRooms.bind(this);
        this.onChangeRoom = this.onChangeRoom.bind(this);

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
            reserveRooms: [],
        }
    }

    componentDidMount() {
        // get fees
        this.getStayAdult();
        this.getStayMiddle();
        this.getStayChild();
        this.getStayBaby();
        const adult_no = this.state.adult_no;
        const middle_no = this.state.middle_no;
        const child_no = this.state.child_no;
        const baby_no = this.state.baby_no;
        
        let check_in = new Date();
        let check_out = new Date();
        const checkin = new Date(check_in.setDate(check_in.getDate() + 3));
        const checkout = new Date(check_out.setDate(check_out.getDate() + 4));
        console.log(checkin, checkout);
        this.setState({
            checkin: new Date(checkin).toISOString().split('T')[0],
            checkout: new Date(checkout).toISOString().split('T')[0]
        });
        
        this.onChangeRoom(adult_no, middle_no, child_no, baby_no);
    }

    getBreakfastAdult() {
        axios.get('https://guesthouseaitoku.herokuapp.com/prices/5faca682803cf55ec0675073')
        .then(response => {
            this.setState({ adult_fee: response.data.amount })
        })
        .catch((error) => {
            console.log(error);
        })
    }

    getBreakfastMiddle() {
        axios.get('https://guesthouseaitoku.herokuapp.com/prices/5faca6ea803cf55ec0675074')
        .then(response => {
            this.setState({ middle_fee: response.data.amount })
        })
        .catch((error) => {
            console.log(error);
        })
    }

    getBreakfastChild() {
        axios.get('https://guesthouseaitoku.herokuapp.com/prices/5faca717803cf55ec0675075')
        .then(response => {
            this.setState({ child_fee: response.data.amount })
        })
        .catch((error) => {
            console.log(error);
        })
    }

    getBreakfastBaby() {
        axios.get('https://guesthouseaitoku.herokuapp.com/prices/5faca739803cf55ec0675076')
        .then(response => {
            this.setState({ baby_fee: response.data.amount })
        })
        .catch((error) => {
            console.log(error);
        })
    }

    getStayAdult() {
        axios.get('https://guesthouseaitoku.herokuapp.com/prices/5faca770803cf55ec0675077')
        .then(response => {
            this.setState({ adult_fee: response.data.amount })
        })
        .catch((error) => {
            console.log(error);
        })
    }

    getStayMiddle() {
        axios.get('https://guesthouseaitoku.herokuapp.com/prices/5faca77f803cf55ec0675078')
        .then(response => {
            this.setState({ middle_fee: response.data.amount })
        })
        .catch((error) => {
            console.log(error);
        })
    }

    getStayChild() {
        axios.get('https://guesthouseaitoku.herokuapp.com/prices/5faca78e803cf55ec0675079')
        .then(response => {
            this.setState({ child_fee: response.data.amount })
        })
        .catch((error) => {
            console.log(error);
        })
    }

    getStayBaby() {
        axios.get('https://guesthouseaitoku.herokuapp.com/prices/5faca798803cf55ec067507a')
        .then(response => {
            this.setState({ baby_fee: response.data.amount })
        })
        .catch((error) => {
            console.log(error);
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
        this.onChangeRoom(adult_no, middle_no, child_no, baby_no);    }

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
        if (e.target.value === '朝食あり') {
            this.getBreakfastAdult();
            this.getBreakfastMiddle();
            this.getBreakfastChild();
            this.getBreakfastBaby();
        } else {
            this.getStayAdult();
            this.getStayMiddle();
            this.getStayChild();
            this.getStayBaby();
        }
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

        axios.post('https://guesthouseaitoku.herokuapp.com/customers/add', customer) 
            .then(res => console.log(res.data));

        window.location = '/admin/';
    }

    // step 1
    getReserveRooms() {
        const params = {
            checkin: this.state.checkin,
            checkout: this.state.checkout
        }
        
        axios.get('https://guesthouseaitoku.herokuapp.com/schedule/getReservedRooms', { params: params })
        .then(response => {
            const reserveRooms = [];
            response.data.map((customer) => {
                customer.rooms.map((room) => {
                    reserveRooms.push(room.title)
                })
            })
            // filter duplicate index
            reserveRooms.filter(function(x, i, self) {
                return self.indexOf(x) === i;
            });
            this.setState({
                reserveRooms: reserveRooms
            });
        })
    }
    
    //step 2
    getAvailableRooms(capacity, room) {
        const reserveRooms = this.state.reserveRooms;
        const params = {
            reserveRooms: reserveRooms,
            capacity: capacity,
            room: room
        }

        axios.get('https://guesthouseaitoku.herokuapp.com/schedule/availRooms', { params: params })
        .then(response => {
            const availableRooms = [];
            response.data.map((room) => {
                availableRooms.push(room._id)
            })
            // filter duplicate index
            /* availableRooms.filter(function(x, i, self) {
                return self.indexOf(x) === i;
            }); */
            this.setState({
                rooms: availableRooms,
                room: room
            });
        });
    }
    
    onChangeRoom(adult_no, middle_no, child_no, baby_no) {
        const meanValue = adult_no*1.0 + middle_no*0.75 + child_no*0.5 + baby_no*0;

        if ( meanValue <13 ){
            const result = '4room * 3';
            this.setState({
                room: 3
            })
            if( meanValue <11 ){
                const result = '5room * 2 or 4room * 3';
                this.setState({
                    room: 2
                })
                if( meanValue <10 ){
                    const result = '5 + 4room * 1 or 4room * 3';
                    this.setState({
                        room: 2
                    })
                    if( meanValue <9 ){
                        const result = '4room * 2';
                        this.setState({
                            room: 2
                        })
                        if( meanValue <6 ){
                            const result = '5room * 1 or 4room * 2';
                            this.setState({
                                room: 1
                            })
                            if( meanValue <5 ){
                                const result = '4room * 1';
                                this.setState({
                                    room: 1
                                })
                                if( meanValue <3 ){
                                    const result = '2room * 1';
                                    if( meanValue <1 ){
                                        const result = '子供だけでは宿泊できません';
                                        this.setState({
                                            room: '子供だけでは宿泊できません'
                                        })
                                        if( meanValue <=0 ){
                                            const result = '0以下';
                                            this.setState({
                                                room: '0以下'
                                            })
                                            return console.log(result);
                                        }
                                        return console.log(result);
                                    }
                                    return console.log(result);
                                }
                                return console.log(result);
                            }
                            return console.log(result);
                        }
                        return console.log(result);
                    }
                    return console.log(result);
                }
                return console.log(result);
            }
            return console.log(result);
        } else {
            const result = 'over';
            this.setState({
                room: 'over'
            })
            return console.log(result);
        }
    }

    priceList() {
        const msDiff = new Date(this.state.checkout).getTime() - new Date(this.state.checkin).getTime();
        const duration = Math.floor(msDiff / (1000 * 60 * 60 * 24));
        return (
            <div className="col-8">
                <label className="py-4">料金内訳 -{this.state.food}-</label>
                <table className="table uchiwake">
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
                        <tr>
                            <th>合計</th>
                            <td colSpan="3"></td>
                            <td>{(this.state.adult_no*this.state.adult_fee + this.state.middle_no*this.state.middle_fee + this.state.child_no*this.state.child_fee + this.state.baby_no*this.state.baby_fee)*duration}円</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }

    roomList() {
        return (
            <div className="col-2">
                <label className="py-4">部屋割り</label>

            </div>
        );
    }

    render() {
        return (
            <Fragment>
                <AdminNavigation />
                <div className="container">
                    <p className="pt-5 title">新規予約</p>
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
                                {/* <div className="row justify-content-end">
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
                                        <label>お部屋番号</label>
                                        <input
                                            type="text"
                                            required
                                            className="form-control"
                                            readOnly
                                            value={this.state.room}
                                        />
                                    </div>
                                </div> */}
                                <label>ご要望記入欄</label>
                                <textarea
                                className="form-control"
                                value={this.state.description}
                                onChange={this.onChangeDescription}
                                required
                                ></textarea>
                            </div>
                        </div>
                        <div className="form-group pb-4">
                            <input type="submit" value="予約" className="btn btn-outline-secondary" />
                        </div>
                        <div className="row py-2 border-bottom">
                            { this.priceList() }
                            { this.roomList() }
                        </div>
                    </form>
                </div>
            </Fragment>
        )
    }
}