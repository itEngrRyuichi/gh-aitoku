import React, { Component, Fragment } from 'react';

import AdminNavigation from "./navbar.component";

import axios from 'axios';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import { Modal, Button } from 'react-bootstrap'
import moment from 'moment';
import 'moment/locale/ja';

const localizer = momentLocalizer(moment);
const messages = {
    previous: '<<',
    next: '>>',
    today: '今日',
    month: '月',
    week: '週',
    day: '日',
    date: 'date',
    time: '時間',
    event: '予約',
    showMore: total => `+　他, ${total} 部屋の予約`
  };


export default class Schedule extends Component {
    constructor(props) {
        super(props);

        this.state = {
            events: [],
            isOpen: false,
            customers: []
        }

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    componentDidMount() {
        axios.get('https://guesthouseaitoku.herokuapp.com/schedule/')
        .then(response => {
            this.setState({ events: 
                response.data.map(currentcustomer => {
                    /* var reserveRooms = [];
                    currentcustomer.rooms.map((room) => {
                        reserveRooms.push(room.title + '号室')
                    }); */
                    return (
                        {
                            id: currentcustomer._id,
                            title: /* reserveRooms + ' ' + */ currentcustomer.username + '様 ' + 
                                (currentcustomer.adult_no + currentcustomer.middle_no + currentcustomer.child_no + currentcustomer.baby_no) + '名',
                            start: new Date(currentcustomer.checkin),
                            end: new Date(currentcustomer.checkout),
                        }
                    ); 
                })
            })
        })
        .catch((error) => {
            console.log(error);
        })
    }

    openModal(id) {
        axios.get('https://guesthouseaitoku.herokuapp.com/customers/'+id)
        .then(response => {
            this.setState({
                isOpen: true,
                customers: response.data
            })
            console.log(response.data)
        })
        .catch((error) => {
            console.log(error);
        })
    }

    closeModal() {
        this.setState({ 
            isOpen: false
        });
    }

    render() {
        return (
            <Fragment>
                <AdminNavigation />
                <div className="container">
                    <div>
                        <div className="pt-5 pb-3">
                            <p className="title">スケジュール</p>
                        </div>
                        <Calendar
                            messages={messages}
                            culture='pl-PL' 
                            localizer={localizer}
                            events={this.state.events}
                            timeslots={2}
                            startAccessor="start"
                            endAccessor="end"
                            views={['month', 'week', 'day']}
                            onSelectEvent={event => this.openModal(event.id)}
                            style={{ height: 800}}
                        />
                        <Modal
                            show={this.state.isOpen}
                            onHide={this.closeModal}
                            size="xl"
                        >
                        <Modal.Header closeButton>
                            <Modal.Title className="mx-3">ご予約内容</Modal.Title>
                        </Modal.Header>
                        <Modal.Body
                            className="mx-5"
                        >
                            <div className="row">
                                <div className="col-5">
                                    <div className="form-group">
                                        <label>お名前</label>
                                        <p>{this.state.customers.username} 様</p>
                                    </div>
                                    <div className="form-group">
                                        <label>電話番号</label>
                                        <p>{this.state.customers.phone}</p>
                                    </div>
                                    <div className="form-group">
                                        <label>Eメール</label>
                                        <p>{this.state.customers.email}</p>
                                    </div>
                                </div>
                                <div className="col-7">
                                    <div className="row">
                                        <div className="col-6 form-group">
                                            <label>チェックイン</label>
                                            <p>{moment(new Date(this.state.customers.checkin)).format('M月D日（dd）')}</p>
                                        </div>
                                        <div className="col-6 form-group">
                                            <label>チェックアウト</label>
                                            <p>{moment(new Date(this.state.customers.checkout)).format('M月D日（dd）')}</p>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>人数</label>
                                        <p>合計 {
                                        this.state.customers.adult_no +
                                        this.state.customers.middle_no +
                                        this.state.customers.child_no +
                                        this.state.customers.baby_no
                                        } 名</p>
                                        <div className="row ninzu">
                                            <div className="col-3 form-group">
                                                <label>大人(13-)</label>
                                                <p>{this.state.customers.adult_no} 名</p>
                                            </div>
                                            <div className="col-3 form-group">
                                                <label>小学生(7-12)</label>
                                                <p>{this.state.customers.middle_no} 名</p>
                                            </div>
                                            <div className="col-3 form-group">
                                                <label>未就学児(4-6)</label>
                                                <p>{this.state.customers.child_no} 名</p>
                                            </div>
                                            <div className="col-3 form-group">
                                                <label>幼児(0-3)</label>
                                                <p>{this.state.customers.baby_no} 名</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 form-group">
                                    <div className="row justify-content-end">
                                        <div className="col-2 form-group">
                                            <label>朝食</label>
                                            <p>{this.state.customers.food}</p>
                                        </div>
                                        <div className="col-2 form-group">
                                            <label>お部屋数</label>
                                            <p>{this.state.customers.room} 部屋</p>
                                        </div>
                                        <div className="col-2 form-group">
                                            <label>到着時刻</label>
                                            <p>{this.state.customers.arrival}</p>
                                        </div>
                                        <div className="col-2 form-group">
                                            <label>交通手段</label>
                                            <p>{this.state.customers.access}</p>
                                        </div>
                                    </div>
                                    <label>ご要望</label>
                                    <textarea
                                    className="form-control"
                                    value={this.state.customers.description}
                                    readOnly
                                    ></textarea>
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer className="mx-3">
                            <Button variant="secondary" onClick={this.closeModal}>
                            閉じる
                            </Button>
                        </Modal.Footer>
                        </Modal>
                    </div>
                </div>
            </Fragment>
        )
    }
}