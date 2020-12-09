import React, { Component, Fragment } from 'react';

import AdminNavigation from "./navbar.component";

import axios from 'axios';

export default class Settings extends Component {
    constructor(props) {
        super(props);

        this.state = {
            breakfast_adult: '',
            breakfast_middle: '',
            breakfast_child: '',
            breakfast_baby: '',
            stay_adult: '',
            stay_middle: '',
            stay_child: '',
            stay_baby: '',
            roomsFour: [],
            roomsFive: [],
            roomsTwo: []
        };

        this.getBreakfastAdult = this.getBreakfastAdult.bind(this);
        this.getBreakfastMiddle = this.getBreakfastMiddle.bind(this);
        this.getBreakfastChild = this.getBreakfastChild.bind(this);
        this.getBreakfastBaby = this.getBreakfastBaby.bind(this);
        this.getStayAdult = this.getStayAdult.bind(this);
        this.getStayMiddle = this.getStayMiddle.bind(this);
        this.getStayChild = this.getStayChild.bind(this);
        this.getStayBaby = this.getStayBaby.bind(this);
        this.onChangeBreakfastAdult = this.onChangeBreakfastAdult.bind(this);
        this.onChangeBreakfastMiddle = this.onChangeBreakfastMiddle.bind(this);
        this.onChangeBreakfastChild = this.onChangeBreakfastChild.bind(this);
        this.onChangeBreakfastBaby = this.onChangeBreakfastBaby.bind(this);
        this.onChangeStayAdult = this.onChangeStayAdult.bind(this);
        this.onChangeStayMiddle = this.onChangeStayMiddle.bind(this);
        this.onChangeStayChild = this.onChangeStayChild.bind(this);
        this.onChangeStayBaby = this.onChangeStayBaby.bind(this);
        this.onPriceSubmit = this.onPriceSubmit.bind(this);
        this.moveToUp = this.moveToUp.bind(this);
        this.moveToDown = this.moveToDown.bind(this);
    }

    componentDidMount() {
        this.getBreakfastAdult();
        this.getBreakfastMiddle();
        this.getBreakfastChild();
        this.getBreakfastBaby();
        this.getStayAdult();
        this.getStayMiddle();
        this.getStayChild();
        this.getStayBaby();
        axios.get('http://localhost:5000/rooms/priorityFour')
        .then(response => {
            this.setState({ roomsFour: response.data })
        })
        .catch((error) => {
            console.log(error);
        });
        axios.get('http://localhost:5000/rooms/priorityFive')
        .then(response => {
            this.setState({ roomsFive: response.data })
        })
        .catch((error) => {
            console.log(error);
        });
        axios.get('http://localhost:5000/rooms/priorityTwo')
        .then(response => {
            this.setState({ roomsTwo: response.data })
        })
        .catch((error) => {
            console.log(error);
        });
    }

    getBreakfastAdult() {
        axios.get('http://localhost:5000/prices/5faca682803cf55ec0675073')
        .then(response => {
            this.setState({ breakfast_adult: response.data.amount })
        })
        .catch((error) => {
            console.log(error);
        })
    }

    getBreakfastMiddle() {
        axios.get('http://localhost:5000/prices/5faca6ea803cf55ec0675074')
        .then(response => {
            this.setState({ breakfast_middle: response.data.amount })
        })
        .catch((error) => {
            console.log(error);
        })
    }

    getBreakfastChild() {
        axios.get('http://localhost:5000/prices/5faca717803cf55ec0675075')
        .then(response => {
            this.setState({ breakfast_child: response.data.amount })
        })
        .catch((error) => {
            console.log(error);
        })
    }

    getBreakfastBaby() {
        axios.get('https://guesthouseaitoku.herokuapp.com/prices/5faca739803cf55ec0675076')
        .then(response => {
            this.setState({ breakfast_baby: response.data.amount })
        })
        .catch((error) => {
            console.log(error);
        })
    }

    getStayAdult() {
        axios.get('https://guesthouseaitoku.herokuapp.com/prices/5faca770803cf55ec0675077')
        .then(response => {
            this.setState({ stay_adult: response.data.amount })
        })
        .catch((error) => {
            console.log(error);
        })
    }

    getStayMiddle() {
        axios.get('https://guesthouseaitoku.herokuapp.com/prices/5faca77f803cf55ec0675078')
        .then(response => {
            this.setState({ stay_middle: response.data.amount })
        })
        .catch((error) => {
            console.log(error);
        })
    }

    getStayChild() {
        axios.get('https://guesthouseaitoku.herokuapp.com/prices/5faca78e803cf55ec0675079')
        .then(response => {
            this.setState({ stay_child: response.data.amount })
        })
        .catch((error) => {
            console.log(error);
        })
    }

    getStayBaby() {
        axios.get('https://guesthouseaitoku.herokuapp.com/prices/5faca798803cf55ec067507a')
        .then(response => {
            this.setState({ stay_baby: response.data.amount })
        })
        .catch((error) => {
            console.log(error);
        })
    }

