import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import axios from 'axios';

const Customer = props => (
    <tr>
        <td>{props.customer.checkin.substring(0,10)}</td>
        <td>{props.customer.checkout.substring(0,10)}</td>
        <td>
        <Dropdown>
            <Dropdown.Toggle variant="Secondary">
                {props.customer.username}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item><i className="far fa-envelope"></i> 　{props.customer.email}</Dropdown.Item>
                <Dropdown.Item><i className="fas fa-phone"></i> 　{props.customer.phone}</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        </td>
        <td>
        <Dropdown>
            <Dropdown.Toggle variant="Secondary">
                {(props.customer.adult_no) +
                (props.customer.middle_no) +
                (props.customer.child_no) +
                (props.customer.baby_no)} 名
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item><i className="fas fa-male fa-2x"></i>(大人) × {props.customer.adult_no}名</Dropdown.Item>
                <Dropdown.Item><i className="fas fa-child fa-lg"></i>(小学生) × {props.customer.middle_no}名</Dropdown.Item>
                <Dropdown.Item><i className="fas fa-child"></i>(未就学児) × {props.customer.child_no}名</Dropdown.Item>
                <Dropdown.Item><i className="fas fa-baby"></i>(幼児) × {props.customer.baby_no}名</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        </td>
        <td>
        <Dropdown>
            <Dropdown.Toggle variant="Secondary">
                {props.customer.room}部屋
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item>301 号室</Dropdown.Item>
                <Dropdown.Item>302 号室</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        </td>
        <td>{props.customer.arrival}</td>
        <td>{props.customer.access}</td>
        <td>{props.customer.food}</td>
        <td>
            <Dropdown>
                <Dropdown.Toggle variant="none">
                    {(props.customer.adult_no*props.customer.adult_fee + props.customer.middle_no*props.customer.middle_fee + props.customer.child_no*props.customer.child_fee + props.customer.baby_no*props.customer.baby_fee)*props.customer.duration}円
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <label className="pl-4">料金内訳 -{props.customer.food}-</label>
                    <br />
                    <p className="d-flex flex-row-reverse pr-3">予約日 : {props.customer.createdAt.substring(0,10)}</p>
                    <Dropdown.Item><i className="fas fa-male fa-2x"></i>(大人) {props.customer.adult_no}名 × {props.customer.adult_fee} × {props.customer.duration}日間 = {props.customer.adult_no*props.customer.adult_fee*props.customer.duration}円</Dropdown.Item>
                    <Dropdown.Item><i className="fas fa-child fa-lg"></i>(小学生) {props.customer.middle_no}名 × {props.customer.middle_fee} × {props.customer.duration}日間 = {props.customer.middle_no*props.customer.middle_fee*props.customer.duration}円</Dropdown.Item>
                    <Dropdown.Item><i className="fas fa-child"></i>(未就学児) {props.customer.child_no}名 × {props.customer.child_fee} × {props.customer.duration}日間 = {props.customer.child_no*props.customer.child_fee*props.customer.duration}円</Dropdown.Item>
                    <Dropdown.Item><i className="fas fa-baby"></i>(幼児) {props.customer.baby_no}名 × {props.customer.baby_fee} × {props.customer.duration}日間 = {props.customer.baby_no*props.customer.baby_fee*props.customer.duration}円</Dropdown.Item>
                    <hr />
                    <Dropdown.Item className="pb-3">合計 {(props.customer.adult_no*props.customer.adult_fee + props.customer.middle_no*props.customer.middle_fee + props.customer.child_no*props.customer.child_fee + props.customer.baby_no*props.customer.baby_fee)*props.customer.duration}円</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </td>
        <td>
        <Dropdown>
            <Dropdown.Toggle variant="btn btn-outline-info btn-sm">
                備考
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item>{props.customer.description}</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        <Link to={"/admin/edit/"+props.customer._id} className="btn btn-outline-secondary btn-sm">編集</Link>
        <br />
        <a href="#" className="btn btn-outline-danger btn-sm" onClick={() => { props.deleteCustomer(props.customer._id) }}>削除</a>
        </td>
    </tr>
)

export default class CustomersList extends Component {
    constructor(props) {
        super(props);

        this.deleteCustomer = this.deleteCustomer.bind(this);

        this.state = {
            customers: [],
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/customers/')
        .then(response => {
            this.setState({ customers: response.data })
        })
        .catch((error) => {
            console.log(error);
        })
    }

    deleteCustomer(id) {
        axios.delete('http://localhost:5000/customers/'+id)
            .then(res => console.log(res.data));
            this.setState({
                customers: this.state.customers.filter(el => el._id !== id)
            })
    }

    customersList() {
        return this.state.customers.map(currentcustomer => {
            return <Customer
                    customer={currentcustomer}
                    deleteCustomer={this.deleteCustomer}
                    key={currentcustomer._id}
                    />;
        })
    }

    render() {
        return (
            <div>
                <div className="pt-5 pb-3">
                    <p className="title">予約リスト</p>
                </div>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th><i className="fas fa-sign-in-alt"></i> CheckIn</th>
                            <th><i className="fas fa-sign-out-alt"></i> CheckOut</th>
                            <th><i className="fas fa-sort-alpha-down"></i> お名前</th>
                            <th><i className="fas fa-male"></i> 人数</th>
                            <th><i className="fas fa-door-open"></i> 部屋</th>
                            <th><i className="fas fa-plane-arrival"> 到着時刻</i></th>
                            <th><i className="fas fa-directions"></i> 交通手段</th>
                            <th><i className="fas fa-utensils"></i> 朝食</th>
                            <th><i className="fas fa-yen-sign"></i> 値段</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.customersList() }
                    </tbody>
                </table>
            </div>
        )
    }
}