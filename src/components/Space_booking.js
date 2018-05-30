import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
// import axios from 'axios';
// primeReact
import { Accordion, AccordionTab } from 'primereact/components/accordion/Accordion';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/omega/theme.css';
import 'font-awesome/css/font-awesome.css';
import { Button } from 'primereact/components/button/Button';
import { Calendar } from 'primereact/components/calendar/Calendar';
import { Messages } from 'primereact/components/messages/Messages';
import { Message } from 'primereact/components/message/Message';
import { InputText } from 'primereact/components/inputtext/InputText';
import classNames from 'classnames';
import { Password } from 'primereact/components/password/Password';
import { Sidebar } from "primereact/components/sidebar/Sidebar";
import { Fieldset } from 'primereact/components/fieldset/Fieldset';
import { ScrollPanel } from 'primereact/components/scrollpanel/ScrollPanel';
import { ProgressBar } from 'primereact/components/progressbar/ProgressBar';

// import { SelectButton } from 'primeng/components/selectbutton/SelectButton';
// MaterialUI
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

class Space_booking extends Component {
    
    constructor(proops) {
        super(proops);
        var in_date = new Date();
        this.onValidateInput = this.onValidateInput.bind(this);
        this.state = {  tgl_mulai: in_date.getDay() + '/' + in_date.getMonth() + '/' + in_date.getFullYear(), 
                        tgl_selesai: in_date.getDay() + '/' + in_date.getMonth() + '/' + in_date.getFullYear(), 
                        tot_day: 0,
                        harga: 200000,
                        tot_harga: 0,
                        validatePattern: true,
                        formBooking: false,
                        formLogin:false,
                        login_status: false,
                        sendBooking: false,
                        value1: 0, 
                        value2: 50
                        // visibleTop: false,
        };
    }

    componentDidMount(){
        // #1 Get All Data 
        // axios.get('https://swapi.co/api/films') .then((ambilData) => {
        //     this.setState();
        // })
    };


    estimate(tgl1, tgl2) {

        // var m = this.refs.tgl_mulai.value;
        // var s = this.refs.tgl_selesai.value;
        // return inDays(m, s);
        // this.setState({ tgl_mulai: tgl1 });
        // console.log(tgl1 + '/n' + tgl2);

        // console.log(this.state.tgl_mulai);
        // console.log(tgl1);
        // this.setState({ day: this.state.date });
        // return this.inDays();

        if (tgl1 == null) {
            // alert('Pilih Waktu mulai terlebih dahulu');
            this.setState({ visibleBottom: true, notif: 'Pilih waktu Booking telebih dahulu' });
        }

        var m = new Date(tgl1);
        var s = new Date(tgl2);
        var t1 = m.getTime();
        var t2 = s.getTime();
        var an = parseInt((t2 - t1) / (24 * 3600 * 1000));

        if (an < 0) {
            // alert('Pilih tanggal sesudah tanggal mulai')
            this.setState({ visibleBottom: true, notif: 'Pilih tanggal sesudah tanggal mulai' });
            
        } else if (an >= 0){
            this.setState({ tot_day: an + 1, tot_harga: an * this.state.harga, visibleBottom: false, notif: 'Pilih tanggal sesudah tanggal mulai' });
        }
    }

    loginUser(){

        if(this.state.uname_login == 'mau' && this.state.pass_login == 'buka'){
            this.setState({login_status:true, formBooking: true});
            
        }else{

            this.setState({login_status:'Login Gagal...!!',formLogin: true});
        }

    }
    registerNow(){

        if(this.state.uname_login == null && this.state.pass_login == null ){
            
            this.setState({login_status:'Login Gagal...!!',formLogin: true});
        }else{
            this.setState({login_status:true, formBooking: true});
        }

    }

    showBookingProgresh(){
        this.setState({ sendBooking: true });
    }

    showBooking(){
        if(this.state.login_status == true){
            this.setState({ formBooking: true});
        } else if (this.state.login_status == false) {
            this.setState({ formLogin: true });
        }
    }

    setWaktuMulai(tgl1, tgl2){
        this.setState({ visibleBottom: false });
        return this.estimate(tgl1, tgl2)
    }

