import React, { Component } from 'react';
// import axios from 'axios';
// primeReact
import axios from 'axios';

import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/omega/theme.css';
import 'font-awesome/css/font-awesome.css';
import { Button } from 'primereact/components/button/Button';
import { Calendar } from 'primereact/components/calendar/Calendar';
import { Message } from 'primereact/components/message/Message';
import { InputText } from 'primereact/components/inputtext/InputText';
import classNames from 'classnames';
import { Password } from 'primereact/components/password/Password';
import { Sidebar } from "primereact/components/sidebar/Sidebar";
import { ProgressBar } from 'primereact/components/progressbar/ProgressBar';
import { Card } from 'primereact/components/card/Card';
import { Growl } from 'primereact/components/growl/Growl';
import { provider, auth } from './../fire';

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
                        value2: 50,
                        uname_login: null,
                        pass_login: null,
                        data_space: []
                        // visibleTop: false,
        };
    }

    async login() {

        const result = await auth().signInWithPopup(provider); 
        this.setState({user: result.user});
    }

    async logout(){
        await auth().signOut()
        this.setState({user: null}); 
    }

    componentDidMount(){
        // axios.get('http://localhost:3210/get_data_user')
        // .then((response) => {
            
        //     console.log(response)

        // })

        axios.get('http://localhost:3210/api/show_data_space')
        .then((response)=>{
            console.log(response)
            this.setState({data_space: response.data})
        })

        axios.get('http://localhost:3210/api/cek_session/user',)
        .then((response_session)=>{
            
            console.log(response_session)
        })
        
        // let header_2 = <img alt="Card" src='https://ri2hb3j6fh-flywheel.netdna-ssl.com/mission-valley/wp-content/uploads/sites/11/2016/07/Coworking-Space.jpg'/>;
        // let footer_2 = <span>
        //                     <Button label="Booking Now"  onClick={() => this.showBooking()} icon="fa-check" className="ui-button-secondary"/>
        //                 </span>;   

    }

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
            this.setState({ visibleBottom: true, notif:'Pilih waktu Booking telebih dahulu' });

        } else {

            var m = new Date(tgl1);
            var s = new Date(tgl2);
            var an = parseInt((s.getTime() - m.getTime()) / (24 * 3600 * 1000));

            if (an < 0) {
                // alert('Pilih tanggal sesudah tanggal mulai')
                this.setState({ visibleBottom: true, notif: 'Pilih tanggal sesudah tanggal mulai' });
                
            } else if (an >= 0){

                this.setState({ tot_day: an + 1, tot_harga: an * this.state.harga, visibleBottom: false, notif: 'Pilih tanggal sesudah tanggal mulai' });
            }
        }
    }

    loginUser(){

        if(this.state.uname_login === 'mau' && this.state.pass_login === 'buka'){

            this.setState({login_status:true, formBooking: true,formLogin: false});
            
        }else{

            this.setState({login_status:'Login Gagal...!!',formLogin: true});
        }

    }

    registerNow(){

        if(this.state.reg_email === "" && this.state.reg_password === "" ){
            
            this.setState({login_status:'Register Gagal...!!',formLogin: true});

        }else{

            axios.post('http://localhost:3210/api/cek_user_registrasi', {
                
                email: this.state.reg_email,
            })
            .then((response_cari) => {
                // console.log(response_cari)
                if(response_cari.data.length === 0){
                    
                    axios.post('http://localhost:3210/api/register_add_user', {
                        nama_lengkap: this.state.reg_nama_lengkap,
                        email: this.state.reg_email,
                        no_telp: this.state.reg_no_telp,
                        password: this.state.reg_password
                    }).then((respond_add) => {
                        // console.log(respond_add.config.data)
                        
                        this.growl.show({severity:'success', summary:'Berhasil', detail:'Registrasi anda berhasil'});
                        this.setState({user_login_success: respond_add.config.data, login_status:true, formBooking: true, formLogin: false})
                    
                    })

                }else{

                    this.growl.show({severity:'error', summary:'Gagal', detail:'Registrasi anda gagal', sticky: true});

                }

                // if(response.insertedCount === 1){
                //     this.setState({login_status:true, formBooking: true});
                // }else{

                //     this.setState({login_status:true, formBooking: true});

                // }
                // // console.log(response);
                // this.state.data_karyawan.push(response.data);
                
                // this.changeDatakaryawan();

            })
        }
    }

    showBookingProgresh(){
        this.setState({ sendBooking: true });
    }

    showBooking(id_space, nama_space){
        // console.log()
        if(this.state.login_status === true){
            this.setState({ formBooking: true, id_space: id_space, nama_space: nama_space+' Dipilih' });
        } else if (this.state.login_status === false) {
            this.setState({ formLogin: true, id_space: id_space, nama_space: nama_space+' Dipilih'  });
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
            for (var i = 0; i < angkarev.length; i++) if (i % 3 === 0) rupiah += angkarev.substr(i, 3) + '.';
            return 'Rp. ' + rupiah.split('', rupiah.length - 1).reverse().join('');
        }

        let validateInputClass = classNames({
            'ui-state-error': !this.state.validatePattern
        });

        let data_space_generate = this.state.data_space.map((col,i) => {
            let img_space = <img alt={col.nama} src={col.img}/>;
            let button_space = <span> <Button label="Booking Now"  onClick={() => this.showBooking(col.id_, col.nama)} icon="fa-check" className="ui-button-secondary"/> </span>;
            return  <div key={col.id_} class="col-xs-12 col-md-6 col-lg-4 col"><Card title={col.nama} subtitle="Sub" style={{width: '100%'}} className="ui-card-shadow " footer={button_space} header={img_space}><div> {col.deskripsi} </div></Card></div> ;
            
        });
        
        // let header_2 = <img alt="Card" src='https://ri2hb3j6fh-flywheel.netdna-ssl.com/mission-valley/wp-content/uploads/sites/11/2016/07/Coworking-Space.jpg'/>;
        // let footer_2 = <span>
        //                             <Button label="Booking Now"  onClick={() => this.showBooking()} icon="fa-check" className="ui-button-secondary"/>
        //                         </span>;
        return (

            <div className="Space_booking">
                <div class="container">

                    <h5>Coworking Space</h5>
                    <hr />
                        {/* <div class="col-xs-12 col-md-6 col-lg-4 col">
                            <Card title="Advanced Card" subtitle="Subtitle" style={{width: '100%'}} className="ui-card-shadow " footer={footer_menu_space} header={header_menu_space}>
                                <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                                    quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                                </div>
                            </Card>
                        </div> */}
                        {data_space_generate}
                        
                       
                </div>

                <Sidebar visible={this.state.sendBooking} style={{ height: 200 }} position="bottom" baseZIndex={1000000} onHide={() => this.setState({ sendBooking: true })}>
                    <p>Booking sending request...</p>
                    <ProgressBar mode="indeterminate" style={{ height: '15px' }}></ProgressBar>
                </Sidebar>

                {/* Registrasi Form  */}
                <Sidebar visible={this.state.formRegistrasi} style={{ height: 350 }} position="bottom" baseZIndex={1000000} onHide={() => this.setState({ formRegistrasi: false, formLogin: false })}>
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
                   
                    <Growl ref={(el) => this.growl = el} />
                    <div className="panel_booking_content">
                    
                        <span className="ui-float-label">
                            <InputText keyfilter="alphanum" value={this.state.reg_nama_lengkap} onChange={(e) => this.setState({reg_nama_lengkap: e.target.value})} id="float-input" type="text"  />
                            <label htmlFor="float-input">Nama Lengkap</label>
                        </span>

                        <span className="ui-float-label">
                            <InputText keyfilter={/[^\s]/} value={this.state.reg_email} onChange={(e) => this.setState({reg_email: e.target.value})}  id="float-input" type="text"  />
                            <label htmlFor="float-input">Email</label>
                        </span>

                        <span className="ui-float-label">
                            <InputText id="float-input" value={this.state.reg_no_telp}  onChange={(e) => this.setState({reg_no_telp: e.target.value})}  keyfilter={/^[+-]?((\.\d+)|(\d+(\.\d+)?))$/} validateOnly={true} onInput={this.onValidateInput} type="text" className={validateInputClass} />
                            <label htmlFor="float-input">Nomor Telephone</label>
                            {!this.state.validatePattern && <Message severity="error" text="Nomor Telephone tidak Valid"></Message>}
                        </span>

                        <span className="ui-float-label">
                            <Password ref="password_reg" value={this.state.reg_password} onChange={(e) => this.setState({reg_password: e.target.value})}  />
                            <label htmlFor="float-input">Password</label>
                        </span>

                        <Button type="button" onClick={() => this.registerNow()} label="Register Now" className="ui-button-primary pull-right"  />
                    </div>
                </Sidebar>

                {/* Login Form */}
                <Sidebar visible={this.state.formLogin} style={{ height: 350 }} position="bottom" baseZIndex={1000000} onHide={() => this.setState({ formLogin: false })}>
                    <div className="panel_booking_content">

                        <h5>Login Member</h5>
                        <p>{this.state.login_status}</p>
                        <p>{this.state.nama_space}</p>
                        <p>{this.state.user}</p>
                        <span className="ui-float-label">
                            <InputText onChange={(e) => this.setState({uname_login: e.target.value})}/>
                            <label htmlFor="float-input">Username</label>
                        </span>

                        <span className="ui-float-label">
                            <Password value={this.state.value} onChange={(e) => this.setState({pass_login: e.target.value})} />
                            <label htmlFor="float-input">Password</label>
                        </span>

                        <div className="col-size-0 col-xs-8 col-lg-6">
                            <small>Belum punya akun ? <a type="button" onClick={(e) => this.setState({formRegistrasi:true,})} >Daftar</a></small>
                        </div>

                        <div className="col-size-0 col-xs-4 col-lg-6">
                            <Button type="button" onClick={() => this.loginUser()} className="ui-button-success pull-right" ><i className="fa fa-lock"></i> Login</Button>
                        </div>
                        
                        <div className="col-size-0 col-xs-12 col-lg-12">
                            <p>Login dengan :</p>
                            <Button type="button" className="ui-button-danger"  onClick={this.login.bind(this)} style={{width:'48%'}} ><i className="fa fa-google-plus"></i> Google</Button>
                            <Button type="button" className="ui-button-primary" style={{width:'48%'}} ><i className="fa fa-facebook"></i> Facebook</Button>
                        </div>
                    </div>
                </Sidebar>

                <Sidebar visible={this.state.formBooking} style={{ height: '100%' }} position="bottom" baseZIndex={1000000} onHide={() => this.setState({ formBookingFalse: false })}>
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
                    
                        <Growl ref={(el) => this.growl = el} />
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
                                    value={this.state.date2}
                                    onChange={(e) => { this.setState({ date2: e.value }); this.estimate(this.state.date, e.value) }}
                                ></Calendar>
                                {/* <Button label="Click" icon="fa-check" onClick={() => {this.estimate()}} /> */}
                            </div>
                            
                            <p >Harga / Hari : {convertToRupiah(this.state.harga)}  </p>
                            <p className="left-text-harga">Hari : {this.state.tot_day}  </p>
                            <p className="left-text-harga">Harga : {convertToRupiah(this.state.tot_day * this.state.harga)}  </p>
                            <Button type="button" onClick={() => this.showBookingProgresh()} label="Booking Now" className="btn pull-right" />
                        </div>
                    
                </Sidebar>

            </div>
        );
    }
}


export default Space_booking;