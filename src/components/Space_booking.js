import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
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
import { Password } from    'primereact/components/password/Password';

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
                        validatePattern: true
        };
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
            alert('Pilih Waktu mulai terlebih dahulu')
            
        }

        var m = new Date(tgl1);
        var s = new Date(tgl2);

        var t1 = m.getTime();
        var t2 = s.getTime();
        var an = parseInt((t2 - t1) / (24 * 3600 * 1000))
        if (an < 0) {
            alert('Pilih tanggal sesudah tanggal mulai')
        } else if (an >= 0){
            this.setState({ tot_day: an+1, tot_harga: an * this.state.harga});
        }

        
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
                        <div class="col-lg-6" >
                            <form method="post" action="#" id="contact_form" accept-charset="UTF-8" class="contact-form">
                                <hr />


                                    <span className="ui-float-label">
                                        <Password id="float-input" />

                                        <label htmlFor="float-input">pass</label>
                                    </span>

                                    <span className="ui-float-label">
                                        <InputText keyfilter="alphanum" id="float-input" type="text" />
                                        <label htmlFor="float-input">Nama Lengkap</label>
                                    </span>
                                    

                                    <span className="ui-float-label">
                                        <InputText keyfilter={/[^\s]/} id="float-input" type="text" />
                                        <label htmlFor="float-input">Email</label>
                                    </span>

                                    <span className="ui-float-label">
                                <InputText keyfilter={/[^\s]/} id="float-input" keyfilter={/^[+-]?((\.\d+)|(\d+(\.\d+)?))$/} validateOnly={true} onInput={this.onValidateInput} type="text" className={validateInputClass}   />
                                        <label htmlFor="float-input">Nomor Telephone</label>
                                         {!this.state.validatePattern && <Message severity="error" text="Nomor Telephone tidak Valid"></Message>}
                                    </span>

                                {/* <div class="input-field">
                                    <InputText id="validateInput" keyfilter={/^[+-]?((\.\d+)|(\d+(\.\d+)?))$/} validateOnly={true} onInput={this.onValidateInput} placeholder="Nomor Telephone" className={validateInputClass} />
                                    {!this.state.validatePattern && <Message severity="error" text="Nomor Telephone tidak Valid"></Message>}
                                    
                                </div> */}
                                
                                <label for="ContactFormEmail" class="">Waktu Mulai</label><br />
                                <div class="input-field">
                                    <Calendar
                                        className="datepicker "
                                        dateFormat="dd mm yy"
                                        value={this.state.date}
                                        onChange={(e) => { this.setState({ date: e.value }) }}
                                    ></Calendar>

                                    {/* <Button label="Click" icon="fa-check" onClick={() => {this.estimate()}} /> */}
                                </div>

                                <label for="ContactFormEmail" class="">Waktu Selesai</label><br />
                                <div class="input-field">
                                    <Calendar
                                        className="datepicker "
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
                                <input type="submit" class="btn " value="Send" />
                            </form>
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
                </div>
            </div>
        );
    }
}


export default Space_booking;