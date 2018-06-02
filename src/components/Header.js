import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Sidebar} from 'primereact/components/sidebar/Sidebar';
import {Accordion,AccordionTab} from 'primereact/components/accordion/Accordion';
import {TabView,TabPanel} from 'primereact/components/tabview/TabView';
import {Button} from 'primereact/components/button/Button';
import {SplitButton} from 'primereact/components/splitbutton/SplitButton';

class Header extends Component {

    constructor() {
        super();
        this.state = {
            visibleLeft: false,
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

    render(){
        return (
                <div id="shopify-section-header" class="shopify-section">

                    <Sidebar visible={this.state.visibleLeft} baseZIndex={1000000} onHide={() => this.setState({visibleLeft: false})}>
                        <Link to="/" class="site-nav__link" onClick={() => this.setState({visibleLeft:false})} >
                            <p className="nav-menu-site-offis">Home </p>
                        </Link>
                        <Link to="/space_booking" class="site-nav__link" onClick={() => this.setState({visibleLeft:false})} >
                            <p className="nav-menu-site-offis">Space </p>
                        </Link>
                        <Link to="/article" class="site-nav__link" onClick={() => this.setState({visibleLeft:false})} >
                            <p className="nav-menu-site-offis">Article </p>
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

                        <div class="nav-header center">

                            <h1>Offis Coworking Space </h1>
                            <div class="tagline">Tempat Anda Berkarya</div>

                        </div>
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
                    
                </div>


                );
        
        }

    }
        
export default Header;