    onChangeBreakfastAdult(e){
        this.setState({
            breakfast_adult: e.target.value
        });
    }

    onChangeBreakfastMiddle(e){
        this.setState({
            breakfast_middle: e.target.value
        });
    }

    onChangeBreakfastChild(e){
        this.setState({
            breakfast_child: e.target.value
        });
    }

    onChangeBreakfastBaby(e){
        this.setState({
            breakfast_baby: e.target.value
        });
    }

    onChangeStayAdult(e){
        this.setState({
            stay_adult: e.target.value
        });
    }

    onChangeStayMiddle(e){
        this.setState({
            stay_middle: e.target.value
        });
    }

    onChangeStayChild(e){
        this.setState({
            stay_child: e.target.value
        });
    }

    onChangeStayBaby(e){
        this.setState({
            stay_baby: e.target.value
        });
    }

    onPriceSubmit(e) {
        e.preventDefault();

        axios.post('https://guesthouseaitoku.herokuapp.com/prices/update/5faca682803cf55ec0675073', { title:'breakfast_adult', amount:this.state.breakfast_adult})
            .then(res => console.log(res.data));
        axios.post('https://guesthouseaitoku.herokuapp.com/prices/update/5faca6ea803cf55ec0675074', { title:'breakfast_middle',  amount:this.state.breakfast_middle})
            .then(res => console.log(res.data));
        axios.post('https://guesthouseaitoku.herokuapp.com/prices/update/5faca717803cf55ec0675075', { title:'breakfast_child',  amount:this.state.breakfast_child})
            .then(res => console.log(res.data));
        axios.post('https://guesthouseaitoku.herokuapp.com/prices/update/5faca739803cf55ec0675076', { title:'breakfast_baby',  amount:this.state.breakfast_baby})
            .then(res => console.log(res.data));
        axios.post('https://guesthouseaitoku.herokuapp.com/prices/update/5faca770803cf55ec0675077', { title:'stay_adult',  amount:this.state.stay_adult})
            .then(res => console.log(res.data));
        axios.post('https://guesthouseaitoku.herokuapp.com/prices/update/5faca77f803cf55ec0675078', { title:'stay_middle',  amount:this.state.stay_middle})
            .then(res => console.log(res.data));
        axios.post('https://guesthouseaitoku.herokuapp.com/prices/update/5faca78e803cf55ec0675079', { title:'stay_child',  amount:this.state.stay_child})
            .then(res => console.log(res.data));
        axios.post('https://guesthouseaitoku.herokuapp.com/prices/update/5faca798803cf55ec067507a', { title:'stay_baby',  amount:this.state.stay_baby})
            .then(res => console.log(res.data));

        window.location = '/admin/';
    }

    moveToUp(id, priority) {
        const upperPriority = priority - 1
        // 上のリストを今のリストに
        axios.post('https://guesthouseaitoku.herokuapp.com/rooms/changetodown/', { priority: upperPriority }) 
            .then(res => console.log(res.data));
        // 今のリストを上に
        axios.post('https://guesthouseaitoku.herokuapp.com/rooms/movedtoup/'+id, { priority }) 
            .then(res => console.log(res.data));
        window.location = '/admin/settings';
    }

    moveToDown(id, priority) {
        const downerPriority = priority + 1
        // 下のリストを今のリストに
        axios.post('https://guesthouseaitoku.herokuapp.com/rooms/changetoup/', { priority: downerPriority }) 
            .then(res => console.log(res.data));
        // 今のリストを下に
        axios.post('https://guesthouseaitoku.herokuapp.com/rooms/movedtodown/'+id, { priority }) 
            .then(res => console.log(res.data));
        window.location = '/admin/settings';
    }

    FourRoomsList() {
        return this.state.roomsFour.map(currentroom => {
            return (
                <tr>
                    <td>{currentroom.priority}</td>
                    <td>{currentroom.title}</td>
                    <td>{currentroom.capacity}</td>
                    <td>{currentroom.priority > 1 ?
                        (
                            <a href="#" className="btn btn-outline-secondary btn-sm" onClick={() => { this.moveToUp(currentroom._id, currentroom.priority) }}><i className="far fa-arrow-alt-circle-up"></i> 上に</a>
                        )
                        :''}
                    <br />
                    {currentroom.priority < 7 ?
                        (
                            <a href="#" className="btn btn-outline-secondary btn-sm" onClick={() => { this.moveToDown(currentroom._id, currentroom.priority) }}><i className="far fa-arrow-alt-circle-down"></i> 下に</a>
                        )
                        :''}
                    </td>
                </tr>
            );
        })
    }

    FiveRoomsList() {
        return this.state.roomsFive.map(currentroom => {
            return (
                <tr>
                    <td>{currentroom.title}</td>
                    <td>{currentroom.capacity}</td>
                </tr>
            );
        })
    }

