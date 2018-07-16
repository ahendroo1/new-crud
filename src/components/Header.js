import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/header_style.css'
import classNames from 'classnames';
import { Sidebar } from 'primereact/components/sidebar/Sidebar';
import { provider_twitter, provider_fb, provider, auth } from './../fire';
import { Password } from 'primereact/components/password/Password';
import { InputText } from 'primereact/components/inputtext/InputText';
import { Growl } from 'primereact/components/growl/Growl';
import { Button } from 'primereact/components/button/Button';
import { Message } from 'primereact/components/message/Message';
// import { Message } from 'primereact/components/message/Message';

class Header extends Component {

    constructor() {
        super();
        this.state = {
            visibleLeft: false,
            user: null,
            visibleFullScreen:false
        };
        this.items = [
            {label: 'Update', icon: 'fa-refresh', command: (e) => {
                this.growl.show({severity:'success', summary:'Updated', detail:'Data Updated'});
            }},
            {label: 'Delete', icon: 'fa-close', command: (e) => {
                this.growl.show({ severity: 'success', summary: 'Delete', detail: 'Data Deleted' });
            }},
            {label: 'React Website', icon: 'fa-link', url: 'https://facebook.github.io/react/'},
            {label: 'Upload', icon: 'fa-paint-brush', command:(e) => {
                window.location.hash="/fileupload"
            }}
        ];
    }

    async login() {
        const result = await auth().signInWithPopup(provider); 
        this.setState({
          user: result.user
        });
        console.log(result)
    }
    async login_fb() {
        const result = await auth().signInWithPopup(provider_fb); 
        this.setState({
          user: result.user
        });
        console.log(result)
    }
    async login_twitter() {
        const result = await auth().signInWithPopup(provider_twitter); 
        this.setState({
          user: result.user
        });
        console.log(result)
    }
  
    async logout(){
      await auth().signOut()
      this.setState({user: null}); 
    }

