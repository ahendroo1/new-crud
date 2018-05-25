import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => { 
        return (
                <div id="shopify-section-header" class="shopify-section">
                    <nav class="nav-extended">

                        <div class="nav-background">
                            <div class="pattern active" >
                            <img src="https://images.theconversation.com/files/86410/original/image-20150625-12984-1wai4gp.jpg?ixlib=rb-1.1.0&amp;q=45&amp;auto=format&amp;w=926&amp;fit=clip" />
                            </div>
                        </div>

                        <div class="nav-wrapper container">
                            <a href="" itemprop="url" class="brand-logo site-logo">Offis </a>

                            <a data-activates="nav-mobile" class="button-collapse">
                                <i class="material-icons">menu</i>
                            </a>
                            <ul class="right hide-on-med-and-down">

                                <li class="site-nav--active">
                                    <Link to="/" class="site-nav__link">Home</Link>
                                </li>
                                <li class="site-nav--active">
                                    <Link to="/article" class="site-nav__link">Article</Link>
                                </li>

                                <li class="site-nav--has-submenu">

                                    <a href="#" class="site-nav__link dropdown-button" data-activates="features-dropdown" data-beloworigin="true" data-constrainwidth="false" data-hover="true">
                                        Space
                                        <i class="material-icons right">arrow_drop_down</i>
                                    </a>

                                    <ul id="features-dropdown" class="site-nav__submenu dropdown-content">

                                        <li>
                                            <a href="space_booking" class="site-nav__link">Meeting Room</a>
                                        </li>

                                        <li>
                                            <a href="space_booking" class="site-nav__link">Event Space</a>
                                        </li>

                                        <li>
                                            <a href="space_booking" class="site-nav__link">Open Space</a>
                                        </li>

                                        <li>
                                            <Link to="/space_booking" class="site-nav__link">All Space</Link>
                                        </li>
                                    </ul>
                                </li>

                                <li>
                                    <a href="blogs/news.html" class="site-nav__link">Events</a>
                                </li>
                                <li>
                                    <a href="/article" class="site-nav__link">Article</a>
                                </li>
                                <li>
                                    <a href="blog" class="site-nav__link">Blog</a>
                                </li>
                                <li>
                                    <a href="kontak" class="site-nav__link">Kontak</a>
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
                    <ul class="side-nav" id="nav-mobile">

                        {/* <li>
                            <a href="account/login.html" id="customer_login_link">Log in</a>
                        </li>

                        <li>
                            <a href="account/register.html" id="customer_register_link"> Create account</a>
                        </li>  */}
                
                        <li class="site-nav--active active">
                            <a href="" class="site-nav__link">Profile</a>
                        </li>

                        <li class="site-nav--has-submenu">
                            <ul class="collapsible" data-collapsible="accordion">
                                <li>
                                    <div class="collapsible-header">Space
                                        <i class="material-icons right">arrow_drop_down</i>
                                    </div>
                                    <div class="collapsible-body no-padding">
                                        <ul>
                                            <li>
                                                <a href="space_booking" class="site-nav__link">Meeting Room</a>
                                            </li>

                                            <li>
                                                <a href="space_booking" class="site-nav__link">Event Space</a>
                                            </li>

                                            <li>
                                                <a href="space_booking" class="site-nav__link">Open Space</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <a href="blogs/news.html" class="site-nav__link">Events</a>
                        </li>

                        <li>
                            <a href="blog" class="site-nav__link">Blog</a>
                        </li>
                        <li>
                            <a href="kontak" class="site-nav__link">Kontak</a>
                        </li>

                    </ul>

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
        
export default Header;