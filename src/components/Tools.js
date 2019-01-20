import React, { Component } from 'react';

import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/omega/theme.css';
import 'font-awesome/css/font-awesome.css';
import { Button } from 'primereact/components/button/Button';
import { InputText } from 'primereact/components/inputtext/InputText';


class Tools extends Component {

    constructor(proops) {
        super(proops);
        var in_date = new Date();
        this.state = {  tgl_mulai: in_date.getDay() + '/' + in_date.getMonth() + '/' + in_date.getFullYear(), 
                        tgl_selesai: in_date.getDay() + '/' + in_date.getMonth() + '/' + in_date.getFullYear(), 
                        tot_day: 0,
        };
    }

    render() {
        return (
            <div className="container">
                <h1>Tools</h1>

                <div className="panel_booking_content">
                    
                    <span className="ui-float-label">
                        <InputText keyfilter="alphanum" value={this.state.reg_nama_lengkap} onChange={(e) => this.setState({reg_nama_lengkap: e.target.value})} id="float-input" type="text"  />
                        <label htmlFor="float-input">Title</label>
                    </span>

                    <span className="ui-float-label">
                        <InputText keyfilter={/[^\s]/} value={this.state.reg_email} onChange={(e) => this.setState({reg_email: e.target.value})}  id="float-input" type="text"  />
                        <label htmlFor="float-input">Berita</label>
                    </span>

                    <Button type="button" onClick={() => this.publishNow()} label="Publish Now" className="ui-button-primary pull-right"  />
                </div>
            </div>
        );
    }
}

export default Tools;