    TwoRoomsList() {
        return this.state.roomsTwo.map(currentroom => {
            return (
                <tr>
                    <td>{currentroom.title}</td>
                    <td>{currentroom.capacity}</td>
                </tr>
            );
        })
    }




    
    
    render() {
        return (
            <Fragment>
                <AdminNavigation />
                <div className="container">
                    <p className="pt-5 title">各種設定</p>
                    <hr />
                    <form onSubmit={this.onPriceSubmit}>
                        <label><i className="far fa-check-square"></i> 値段設定</label><br />
                        <div className="row">
                            <div className="col-6">
                                <label><i className="fas fa-utensils"></i> 朝食付き</label>
                                <div className="row border p-3 mb-3 m-1 ninzu">
                                    <div className="col-3 form-group">
                                        <label><i className="fas fa-male"></i> 大人</label>
                                        <input
                                            type="number"
                                            required
                                            className="form-control"
                                            value={this.state.breakfast_adult}
                                            onChange={this.onChangeBreakfastAdult}
                                        />
                                    </div>
                                    <div className="col-3 form-group">
                                        <label><i className="fas fa-child"></i> 小学生</label>
                                        <input
                                            type="number"
                                            required
                                            className="form-control"
                                            value={this.state.breakfast_middle}
                                            onChange={this.onChangeBreakfastMiddle}
                                        />
                                    </div>
                                    <div className="col-3 form-group">
                                        <label><i className="fas fa-child"></i> 未就学児</label>
                                        <input
                                            type="number"
                                            required
                                            className="form-control"
                                            value={this.state.breakfast_child}
                                            onChange={this.onChangeBreakfastChild}
                                        />
                                    </div>
                                    <div className="col-3 form-group">
                                        <label><i className="fas fa-baby"></i> 幼児</label>
                                        <input
                                            type="number"
                                            required
                                            className="form-control"
                                            value={this.state.breakfast_baby}
                                            onChange={this.onChangeBreakfastBaby}
                                        />
                                    </div>
                                </div>  
                            </div>
                            <div className="col-6">
                                <label><i className="fas fa-bed"></i> 朝食なし</label>
                                <div className="row border p-3 mb-3 m-1 ninzu">
                                    <div className="col-3 form-group">
                                        <label><i className="fas fa-male"></i> 大人</label>
                                        <input
                                            type="number"
                                            required
                                            className="form-control"
                                            value={this.state.stay_adult}
                                            onChange={this.onChangeStayAdult}
                                        />
                                    </div>
                                    <div className="col-3 form-group">
                                        <label><i className="fas fa-child"></i> 小学生</label>
                                        <input
                                            type="number"
                                            required
                                            className="form-control"
                                            value={this.state.stay_middle}
                                            onChange={this.onChangeStayMiddle}
                                        />
                                    </div>
                                    <div className="col-3 form-group">
                                        <label><i className="fas fa-child"></i> 未就学児</label>
                                        <input
                                            type="number"
                                            required
                                            className="form-control"
                                            value={this.state.stay_child}
                                            onChange={this.onChangeStayChild}
                                        />
                                    </div>
                                    <div className="col-3 form-group">
                                        <label><i className="fas fa-baby"></i> 幼児</label>
                                        <input
                                            type="number"
                                            required
                                            className="form-control"
                                            value={this.state.stay_baby}
                                            onChange={this.onChangeStayBaby}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="submit" value="更新" className="btn btn-outline-secondary" />
                        </div>
                    </form>
                    <div>
                        <hr />
                        <label><i className="far fa-check-square"></i> 部屋割り優先度設定</label>
                        <div className="row">
                            <div className="col-6">
                                <form>
                                    <label>4人部屋</label>
                                    <div className="form-group">
                                    </div>
                                    <table className="table">
                                        <thead className="thead-light">
                                            <tr>
                                                <th><i className="fas fa-hashtag"></i></th>
                                                <th><i className="fas fa-door-open"></i>号室</th>
                                                <th><i className="fas fa-users"></i>人数</th>
                                                <th><i className="fas fa-sort"></i> 入れ替え</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            { this.FourRoomsList() }
                                        </tbody>
                                    </table>
                                </form>
                            </div>
                            <div className="col-6">
                                <form>
                                    <label>5人部屋</label>
                                    <div className="form-group">
                                    </div>
                                    <table className="table">
                                        <thead className="thead-light">
                                            <tr>
                                                <th><i className="fas fa-door-open"></i>号室</th>
                                                <th><i className="fas fa-users"></i>人数</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            { this.FiveRoomsList() }
                                        </tbody>
                                    </table>
                                    <label>2人部屋 ベッドルーム</label>
                                    <div className="form-group">
                                    </div>
                                    <table className="table">
                                        <thead className="thead-light">
                                            <tr>
                                                <th><i className="fas fa-door-open"></i>号室</th>
                                                <th><i className="fas fa-users"></i>人数</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            { this.TwoRoomsList() }
                                        </tbody>
                                    </table>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}