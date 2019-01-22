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
import { provider, auth } from './../fire';

class Home_page extends Component {
    
    constructor(proops) {
        super(proops);
        var in_date = new Date();
        // this.onValidateInput = this.onValidateInput.bind(this);
        this.state = {  
                        validatePattern: true,
                        formLogin:false,
                        login_status: false,
                        value1: 0,
                        value2: 50,
                        data_berita: []
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
            this.setState({data_berita: response.data, data_berita: ""})
            this.componentDidMount()
        })

    }

    showNews(id_news, title, news, tglnews){
        
        this.setState({ formLogin: true, 
                        title:title,
                        id_news: id_news, 
                        news: news, 
                        tglnews: tglnews
                    });
    }

    render() {

        let data_news_generate = this.state.data_berita.map((col,i) => {
            let img_space = col.news;

            return  <div key={col.id_} onClick={() => this.showNews(col.id, col.title, col.news, col.datepost)} class="col-xs-12 col-md-6 col-lg-4 col"><Card title={col.title}  subtitle={col.datepost} style={{width: '100%'}} className="ui-card-shadow "  ><div> {} </div></Card></div> ;
            
        });

        return (

            <div className="Space_booking">
                <div class="container">

                    <h5></h5>
                    <hr />

                        {data_news_generate}
                        
                </div>
                <Sidebar visible={this.state.formLogin} style={{ height: "100%" }} position="bottom" baseZIndex={1000000} onHide={() => this.setState({ formLogin: false })}>
                    <div className="panel_booking_content">

                        <h5>{this.state.title} - {this.state.id_news}</h5>
                        <p>{this.state.tglnews}</p>
                        {/* <small>{this.state.userpost}</small> */}
                        <span className="ui-float-label">
                            <p>{this.state.news}</p>
                        </span>

                    </div>

                    <div className="panel_booking_content">

                            <Button type="button" onClick={() => this.newsDelete(this.state.id_news)} label="Delete" className="ui-button-danger pull-right"  />

                    </div>

                </Sidebar>

                
            </div>
        );
    }
}


export default Home_page;