    render(){
        
        let validateInputClass = classNames({
            'ui-state-error': !this.state.validatePattern
        });

        return (
                <div id="shopify-section-header" class="shopify-section">
                  
                    

                    <Sidebar visible={this.state.visibleLeft} baseZIndex={1000000} onHide={() => this.setState({visibleLeft: false})}>
                        
                        <Link to="/movie" class="site-nav__link" onClick={() => this.setState({visibleLeft:false})} className="header-mobile-user-profile">
                            <img src="https://img.okeinfo.net/content/2016/06/26/6/1425774/antoine-griezmann-man-of-the-match-laga-prancis-vs-republik-irlandia-H3TKB1KsUx.jpg" className="img-user-header" />
                            <p className="nav-menu-site-offis">Antoni Grisman </p>
                        </Link>

                        {/* <Link class="site-nav__link" onClick={(e) => this.setState({visibleFullScreen:true})} >
                            <p className="nav-menu-site-offis">Login or Signup </p>
                        </Link> */}

                        <Link to="/" class="site-nav__link" onClick={() => this.setState({visibleLeft:false})} >
                            <p className="nav-menu-site-offis">Home </p>
                        </Link>
                        <Link to="/space_booking" class="site-nav__link" onClick={() => this.setState({visibleLeft:false})} >
                            <p className="nav-menu-site-offis">Space </p>
                        </Link>
                        <Link to="/article" class="site-nav__link" onClick={() => this.setState({visibleLeft:false})} >
                            <p className="nav-menu-site-offis">Article </p>
                        </Link>
                        
                        <Link to="/food" class="site-nav__link" onClick={() => this.setState({visibleLeft:false})} >
                            <p className="nav-menu-site-offis">Food </p>
                        </Link>
                        
                        <Link to="/movie" class="site-nav__link" onClick={() => this.setState({visibleLeft:false})} >
                            <p className="nav-menu-site-offis">Movie </p>
                        </Link>

                        <Link to="/tentang" class="site-nav__link" onClick={() => this.setState({visibleLeft:false})} >
                            <p className="nav-menu-site-offis">Tentang Kami </p>
                        </Link>

                        
                        <Link to="/kontak" class="site-nav__link" onClick={() => this.setState({visibleLeft:false})} >
                            <p className="nav-menu-site-offis">Kontak </p>
                        </Link>


                    </Sidebar>
                    <nav class="nav-extended">
                        <div class="nav-background">
                            <div class="pattern active" >

                            </div>
                        </div>

                        <div class="nav-wrapper container">
                            <a href="" itemprop="url" class="brand-logo site-logo">Offis </a>

                            <a data-activates="nav-mobile" onClick={() => this.setState({visibleLeft:true})} class="button-collapse">
                                <i class="material-icons">menu</i>
                            </a>

                            <ul class="right hide-on-med-and-down">
                                

                                <li class="site-nav--active">
                                    <Link to="/" class="site-nav__link">Home</Link>
                                </li>

                                <li class="site-nav--active">
                                    <Link to="/space_booking" class="site-nav__link">Space</Link>
                                </li>

                                <li class="site-nav--active">
                                    <Link to="/article" class="site-nav__link">Article</Link>
                                </li>
                                
                                <li class="site-nav--active">
                                    <Link to="/food" class="site-nav__link">Food</Link>
                                </li>
                                
                                <li class="site-nav--active">
                                    <Link to="/movie" class="site-nav__link">Movie</Link>
                                </li>
                                <li class="site-nav--active">
                                    <Link to="/tentang" class="site-nav__link">Tentang Kami</Link>
                                </li>
                                <li class="site-nav--active">
                                    <Link to="/kontak" class="site-nav__link">Kontak</Link>
                                </li>

                                <li class="site-nav--active">
                                    <a onClick={(e) => this.setState({visibleFullScreen:true})} class="site-nav__link">Login</a>
                                </li>
                                
                                <li class="site-nav--active">
                                    <Link to="/movie" class="site-nav__link">
                                        <img src="https://img.okeinfo.net/content/2016/06/26/6/1425774/antoine-griezmann-man-of-the-match-laga-prancis-vs-republik-irlandia-H3TKB1KsUx.jpg" class="img-user-header" />
                                        Antoni Grisman 
                                    </Link>
                                </li>

                                {/* <li>
                                    <a href="cart.html">
                                        <i class="material-icons left">shopping_cart</i>
                                        Cart
                        
                                    </a>
                                </li>
                                <li>
                                    <a class="fullscreen-search" href="#">
                                        <i class="material-icons">search</i>
                                    </a>
                                </li> 
                    
                                <li>
                                    <a href="account/login.html" id="customer_login_link">Log in</a>
                                </li>

                                <li>
                                    <a href="account/register.html" id="customer_register_link">Create account</a>
                                </li>  */}
                    
                            </ul>
                        </div>

                        {/* <div class="nav-header center">

                            <h1>Offis Coworking Space </h1>
                            <div class="tagline">Tempat Anda Berkarya</div>

                        </div> */}
                    </nav>

                    {/* <div data-section-id="header" data-section-type="header-section">
                        <header role="banner">

                            <div class="popup-search-wrapper">
                                <form action="#" method="get" role="search">
                                    <label for="Search" class="label-hidden active">
                                        Search our store
                                    </label>
                                    <input type="search" name="q" id="Search" value="" placeholder="Search our store">
                                    <button type="submit" class="btn-flat btn-floating waves-effect">
                                        <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-search" viewBox="0 0 20 20">
                                            <path fill="#444" d="M18.64 17.02l-5.31-5.31c.81-1.08 1.26-2.43 1.26-3.87C14.5 4.06 11.44 1 7.75 1S1 4.06 1 7.75s3.06 6.75 6.75 6.75c1.44 0 2.79-.45 3.87-1.26l5.31 5.31c.45.45 1.26.54 1.71.09.45-.36.45-1.17 0-1.62zM3.25 7.75c0-2.52 1.98-4.5 4.5-4.5s4.5 1.98 4.5 4.5-1.98 4.5-4.5 4.5-4.5-1.98-4.5-4.5z"></path>
                                        </svg>
                                        <span class="icon-fallback-text">Search</span>
                                    </button>
                                </form>
                                <i class="popup-close material-icons">close</i>
                            </div>

                        </header>
                    </div>  */}

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
                    <Sidebar visible={this.state.visibleFullScreen} style={{ height: 350 }} position="bottom" baseZIndex={1000000} onHide={() => this.setState({ visibleFullScreen: false })}>
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

                            <div className="">
                                <button class="btn btn-success" style={{width: '100%'}} onClick={() => this.loginUser()}  ><i className="fa fa-lock"></i> Login</button>
                            </div>
                            <br />
                            <div className="col-size-0 col-xs-8 col-lg-6">
                                <small>Belum punya akun ? <a type="button" onClick={(e) => this.setState({formRegistrasi:true,})} >Daftar</a></small>
                            </div>
                            <br />
                            
                            <hr />
                            
                                <button  class="btn btn-danger col-lg-4 col-xs-12" ><i class="fa fa-google-plus"></i> Login with Google</button>
                                <button  class="btn btn-primary col-lg-4 col-xs-12"  ><i class="fa fa-facebook"></i> Login with Facebook</button>
                                <button  class="btn btn-info col-lg-4 col-xs-12"  ><i class="fa fa-twitter"></i> Login with Twitter</button>
                            
                            
                        </div>
                    </Sidebar>
                    
                </div>

                );
        
        }

    }
        
export default Header;