    onValidateInput(e, validatePattern) {
        this.setState({ validatePattern: validatePattern });
    }

    render() {

        function convertToRupiah(angka) {
            var rupiah = '';
            var angkarev = angka.toString().split('').reverse().join('');
            for (var i = 0; i < angkarev.length; i++) if (i % 3 == 0) rupiah += angkarev.substr(i, 3) + '.';
            return 'Rp. ' + rupiah.split('', rupiah.length - 1).reverse().join('');
        }
        let validateInputClass = classNames({
            'ui-state-error': !this.state.validatePattern
        });

        return (

            <div className="Space_booking">
                <div class="container">
                    <h3>Place yourself </h3>
                    <h6>Pastikan informasi kotak anda valid.</h6>
                        <div class="rte">
                            
                        </div>

                        <div className="col-lg-6">

                            <h5>Affordable & Strategic Meeting Room in Jakarta</h5>
                            provides meeting rooms with an affordable price in Jakarta. Not only is it cheap & affordable, EV Hive has several strategic meeting venues around Jakarta & Tangerang.

                                <br />
                            <br />
                            Offis meeting locations in Mdiun:<br />
                            <br />

                            Rp 300,000/hour on weekends (Saturday - Sunday)<br />
                            <br />
                            If you’re looking for the nearest meeting venues with the best price in Jakarta, then choosing Coworking Space’s meeting room is suitable for you!<br />
                        </div>
                        <div class="col-lg-6" >

                        <Button type="button" onClick={() => this.showBooking()} label="Booking Now" className="ui-button-secondary" />
                            
                                {/* <div class="col-">
                                </div>
                                <small>Sudah memiliki akun ?<a>Login</a></small><hr />
                                <button type="submit" class="btn btn-danger btn-xs"  >Google</button>
                                <button type="submit" class="btn btn-primary btn-xs"  >Facebook</button> */}
                        </div>
                </div>

                <Sidebar visible={this.state.sendBooking} style={{ height: 200 }} position="bottom" baseZIndex={1000000} onHide={() => this.setState({ sendBooking: true })}>
                    <p>Booking sending request...</p>
                    <ProgressBar mode="indeterminate" style={{ height: '15px' }}></ProgressBar>
                </Sidebar>

                {/* Registrasi Form  */}
                <Sidebar visible={this.state.formRegistrasi} style={{ height: 500 }} position="bottom" baseZIndex={1000000} onHide={() => this.setState({ formRegistrasi: false })}>
                    {/* <p>{this.state.notif}</p> */}
                    {/* <Button type="button" onClick={() => this.setState({ visibleBottom: true })} label="Save" className="ui-button-success" />
                    <Button type="button" onClick={() => this.setState({ visibleBottom: true })} label="Cancel" className="ui-button-secondary" /> */}
                    {/* <Calendar
                        style={{width:'50%'}}
                        showButtonBar={true}
                        dateFormat="dd mm yy"
                        value={this.state.date}
                        onChange={(e) => { this.setState({ date: e.value }) }}
                    ></Calendar>
                    <Button type="button" onClick={() => this.setWaktuMulai(this.state.date, this.state.date2)} label="Save" className="ui-button-secondary" /> */}
                    <ScrollPanel legend="Booking Now" style={{ height: 500,border:0 }}  className="panel_booking"> 
                        <div className="panel_booking_content">
                       
                            <span className="ui-float-label">
                                <InputText keyfilter="alphanum" id="float-input" type="text" onChange={(e) => this.setState({nama_register: e.target.value})} />
                                <label htmlFor="float-input">Nama Lengkap</label>
                            </span>

                            <span className="ui-float-label">
                                <InputText keyfilter={/[^\s]/} id="float-input" type="text" onChange={(e) => this.setState({uname_login: e.target.value})} />
                                <label htmlFor="float-input">Email</label>
                            </span>

                            <span className="ui-float-label">
                                <InputText keyfilter={/[^\s]/} id="float-input" keyfilter={/^[+-]?((\.\d+)|(\d+(\.\d+)?))$/} validateOnly={true} onInput={this.onValidateInput} type="text" className={validateInputClass} />
                                <label htmlFor="float-input">Nomor Telephone</label>
                                {!this.state.validatePattern && <Message severity="error" text="Nomor Telephone tidak Valid"></Message>}
                            </span>

                            <span className="ui-float-label">
                                <Password value={this.state.pass_login} onChange={(e) => this.setState({pass_login: e.target.value})} />
                                <label htmlFor="float-input">Password</label>
                            </span>

                            <Button type="button" onClick={() => this.registerNow()} label="Register Now" className="ui-button-primary pull-right"  />
                        </div>
                    </ScrollPanel >
                </Sidebar>

                {/* Login Form */}
                <Sidebar visible={this.state.formLogin} style={{ height: 350 }} position="bottom" baseZIndex={1000000} onHide={() => this.setState({ formLogin: false })}>
                  
                        <div className="panel_booking_content">

                            <h5>Login Member</h5>

                            <p>{this.state.login_status}</p>
                            <span className="ui-float-label">
                                <InputText onChange={(e) => this.setState({uname_login: e.target.value})}/>
                                <label htmlFor="float-input">Username</label>
                            </span>

                            <span className="ui-float-label">
                                <Password value={this.state.value} onChange={(e) => this.setState({pass_login: e.target.value})} />
                                <label htmlFor="float-input">Password</label>
                            </span>

                            <div className="col-size-0 col-xs-8 col-lg-6">
                                <small>Belum punya akun ? <a type="button" onClick={() => this.setState({formRegistrasi:true,})} >Daftar</a></small>
                            </div>

                            <div className="col-size-0 col-xs-4 col-lg-6">
                                <Button type="button" onClick={() => this.loginUser()} className="ui-button-success pull-right" ><i className="fa fa-lock"></i> Login</Button>
                            </div>
                            
                            <div className="col-size-0 col-xs-12 col-lg-12">
                                <p>Login x dengan :</p>
                                <Button type="button" className="ui-button-danger" style={{width:'48%'}} ><i className="fa fa-google-plus"></i> Google</Button>
                                <Button type="button" className="ui-button-primary" style={{width:'48%'}} ><i className="fa fa-facebook"></i> Facebook</Button>
                            </div>
                        </div>
                </Sidebar>
                
                <Sidebar visible={this.state.formBooking} style={{ height: 500 }} position="bottom" baseZIndex={1000000} onHide={() => this.setState({ formBookingFalse: false })}>
                    {/* <p>{this.state.notif}</p> */}
                    {/* <Button type="button" onClick={() => this.setState({ visibleBottom: true })} label="Save" className="ui-button-success" />
                    <Button type="button" onClick={() => this.setState({ visibleBottom: true })} label="Cancel" className="ui-button-secondary" /> */}
                    {/* <Calendar
                        style={{width:'50%'}}
                        showButtonBar={true}
                        dateFormat="dd mm yy"
                        value={this.state.date}
                        onChange={(e) => { this.setState({ date: e.value }) }}
                    ></Calendar>
                    <Button type="button" onClick={() => this.setWaktuMulai(this.state.date, this.state.date2)} label="Save" className="ui-button-secondary" /> */}
                    <ScrollPanel legend="Booking Now" style={{ height: 500, border: 0 }} className="panel_booking">
                        <div className="panel_booking_content">

                            <label for="ContactFormEmail" class="">Waktu Mulai</label><br />
                            <div class="input-field">
                                <Calendar
                                    className="datepicker "
                                    dateFormat="dd mm yy"
                                    showButtonBar={true}
                                    value={this.state.date}
                                    onChange={(e) => { this.setState({ date: e.value }) }}
                                ></Calendar>

                                {/* <Button label="Click" icon="fa-check" onClick={() => {this.estimate()}} /> */}
                            </div>

                            <label for="ContactFormEmail" class="">Waktu Selesai</label><br />
                            <div class="input-field">
                                <Calendar
                                    className="datepicker"
                                    dateFormat="dd mm yy"
                                    className="datepicker"
                                    value={this.state.date2}
                                    onChange={(e) => { this.setState({ date2: e.value }), this.estimate(this.state.date, e.value) }}
                                ></Calendar>
                                {/* <Button label="Click" icon="fa-check" onClick={() => {this.estimate()}} /> */}
                            </div>
                            <p >Harga / Hari : {convertToRupiah(this.state.harga)}  </p>
                            <p className="left-text-harga">Hari : {this.state.tot_day}  </p>
                            <p className="left-text-harga">Harga : {convertToRupiah(this.state.tot_day * this.state.harga)}  </p>
                            <Button type="button" onClick={() => this.showBookingProgresh()} label="Booking Now" className="btn pull-right" />
                        </div>
                    </ScrollPanel >
                </Sidebar>


                <Sidebar visible={this.state.formBookingTrue} style={{ height: 500 }} position="bottom" baseZIndex={1000000} onHide={() => this.setState({ formBookingTrue: false })}>
                    {/* <p>{this.state.notif}</p> */}
                    {/* <Button type="button" onClick={() => this.setState({ visibleBottom: true })} label="Save" className="ui-button-success" />
                    <Button type="button" onClick={() => this.setState({ visibleBottom: true })} label="Cancel" className="ui-button-secondary" /> */}
                    {/* <Calendar
                        style={{width:'50%'}}
                        showButtonBar={true}
                        dateFormat="dd mm yy"
                        value={this.state.date}
                        onChange={(e) => { this.setState({ date: e.value }) }}
                    ></Calendar>
                    <Button type="button" onClick={() => this.setWaktuMulai(this.state.date, this.state.date2)} label="Save" className="ui-button-secondary" /> */}
                    <ScrollPanel legend="Booking Now" style={{ height: 500, border: 0 }} className="panel_booking">
                        <div className="panel_booking_content">

                            <span className="ui-float-label">
                                <InputText keyfilter="alphanum" id="float-input" type="text" />
                                <label htmlFor="float-input">Nama Lengkap</label>
                            </span>

                            <span className="ui-float-label">
                                <InputText keyfilter={/[^\s]/} id="float-input" type="text" />
                                <label htmlFor="float-input">Email</label>
                            </span>

                            <span className="ui-float-label">
                                <InputText keyfilter={/[^\s]/} id="float-input" keyfilter={/^[+-]?((\.\d+)|(\d+(\.\d+)?))$/} validateOnly={true} onInput={this.onValidateInput} type="text" className={validateInputClass} />
                                <label htmlFor="float-input">Nomor Telephone</label>
                                {!this.state.validatePattern && <Message severity="error" text="Nomor Telephone tidak Valid"></Message>}
                            </span>

                            <label for="ContactFormEmail" class="">Waktu Mulai</label><br />
                            <div class="input-field">
                                <Calendar
                                    className="datepicker "
                                    dateFormat="dd mm yy"
                                    showButtonBar={true}
                                    value={this.state.date}
                                    onChange={(e) => { this.setState({ date: e.value }) }}
                                ></Calendar>
                                {/* <Button label="Click" icon="fa-check" onClick={() => {this.estimate()}} /> */}
                            </div>

                            <label for="ContactFormEmail" class="">Waktu Selesai</label><br />
                            <div class="input-field">
                                <Calendar
                                    className="datepicker"
                                    dateFormat="dd mm yy"
                                    className="datepicker"
                                    value={this.state.date2}
                                    onChange={(e) => { this.setState({ date2: e.value }), this.estimate(this.state.date, e.value) }}
                                ></Calendar>
                                {/* <Button label="Click" icon="fa-check" onClick={() => {this.estimate()}} /> */}
                            </div>
                            <p >Harga / Hari : {convertToRupiah(this.state.harga)}  </p>
                            <p className="left-text-harga">Hari : {this.state.tot_day}  </p>
                            <p className="left-text-harga">Harga : {convertToRupiah(this.state.tot_day * this.state.harga)}  </p>
                            <Button type="button" onClick={() => this.showBookingProgresh()} label="Booking Now" className="ui-button-primary pull-right" />
                        </div>
                    </ScrollPanel >
                </Sidebar>

            </div>
        );
    }
}


export default Space_booking;