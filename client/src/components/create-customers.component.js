import React, { Component, Fragment } from 'react';
import Form from 'react-bootstrap/Form';

import AdminNavigation from "./navbar.component";
import FloorPlan from "./floorplan.component";

import axios from 'axios';
import e from 'cors';

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
        this.onChangeRoom = this.onChangeRoom.bind(this);
        this.handleChangeManualRoomSelector = this.handleChangeManualRoomSelector.bind(this);
        /* this.getReserveRooms = this.getReserveRooms.bind(this);
        this.getAvailableRooms = this.getAvailableRooms.bind(this);
        this.onChangeRoom = this.onChangeRoom.bind(this); */

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
            manualRoomSelector: false,
            allRooms: [],
            unavailableRooms: ['307', '401', '308'],
            selectedRooms: {
                '301': false,
                '302': false,
                '303': false,
                '305': false,
                '306': false,
                '307': false,
                '308': false,
                '401': false,
                '402': false,
                '403': false,
                '405': false
            }
        }
    }

    componentDidMount() {
        // get fees
        this.getStayAdult();
        this.getStayMiddle();
        this.getStayChild();
        this.getStayBaby();
        this.onChangeRoom();
        
        let check_in = new Date();
        let check_out = new Date();
        const checkin = new Date(check_in.setDate(check_in.getDate() + 3));
        const checkout = new Date(check_out.setDate(check_out.getDate() + 4));
        this.setState({
            checkin: new Date(checkin).toISOString().split('T')[0],
            checkout: new Date(checkout).toISOString().split('T')[0]
        });

        // get all rooms
        axios.get('https://aitoku.herokuapp.com/rooms')
        .then(response => {
            this.setState({ allRooms: response.data })
        })
        .catch((error) => {
            console.log(error);
        })

        // get rooms
        const adult_no = this.state.adult_no;;
        const middle_no = this.state.middle_no;
        const child_no = this.state.child_no;
        const baby_no = this.state.baby_no;
        this.onChangeRoom(adult_no, middle_no, child_no, baby_no);
    }

    getBreakfastAdult() {
        axios.get('https://aitoku.herokuapp.com/prices/5faca682803cf55ec0675073')
        .then(response => {
            this.setState({ adult_fee: response.data.amount })
        })
        .catch((error) => {
            console.log(error);
        })
    }

    getBreakfastMiddle() {
        axios.get('https://aitoku.herokuapp.com/prices/5faca6ea803cf55ec0675074')
        .then(response => {
            this.setState({ middle_fee: response.data.amount })
        })
        .catch((error) => {
            console.log(error);
        })
    }

    getBreakfastChild() {
        axios.get('https://aitoku.herokuapp.com/prices/5faca717803cf55ec0675075')
        .then(response => {
            this.setState({ child_fee: response.data.amount })
        })
        .catch((error) => {
            console.log(error);
        })
    }

    getBreakfastBaby() {
        axios.get('https://aitoku.herokuapp.com/prices/5faca739803cf55ec0675076')
        .then(response => {
            this.setState({ baby_fee: response.data.amount })
        })
        .catch((error) => {
            console.log(error);
        })
    }

    getStayAdult() {
        axios.get('https://aitoku.herokuapp.com/prices/5faca770803cf55ec0675077')
        .then(response => {
            this.setState({ adult_fee: response.data.amount })
        })
        .catch((error) => {
            console.log(error);
        })
    }

    getStayMiddle() {
        axios.get('https://aitoku.herokuapp.com/prices/5faca77f803cf55ec0675078')
        .then(response => {
            this.setState({ middle_fee: response.data.amount })
        })
        .catch((error) => {
            console.log(error);
        })
    }

    getStayChild() {
        axios.get('https://aitoku.herokuapp.com/prices/5faca78e803cf55ec0675079')
        .then(response => {
            this.setState({ child_fee: response.data.amount })
        })
        .catch((error) => {
            console.log(error);
        })
    }

    getStayBaby() {
        axios.get('https://aitoku.herokuapp.com/prices/5faca798803cf55ec067507a')
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
        const adult_no = e.target.value;
        const middle_no = this.state.middle_no;
        const child_no = this.state.child_no;
        const baby_no = this.state.baby_no;
        this.setState({
            adult_no: e.target.value
        });
        this.onChangeRoom(adult_no, middle_no, child_no, baby_no);
    }

    onChangeMiddle(e) {
        const adult_no = this.state.adult_no;
        const middle_no = e.target.value;
        const child_no = this.state.child_no;
        const baby_no = this.state.baby_no;
        this.setState({
            middle_no: e.target.value
        });
        this.onChangeRoom(adult_no, middle_no, child_no, baby_no);
    }

    onChangeChild(e) {
        const adult_no = this.state.adult_no;
        const middle_no = this.state.middle_no;
        const child_no = e.target.value;
        const baby_no = this.state.baby_no;
        this.setState({
            child_no: e.target.value
        });
        this.onChangeRoom(adult_no, middle_no, child_no, baby_no);
    }

    onChangeBaby(e) {
        const adult_no = this.state.adult_no;
        const middle_no = this.state.middle_no;
        const child_no = this.state.child_no;
        const baby_no = e.target.value;
        this.setState({
            baby_no: e.target.value
        });
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

    handleChangeManualRoomSelector(e){
        const adult_no = this.state.adult_no;
        const middle_no = this.state.middle_no;
        const child_no = this.state.child_no;
        const baby_no = this.state.baby_no;
        
        this.state.manualRoomSelector === false ?
        this.setState({
            rooms: [],
            selectedRooms: {
                '301': false,
                '302': false,
                '303': false,
                '305': false,
                '306': false,
                '307': false,
                '308': false,
                '401': false,
                '402': false,
                '403': false,
                '405': false
            }
        })
        :
        this.onChangeRoom(adult_no, middle_no, child_no, baby_no);
        
        this.setState({manualRoomSelector: e.target.checked});
    }

    async handleChangeSelectRooms(roomNo, e){
        var selectedRooms = this.state.selectedRooms;
        selectedRooms[roomNo] = e.target.checked;
        await this.setState({
            selectedRooms: selectedRooms
        });
        var setRooms = [];
        for (const [key, value] of Object.entries(selectedRooms)) {
            if (value === true) {
                setRooms.push(key)
            }
        }
        this.setState({
           rooms: setRooms 
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

        axios.post('https://aitoku.herokuapp.com/customers/add', customer) 
            .then(res => console.log(res.data) + setTimeout(function(){ window.location = '/admin';}, 100));
    }

    /* // step 1
    getReserveRooms() {
        const params = {
            checkin: this.state.checkin,
            checkout: this.state.checkout
        }
        
        axios.get('https://aitoku.herokuapp.com/schedule/getReservedRooms', { params: params })
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
    } */
    
    //step 2
    /* getAvailableRooms(capacity, room) {
        const reserveRooms = this.state.reserveRooms;
        const params = {
            reserveRooms: reserveRooms,
            capacity: capacity,
            room: room
        }

        axios.get('https://aitoku.herokuapp.com/schedule/availRooms', { params: params })
        .then(response => {
            const availableRooms = [];
            response.data.map((room) => {
                availableRooms.push(room._id)
            })
            // filter duplicate index
            availableRooms.filter(function(x, i, self) {
                return self.indexOf(x) === i;
            });
            this.setState({
                rooms: availableRooms
            });
        });
    } */
    
    onChangeRoom(adult_no, middle_no, child_no, baby_no) {
        const meanValue = adult_no*1.0 + middle_no*0.75 + child_no*0.5 + baby_no*0;

        if ( meanValue <13 ){
            // const result = '4room * 3';
            this.setState({
                rooms: ['301', '302', '303']
            })
            if( meanValue <11 ){
                // const result = '5room * 2 or 4room * 3';
                this.setState({
                    rooms: ['307', '306']
                })
                if( meanValue <10 ){
                    // const result = '5 + 4room * 1 or 4room * 3';
                    this.setState({
                        rooms: ['301', '307']
                    })
                    if( meanValue <9 ){
                        // const result = '4room * 2';
                        this.setState({
                            rooms: ['301', '302']
                        })
                        if( meanValue <6 ){
                            // const result = '5room * 1 or 4room * 2';
                            this.setState({
                                rooms: ['307']
                            })
                            if( meanValue <5 ){
                                // const result = '4room * 1';
                                this.setState({
                                    rooms: ['301']
                                })
                                if( meanValue <3 ){
                                    // const result = '2room * 1';
                                    this.setState({
                                        rooms: ['305']
                                    })
                                    if( meanValue <1 ){
                                        // const result = '子供だけでは宿泊できません';
                                        this.setState({
                                            rooms: ['']
                                        })
                                        if( meanValue <=0 ){
                                            // const result = '0以下';
                                            this.setState({
                                                rooms: ['']
                                            })
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            
        } else {
            const result = 'over';
            this.setState({
                rooms: ['']
            });
        }
    }

    priceList() {
        const msDiff = new Date(this.state.checkout).getTime() - new Date(this.state.checkin).getTime();
        const duration = Math.floor(msDiff / (1000 * 60 * 60 * 24));
        return (
            <div>
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
        //const allRooms = this.state.allRooms;
        return (
            <div>
                <label className="py-4">部屋割り</label>
                <Form.Check
                    type="switch"
                    className="room-switcher"
                    id="custom-select-room"
                    label={this.state.manualRoomSelector === true ? '手動モード' : '自動モード'}
                    checked={this.state.manualRoomSelector}
                    onChange={this.handleChangeManualRoomSelector}
                />
                {this.state.manualRoomSelector === true ?
                // select rooms manually
                <div>
                    <div className="row py-3">
                        {this.state.allRooms.map((oneRoom) => {
                            return (
                                <div className="col-4 col-lg-1">
                                    <input
                                        className={`form-check-input ${this.state.unavailableRooms.includes(oneRoom.title) === false ? 'unable-room-checkbox' : 'disable-room-checkbox'}`}
                                        type="checkbox"
                                        value={oneRoom.title}
                                        id={oneRoom._id}
                                        disabled={this.state.unavailableRooms.includes(oneRoom.title)}
                                        checked={this.state.selectedRooms[oneRoom.title]}
                                        onChange={(e) => this.handleChangeSelectRooms(oneRoom.title, e)}
                                    />
                                    <label
                                        /* class="form-check-label" */
                                        className={`form-check-label ${this.state.unavailableRooms.includes(oneRoom.title) === true ? 'text-danger disable-room-label' : 'unable-room-label'}`}
                                        htmlFor={oneRoom._id}>
                                        {oneRoom.title}号室
                                    </label>
                                    {this.state.unavailableRooms.includes(oneRoom.title) === true ? <p className="font-weight-light text-danger">満室</p> : <p className="font-weight-light">空室</p>}
                                </div>
                            );
                        })}
                    </div>
                    <FloorPlan
                        unavailableRooms={this.state.unavailableRooms}
                        selectedRooms={this.state.rooms}
                        clickable={true}
                    />
                </div>
                :
                // select rooms automatically
                <div>
                    <div>
                    </div>
                    <FloorPlan
                        unavailableRooms={['']}
                        selectedRooms={this.state.rooms}
                        clickable={false}
                    />
                </div>
                }
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
                                <div className="row border p-2 mb-3 m-1 ninzu">
                                    <div className="col-3 form-group">
                                        <label>大人(13-)</label>
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
                                    <div className="col-3 form-group">
                                        <label>小学生(7-12)</label>
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
                                    <div className="col-3 form-group">
                                        <label>未就学児(4-6)</label>
                                        <input
                                            type="number"
                                            required
                                            className="form-control"
                                            min="0"
                                            max="13"
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
                                            min="0"
                                            max="13"
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
                        <div className="py-2 border-bottom">
                            { this.priceList() }
                            { this.roomList() }
                        </div>
                    </form>
                </div>
            </Fragment>
        )
    }
}