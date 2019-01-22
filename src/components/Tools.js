import React, { Component } from 'react';

import axios from 'axios';

import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/omega/theme.css';
import 'font-awesome/css/font-awesome.css';
import { Button } from 'primereact/components/button/Button';
import { Growl } from 'primereact/components/growl/Growl';
import { InputText } from 'primereact/components/inputtext/InputText';

class Tools extends Component {

    constructor(proops) {
        super(proops);
        this.showSuccess = this.showSuccess.bind(this);
        var in_date = new Date();
        this.state = {  
                        tgl_mulai: in_date.getDate() + "-" + in_date.getMonth() + "-" + in_date.getFullYear(), 
                        tot_day: 0,
        };
    }

    showSuccess() {
        this.growl.show({severity: 'success', summary: 'Success Message', detail: 'News submitted'});
    }

    publishNow(){

        // axios.get('https://my-json-server.typicode.com/ahendroo1/api-v1/berita')
        // .then((response)=>{
        //     console.log(response)
        //     this.setState({data_berita: response.data})
        // })

        axios.post('http://localhost:3000/berita', {
            id: 0,
            title: this.state.post_title,
            news: this.state.post_berita,
            datepost: this.state.tgl_mulai
        })
        .then((response_post) => {
            // console.log(response_cari)
            console.log(response_post)
            this.showSuccess();
            this.setState({
                post_title: "",
                post_berita: ""

            })

        })

    }

    render() {
        return (

            <div className="container">

                    <Growl ref={(el) => this.growl = el} />
                <h1>Tools</h1>

                <div className="panel_booking_content">
                    <span className="ui-float-label">
                        <InputText keyfilter="alphanum" value={this.state.post_title} onChange={(e) => this.setState({post_title: e.target.value})} id="float-input" type="text"  />
                        <label htmlFor="float-input">Title</label>
                    </span>

                    <span className="ui-float-label">
                        <InputText value={this.state.post_berita} onChange={(e) => this.setState({post_berita: e.target.value})}  id="float-input" type="text"  />
                        <label htmlFor="float-input">Berita</label>
                    </span>

                    <Button type="button" onClick={() => this.publishNow()} label="Publish Now" className="ui-button-primary pull-right"  />
                </div>
            </div>

        );
    }
}

export default Tools;