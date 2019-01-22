import React, { Component } from 'react';
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
import { Dialog } from 'primereact/components/dialog/Dialog';
import { provider, auth } from './../fire';

class Home_page extends Component {
    
    constructor(proops) {
        super(proops);
        var in_date = new Date();
        this.onClick = this.onClick.bind(this);
        this.onHide = this.onHide.bind(this);
        // this.onValidateInput = this.onValidateInput.bind(this);
        this.state = {  
                        validatePattern: true,
                        newsshow:false,
                        formupdate: false,
                        login_status: false,
                        value1: 0,
                        value2: 50,
                        data_berita: [],
                        visible: false,
                        value: null
                        // visibleTop: false,
        };
    }

    onClick() {
        this.setState({visible: true});
    }

    onHide() {
        this.setState({visible: false});
    }

    
    showSuccess() {
        this.growl.show({severity: 'success', summary: 'Success...!!', detail: 'Data Berhasil di Hapus'});
    }
    showUpdateAlert() {
        this.growl.show({severity: 'success', summary: 'Success...!!', detail: 'Data Berhasil di Update'});
    }

    componentDidMount(){
        
        axios.get('http://localhost:3000/berita')
        .then((response)=>{
            console.log(response)
            this.setState({data_berita: response.data.reverse()})
        })

    }

    showNewsProgresh(){
        this.setState({ sendBooking: true });
    }

    newsDelete(id_news){

        var url = 'http://localhost:3000/berita/' + id_news ;
        axios.delete(url)
        .then((response)=>{
            console.log(response)
            this.setState({ 
                data_berita: [], 
                newsshow: false

            })
            this.onHide()
            this.componentDidMount();
            this.showSuccess();

        })

    }

    showNews(id_news, title, news, tglnews){
        
        this.setState({ newsshow: true, 
                        title:title,
                        id_news: id_news, 
                        news: news,
                        tglnews: tglnews
                    });
    }

    showUpdate(){
        
        this.setState({ formupdate: true});
    }
    updateCancel(){
        
        this.setState({ formupdate: false});

    }

    updateNow(id_news){

        var url = 'http://localhost:3000/berita/' + id_news ;
        axios.put(url, {
            
            title: this.state.title,
            news: this.state.news,
            datepost: this.state.tglnews

        })
        .then((response)=>{
            console.log(response)
            this.setState({ 

                data_berita: [], 
                newsshow: false,
                formupdate: false

            });
            this.componentDidMount();
            this.showUpdateAlert();

        })
        
    }


    render() {

         const footer = (
            <div>
                <Button label="Yes" icon="pi pi-check" onClick={() => this.newsDelete(this.state.id_news)}   />
                <Button label="No" icon="pi pi-times" onClick={() => this.onHide()} className="ui-button-danger pull-right" />
            </div>
        );

        let data_news_generate = this.state.data_berita.map((col,i) => {
            let img_space = col.news;

            return  <div key={col.id_} onClick={() => this.showNews(col.id, col.title, col.news, col.datepost)} class="col-xs-12 col-md-6 col-lg-4 col"><Card title={col.title}  subtitle={col.datepost} style={{width: '100%'}} className="ui-card-shadow "  ><div> {} </div></Card></div> ;
            
        });

        return (

            <div className="Space_booking">
                <div class="container">
                
                <Growl ref={(el) => this.growl = el} />

                    <h5></h5>
                    <hr />

                        {data_news_generate}
                        
                </div>
                

                <Sidebar visible={this.state.newsshow} style={{ height: "100%" }} position="bottom" baseZIndex={1000000} onHide={() => this.setState({ newsshow: false })}>
                    
                    <Dialog header="Alert Message" visible={this.state.visible} style={{width: '50vw'}} footer={footer} onHide={this.onHide} maximizable>
                        Hapus Berita ?

                    </Dialog>
                    
                    <div className="panel_booking_content">

                        <h5>{this.state.title} - {this.state.id_news}</h5>
                        <p>{this.state.tglnews}</p>
                        {/* <small>{this.state.userpost}</small> */}
                        <span className="ui-float-label">
                            <p>{this.state.news}</p>
                        </span>

                    </div>

                    <div className="panel_booking_content">

                            <Button type="button" onClick={() => this.onClick()} label="Delete" className="ui-button-danger pull-right"  />
                            <Button type="button" onClick={() => this.showUpdate()} label="Update" className="ui-button-warning pull-right"  />

                    </div>

                </Sidebar>

                
                <Sidebar visible={this.state.formupdate} style={{ height: "100%" }} position="bottom" baseZIndex={1000000} onHide={() => this.setState({ formupdate: false })}>
                    
                    
                    <h4>Update Data</h4>
                    <div className="panel_booking_content">

                        <span className="ui-float-label">
                            <InputText value={this.state.title} onChange={(e) => this.setState({title: e.target.value})} id="float-input" type="text"  />
                            <label htmlFor="float-input">Title</label>
                        </span>

                        <span className="ui-float-label">
                            <InputText value={this.state.news} onChange={(e) => this.setState({news: e.target.value})}  id="float-input" type="text"  />
                            <label htmlFor="float-input">Berita</label>
                        </span>
                        
                        <Button type="button" onClick={() => this.updateCancel()} label="Batal" className="ui-button-danger pull-right"  />
                   
                        <Button type="button" onClick={() => this.updateNow(this.state.id_news)} label="Update Now" className="ui-button-warning pull-right"  />
                    </div>

                

                </Sidebar>


                
            </div>
        );
    }
}


export default Home_page;