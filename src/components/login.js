import React, { Component } from 'react';

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

class Login extends Component {
 
    constructor(){
        super();
        this.state = {

        }
    }

    render() {
        
        let validateInputClass = classNames({
            'ui-state-error': !this.state.validatePattern
        });
        return(
            <div>
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
            </div>
        )
    }
}



export default Login;