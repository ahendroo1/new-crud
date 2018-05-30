import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

class Home extends Component {

    render() {
        return (
                <div className="Home">
                        <main role="main" id="MainContent">
                            <div id="shopify-section-featured-product" class="shopify-section">

                            {/* <script type="application/json" data-product-json="">
                            {"id":10553013133,"title":"Ishtar","handle":"ishtar","description":"\u003cmeta charset=\"utf-8\"\u003e\u003cspan\u003eLiterally venmo before they sold out, DIY heirloom forage polaroid offal yr pop-up selfies health goth. Typewriter scenester hammock truffaut meditation, squid before they sold out polaroid portland tousled taxidermy vice. Listicle butcher thundercats, taxidermy pitchfork next level roof party crucifix narwhal kinfolk you probably haven't heard of them portland small batch.\u003c\/span\u003e","published_at":"2017-05-26T18:02:45-04:00","created_at":"2017-08-21T19:43:16-04:00","vendor":"Materialize Shopify Themes","type":"poly","tags":[],"price":6000,"price_min":6000,"price_max":6000,"available":true,"price_varies":false,"compare_at_price":10000,"compare_at_price_min":10000,"compare_at_price_max":10000,"compare_at_price_varies":false,"variants":[{"id":41284090381,"title":"Default Title","option1":"Default Title","option2":null,"option3":null,"sku":"","requires_shipping":true,"taxable":false,"featured_image":null,"available":true,"name":"Ishtar","public_title":null,"options":["Default Title"],"price":6000,"weight":0,"compare_at_price":10000,"inventory_quantity":0,"inventory_management":null,"inventory_policy":"deny","barcode":""}],"images":["\/\/cdn.shopify.com\/s\/files\/1\/2030\/2737\/products\/sintel-wallpaper-ishtar.jpg?v=1503359011"],"featured_image":"\/\/cdn.shopify.com\/s\/files\/1\/2030\/2737\/products\/sintel-wallpaper-ishtar.jpg?v=1503359011","options":["Title"],"content":"\u003cmeta charset=\"utf-8\"\u003e\u003cspan\u003eLiterally venmo before they sold out, DIY heirloom forage polaroid offal yr pop-up selfies health goth. Typewriter scenester hammock truffaut meditation, squid before they sold out polaroid portland tousled taxidermy vice. Listicle butcher thundercats, taxidermy pitchfork next level roof party crucifix narwhal kinfolk you probably haven't heard of them portland small batch.\u003c\/span\u003e"} 
                            </script> */}

                            </div>
                            <div id="shopify-section-1506829244446" class="shopify-section">

                            {/* <script type="application/json" data-product-json="">
                                {"id":10208943373,"title":"Hexagon","handle":"hexagon","description":"\u003cmeta charset=\"utf-8\"\u003e\u003cspan\u003eLiterally venmo before they sold out, DIY heirloom forage polaroid offal yr pop-up selfies health goth. Typewriter scenester hammock truffaut meditation, squid before they sold out polaroid portland tousled taxidermy vice. Listicle butcher thundercats, taxidermy pitchfork next level roof party crucifix narwhal kinfolk you probably haven't heard of them portland small batch.\u003c\/span\u003e","published_at":"2017-05-31T03:28:43-04:00","created_at":"2017-05-31T03:30:39-04:00","vendor":"Materialize Shopify Themes","type":"Sacred Geometry","tags":["Hexagon"],"price":9000,"price_min":9000,"price_max":11000,"available":true,"price_varies":true,"compare_at_price":8000,"compare_at_price_min":8000,"compare_at_price_max":8000,"compare_at_price_varies":false,"variants":[{"id":38652727501,"title":"Small","option1":"Small","option2":null,"option3":null,"sku":"","requires_shipping":true,"taxable":true,"featured_image":null,"available":true,"name":"Hexagon - Small","public_title":"Small","options":["Small"],"price":9000,"weight":0,"compare_at_price":null,"inventory_quantity":1,"inventory_management":null,"inventory_policy":"deny","barcode":""},{"id":39442296589,"title":"Medium","option1":"Medium","option2":null,"option3":null,"sku":"","requires_shipping":true,"taxable":true,"featured_image":null,"available":true,"name":"Hexagon - Medium","public_title":"Medium","options":["Medium"],"price":10000,"weight":0,"compare_at_price":null,"inventory_quantity":1,"inventory_management":null,"inventory_policy":"deny","barcode":""},{"id":39442296653,"title":"Large","option1":"Large","option2":null,"option3":null,"sku":"","requires_shipping":true,"taxable":true,"featured_image":null,"available":true,"name":"Hexagon - Large","public_title":"Large","options":["Large"],"price":11000,"weight":0,"compare_at_price":8000,"inventory_quantity":1,"inventory_management":null,"inventory_policy":"deny","barcode":""}],"images":["\/\/cdn.shopify.com\/s\/files\/1\/2030\/2737\/products\/sacredgeometry3.jpg?v=1496215840"],"featured_image":"\/\/cdn.shopify.com\/s\/files\/1\/2030\/2737\/products\/sacredgeometry3.jpg?v=1496215840","options":["Size"],"content":"\u003cmeta charset=\"utf-8\"\u003e\u003cspan\u003eLiterally venmo before they sold out, DIY heirloom forage polaroid offal yr pop-up selfies health goth. Typewriter scenester hammock truffaut meditation, squid before they sold out polaroid portland tousled taxidermy vice. Listicle butcher thundercats, taxidermy pitchfork next level roof party crucifix narwhal kinfolk you probably haven't heard of them portland small batch.\u003c\/span\u003e"} 
                            </script> */}

                            </div>
                            <div id="shopify-section-featured-collection" class="shopify-section">

                            <div class="featured-collection-wrapper  container">
                                <div>
                                    <h2 class="collection-title">Fasilitas</h2>
                                    <div class="rte">
                                        <span>Literally venmo before they sold out, DIY heirloom forage polaroid offal yr pop-up selfies health goth. Typewriter
                                        scenester hammock truffaut meditation, squid before they sold out polaroid portland tousled taxidermy vice.
                                        Listicle butcher thundercats, taxidermy pitchfork next level roof party crucifix narwhal kinfolk you probably
                                        haven't heard of them portland small batch.</span>
                                    </div>
                                </div>

                                <div class="gallery gallery-masonry row" >

                                <div class="col s6 m4 gallery-item gallery-expand gallery-filter" data-type="poly" data-section-type="product" >
                                    <div class="placeholder">
                                    <div class="gallery-curve-wrapper">
                                        <a class="gallery-cover gray">
                                        <img src="asset/cdn/s/files/1/2030/2737/products/sintel-wallpaper-ishtar_450x4505458.jpg?v=1503359011" alt="Ishtar"
                                            crossorigin="anonymous" data-product-featured-image="" />
                                        </a>

                                        <div class="gallery-header">
                                        <span class="title"><b>Print</b></span>
                                        <div class="product-ratings-price">

                                            <span class="spr-badge" id="spr_badge_10553013133" data-rating="4.0">
                                            {/* <span class="spr-starrating spr-badge-starrating">
                                                <i class="spr-icon spr-icon-star"></i>
                                                <i class="spr-icon spr-icon-star"></i>
                                                <i class="spr-icon spr-icon-star"></i>
                                                <i class="spr-icon spr-icon-star"></i>
                                                <i class="spr-icon spr-icon-star-empty"></i>
                                            </span>
                                            <span class="spr-badge-caption">26 reviews</span> */}
                                            </span>
                                            <span class="price" data-product-price="">
                                            Kini Offis Coworking Space menyediakan keperluan dalam waktu bekerja anda di Offis Coworking Space
                                            </span>
                                        </div>
                                        </div>

                                    </div>
                                    
                                        {/* <script type="application/json" data-product-json="">
                                            {"id":10553013133,"title":"Ishtar","handle":"ishtar","description":"\u003cmeta charset=\"utf-8\"\u003e\u003cspan\u003eLiterally venmo before they sold out, DIY heirloom forage polaroid offal yr pop-up selfies health goth. Typewriter scenester hammock truffaut meditation, squid before they sold out polaroid portland tousled taxidermy vice. Listicle butcher thundercats, taxidermy pitchfork next level roof party crucifix narwhal kinfolk you probably haven't heard of them portland small batch.\u003c\/span\u003e","published_at":"2017-05-26T18:02:45-04:00","created_at":"2017-08-21T19:43:16-04:00","vendor":"Materialize Shopify Themes","type":"poly","tags":[],"price":6000,"price_min":6000,"price_max":6000,"available":true,"price_varies":false,"compare_at_price":10000,"compare_at_price_min":10000,"compare_at_price_max":10000,"compare_at_price_varies":false,"variants":[{"id":41284090381,"title":"Default Title","option1":"Default Title","option2":null,"option3":null,"sku":"","requires_shipping":true,"taxable":false,"featured_image":null,"available":true,"name":"Ishtar","public_title":null,"options":["Default Title"],"price":6000,"weight":0,"compare_at_price":10000,"inventory_quantity":0,"inventory_management":null,"inventory_policy":"deny","barcode":""}],"images":["\/\/cdn.shopify.com\/s\/files\/1\/2030\/2737\/products\/sintel-wallpaper-ishtar.jpg?v=1503359011"],"featured_image":"\/\/cdn.shopify.com\/s\/files\/1\/2030\/2737\/products\/sintel-wallpaper-ishtar.jpg?v=1503359011","options":["Title"],"content":"\u003cmeta charset=\"utf-8\"\u003e\u003cspan\u003eLiterally venmo before they sold out, DIY heirloom forage polaroid offal yr pop-up selfies health goth. Typewriter scenester hammock truffaut meditation, squid before they sold out polaroid portland tousled taxidermy vice. Listicle butcher thundercats, taxidermy pitchfork next level roof party crucifix narwhal kinfolk you probably haven't heard of them portland small batch.\u003c\/span\u003e"}
                                        </script>  */}

                                    </div>
                                </div>

                                <div class="col s6 m4 gallery-item gallery-expand gallery-filter" data-type="poly" data-section-type="product" >
                                    <div class="placeholder">
                                    <div class="gallery-curve-wrapper">
                                        <a class="gallery-cover gray">
                                        <img src="asset/cdn/s/files/1/2030/2737/products/sintel-wallpaper-ishtar_450x4505458.jpg?v=1503359011" alt="Ishtar"
                                            crossorigin="anonymous" data-product-featured-image="" />
                                        </a>

                                        <div class="gallery-header">
                                        <span class="title"><b>Dish</b></span>
                                        <div class="product-ratings-price">

                                            {/* <span class="spr-badge" id="spr_badge_10553013133" data-rating="4.0">
                                            <span class="spr-starrating spr-badge-starrating">
                                                <i class="spr-icon spr-icon-star"></i>
                                                <i class="spr-icon spr-icon-star"></i>
                                                <i class="spr-icon spr-icon-star"></i>
                                                <i class="spr-icon spr-icon-star"></i>
                                                <i class="spr-icon spr-icon-star-empty"></i>
                                            </span>
                                            <span class="spr-badge-caption">26 reviews</span>
                                            </span>  */}
                                            <span class="price" data-product-price="">
                                            Offis Coworking Space juga menyediakan berbagai hidangan untuk menemani anda bekerja
                                            </span>
                                        </div>
                                        </div>

                                        <div class="gallery-body">
                                        <div class="title-wrapper">
                                            <h3>Dish</h3>
                                        </div>
                                        <div class="checkout-column">
                                            <form action="https://materialize-shopify-themes.myshopify.com/cart/add" method="post" enctype="multipart/form-data">
                                            <div class="price-quantity-wrapper">
                                                <div class="price-wrapper" data-price-wrapper="">
                                                <label>Harga</label>
                                                <span class="price" data-product-price="">
                                                    $60.00
                                                </span>

                                                <span class="visually-hidden" data-compare-text="">Jumlah</span>
                                                
                                                </div>

                                                <div class="input-field quantity-counter">
                                                <label for="Quantity" class="active">Jumlah</label>
                                                <i class="material-icons remove">remove_circle_outline</i>
                                                <input type="number" id="Quantity" name="quantity" value="1" min="1" />
                                                <i class="material-icons add">add_circle_outline</i>
                                                </div>

                                            </div>

                                            <div class="select-wrapper no-js">
                                                <span class="caret">▼</span>
                                                <input type="text" class="select-dropdown" readonly="true" data-activates="select-options-8055b12c-8b91-fa79-574d-e4e44c71d750"
                                                value="Default Title" />
                                                <ul id="select-options-8055b12c-8b91-fa79-574d-e4e44c71d750" class="dropdown-content select-dropdown ">
                                                <li class="">
                                                    <span>
                                                    Default Title
                                                    </span>
                                                </li>
                                                </ul>
                                                <div class="select-wrapper no-js initialized">
                                                <span class="caret">▼</span>
                                                <input type="text" class="select-dropdown" readonly="true" data-activates="select-options-f2887886-48a8-2b50-28cd-baed6840099b" value=" Default Title " />
                                                <ul id="select-options-f2887886-48a8-2b50-28cd-baed6840099b" class="dropdown-content select-dropdown ">
                                                    <li class="">
                                                    <span>
                                                        Default Title
                                                    </span>
                                                    </li>
                                                </ul>
                                                <select name="id" class="no-js initialized" data-product-select="">

                                                    <option selected="selected" value="41284090381"> Default Title </option>

                                                </select>
                                                </div>
                                            </div>

                                            <button class="btn-large z-depth-0" type="submit" name="add" data-add-to-cart="">
                                                <span data-add-to-cart-text="">Pesan Tempat</span>
                                            </button>

                                            </form>
                                        </div>
                                        <div class="description">
                                            <p>
                                            <span>Literally venmo before they sold out, DIY heirloom forage polaroid offal yr pop-up selfies health goth.
                                                Typewriter scenester hammock truffaut meditation, squid before they sold out polaroid portland tousled
                                                taxidermy vice. Listicle butcher thundercats, taxidermy pitchfork next level roof party crucifix
                                                narwhal kinfolk you probably haven't heard of them portland small batch.</span>
                                                
                                            </p>

                                            {/* <div id="shopify-product-reviews" data-id="10553013133">

                                            <style scoped="">
                                                .spr-container {
                                                padding: 24px;
                                                border-color: #ECECEC;
                                                }

                                                .spr-review,
                                                .spr-form {
                                                border-color: #ECECEC;
                                                }
                                            </style>

                                            <div class="spr-container">
                                            
                                            </div>

                                            </div>  */}
                                        </div>
                                        </div>

                                        <div class="gallery-action">
                                        <a class="go-to-ratings btn-floating btn-large waves-effect waves-light">
                                            <i class="material-icons">star</i>
                                        </a>

                                        </div>
                                    </div>
                                    
                                    
                                                    {/* <script type="application/json" data-product-json="">
                                            {"id":10553013133,"title":"Ishtar","handle":"ishtar","description":"\u003cmeta charset=\"utf-8\"\u003e\u003cspan\u003eLiterally venmo before they sold out, DIY heirloom forage polaroid offal yr pop-up selfies health goth. Typewriter scenester hammock truffaut meditation, squid before they sold out polaroid portland tousled taxidermy vice. Listicle butcher thundercats, taxidermy pitchfork next level roof party crucifix narwhal kinfolk you probably haven't heard of them portland small batch.\u003c\/span\u003e","published_at":"2017-05-26T18:02:45-04:00","created_at":"2017-08-21T19:43:16-04:00","vendor":"Materialize Shopify Themes","type":"poly","tags":[],"price":6000,"price_min":6000,"price_max":6000,"available":true,"price_varies":false,"compare_at_price":10000,"compare_at_price_min":10000,"compare_at_price_max":10000,"compare_at_price_varies":false,"variants":[{"id":41284090381,"title":"Default Title","option1":"Default Title","option2":null,"option3":null,"sku":"","requires_shipping":true,"taxable":false,"featured_image":null,"available":true,"name":"Ishtar","public_title":null,"options":["Default Title"],"price":6000,"weight":0,"compare_at_price":10000,"inventory_quantity":0,"inventory_management":null,"inventory_policy":"deny","barcode":""}],"images":["\/\/cdn.shopify.com\/s\/files\/1\/2030\/2737\/products\/sintel-wallpaper-ishtar.jpg?v=1503359011"],"featured_image":"\/\/cdn.shopify.com\/s\/files\/1\/2030\/2737\/products\/sintel-wallpaper-ishtar.jpg?v=1503359011","options":["Title"],"content":"\u003cmeta charset=\"utf-8\"\u003e\u003cspan\u003eLiterally venmo before they sold out, DIY heirloom forage polaroid offal yr pop-up selfies health goth. Typewriter scenester hammock truffaut meditation, squid before they sold out polaroid portland tousled taxidermy vice. Listicle butcher thundercats, taxidermy pitchfork next level roof party crucifix narwhal kinfolk you probably haven't heard of them portland small batch.\u003c\/span\u003e"}
                                        </script>  */}

                                    </div>
                                </div>

                                
                                <div class="col s6 m4 gallery-item gallery-expand gallery-filter" data-type="poly" data-section-type="product" >
                                    <div class="placeholder">
                                    <div class="gallery-curve-wrapper">
                                        <a class="gallery-cover gray">
                                        <img src="asset/cdn/s/files/1/2030/2737/products/sintel-wallpaper-ishtar_450x4505458.jpg?v=1503359011" alt="Ishtar"
                                            crossorigin="anonymous" data-product-featured-image="" />
                                        </a>

                                        <div class="gallery-header">
                                        <span class="title"><b>Science</b></span>
                                        <div class="product-ratings-price">
                                            {/* <span class="spr-badge" id="spr_badge_10553013133" data-rating="4.0">
                                            <span class="spr-starrating spr-badge-starrating">
                                                <i class="spr-icon spr-icon-star"></i>
                                                <i class="spr-icon spr-icon-star"></i>
                                                <i class="spr-icon spr-icon-star"></i>
                                                <i class="spr-icon spr-icon-star"></i>
                                                <i class="spr-icon spr-icon-star-empty"></i>
                                            </span>
                                            <span class="spr-badge-caption">26 reviews</span>
                                            </span>  */}
                                            <span class="price" data-product-price="">
                                            Selain menikmati kenyamanan bekerja anda selama di Offis Coworking Space anda akan di kenalkan dengan dunia bisnis
                                            </span>
                                        </div>
                                        </div>


                                        <div class="gallery-body">
                                        <div class="title-wrapper">
                                            <h3>Science</h3>
                                        </div>
                                        <div class="checkout-column">
                                            <form action="https://materialize-shopify-themes.myshopify.com/cart/add" method="post" enctype="multipart/form-data">
                                            <div class="price-quantity-wrapper">
                                                <div class="price-wrapper" data-price-wrapper="">
                                                <label>Harga</label>
                                                <span class="price" data-product-price="">
                                                    $60.00
                                                </span>

                                                <span class="visually-hidden" data-compare-text="">Jumlah</span>
                                                <s data-compare-price="">

                                                    $100.00

                                                </s>

                                                </div>

                                                <div class="input-field quantity-counter">
                                                <label for="Quantity" class="active">Jumlah</label>
                                                <i class="material-icons remove">remove_circle_outline</i>
                                                <input type="number" id="Quantity" name="quantity" value="1" min="1" />
                                                <i class="material-icons add">add_circle_outline</i>
                                                </div>
                                            </div>

                                            <div class="select-wrapper no-js">
                                                <span class="caret">▼</span>
                                                <input type="text" class="select-dropdown" readonly="true" data-activates="select-options-8055b12c-8b91-fa79-574d-e4e44c71d750"
                                                value="Default Title " />
                                                <ul id="select-options-8055b12c-8b91-fa79-574d-e4e44c71d750" class="dropdown-content select-dropdown ">
                                                <li class="">
                                                    <span>
                                                    Default Title
                                                    </span>
                                                </li>
                                                </ul>
                                                <div class="select-wrapper no-js initialized">
                                                <span class="caret">▼</span>
                                                <input type="text" class="select-dropdown" readonly="true" data-activates="select-options-f2887886-48a8-2b50-28cd-baed6840099b"
                                                    value=" Default Title " />
                                                <ul id="select-options-f2887886-48a8-2b50-28cd-baed6840099b" class="dropdown-content select-dropdown ">
                                                    <li class="">
                                                    <span>
                                                        Default Title
                                                    </span>
                                                    </li>
                                                </ul>
                                                <select name="id" class="no-js initialized" data-product-select="">

                                                    <option selected="selected" value="41284090381">
                                                    Default Title
                                                    </option>

                                                </select>
                                                </div>
                                            </div>

                                            <button class="btn-large z-depth-0" type="submit" name="add" data-add-to-cart="">
                                                <span data-add-to-cart-text="">Pesan Tempat</span>
                                            </button>

                                            </form>
                                        </div>
                                        <div class="description">
                                            <p>
                                            <meta charset="utf-8"/>
                                            <span>Literally venmo before they sold out, DIY heirloom forage polaroid offal yr pop-up selfies health goth.
                                                Typewriter scenester hammock truffaut meditation, squid before they sold out polaroid portland tousled
                                                taxidermy vice. Listicle butcher thundercats, taxidermy pitchfork next level roof party crucifix
                                                narwhal kinfolk you probably haven't heard of them portland small batch.</span>
                                                
                                            </p>

                                            {/* <div id="shopify-product-reviews" data-id="10553013133">

                                            <style scoped="">
                                                .spr-container {
                                                padding: 24px;
                                                border-color: #ECECEC;
                                                }

                                                .spr-review,
                                                .spr-form {
                                                border-color: #ECECEC;
                                                }
                                            </style>

                                            <div class="spr-container">
                                            
                                            </div>

                                            </div> */}

                                        </div>
                                        </div>

                                        <div class="gallery-action">
                                        <a class="go-to-ratings btn-floating btn-large waves-effect waves-light">
                                            <i class="material-icons">star</i>
                                        </a>
                                        </div>
                                    </div>
                                    
                                        {/* <script type="application/json" data-product-json="">
                                            {"id":10553013133,"title":"Ishtar","handle":"ishtar","description":"\u003cmeta charset=\"utf-8\"\u003e\u003cspan\u003eLiterally venmo before they sold out, DIY heirloom forage polaroid offal yr pop-up selfies health goth. Typewriter scenester hammock truffaut meditation, squid before they sold out polaroid portland tousled taxidermy vice. Listicle butcher thundercats, taxidermy pitchfork next level roof party crucifix narwhal kinfolk you probably haven't heard of them portland small batch.\u003c\/span\u003e","published_at":"2017-05-26T18:02:45-04:00","created_at":"2017-08-21T19:43:16-04:00","vendor":"Materialize Shopify Themes","type":"poly","tags":[],"price":6000,"price_min":6000,"price_max":6000,"available":true,"price_varies":false,"compare_at_price":10000,"compare_at_price_min":10000,"compare_at_price_max":10000,"compare_at_price_varies":false,"variants":[{"id":41284090381,"title":"Default Title","option1":"Default Title","option2":null,"option3":null,"sku":"","requires_shipping":true,"taxable":false,"featured_image":null,"available":true,"name":"Ishtar","public_title":null,"options":["Default Title"],"price":6000,"weight":0,"compare_at_price":10000,"inventory_quantity":0,"inventory_management":null,"inventory_policy":"deny","barcode":""}],"images":["\/\/cdn.shopify.com\/s\/files\/1\/2030\/2737\/products\/sintel-wallpaper-ishtar.jpg?v=1503359011"],"featured_image":"\/\/cdn.shopify.com\/s\/files\/1\/2030\/2737\/products\/sintel-wallpaper-ishtar.jpg?v=1503359011","options":["Title"],"content":"\u003cmeta charset=\"utf-8\"\u003e\u003cspan\u003eLiterally venmo before they sold out, DIY heirloom forage polaroid offal yr pop-up selfies health goth. Typewriter scenester hammock truffaut meditation, squid before they sold out polaroid portland tousled taxidermy vice. Listicle butcher thundercats, taxidermy pitchfork next level roof party crucifix narwhal kinfolk you probably haven't heard of them portland small batch.\u003c\/span\u003e"}
                                        </script>  */}

                                    </div>
                                </div>

                                </div>

                                <div class="center">
                                <a href="collections/frontpage.html" title="See all of the Home page collection" class="btn-large">Lihat Fasilitas</a>
                                </div>
                            </div>
                            
                            
                            </div>

                            <div id="shopify-section-collection-list" class="shopify-section">
                            <div class="featured-collection-wrapper container ">
                                <div class="">

                                <h2 class="collection-title">Event's</h2>

                                </div>

                                <div class="gallery gallery-masonry row" >


                                <div class="col s12 m6 gallery-item gallery-filter" >
                                    <div class="collection-item">
                                    <a class="gallery-cover" href="collections/sacred-geometry.html">

                                        <img src="asset/cdn/s/files/1/2030/2737/products/sacredgeometry1_480x480e2e4.jpg?v=1495867992" alt="Sacred Geometry" />

                                    </a>

                                    <a class="gallery-header" href="collections/sacred-geometry.html">
                                        <span class="title">

                                        Sacred Geometry

                                        </span>
                                    </a>

                                    </div>
                                </div>
                                <div class="col s12 m6 gallery-item gallery-filter" >
                                    <div class="collection-item">
                                    <a class="gallery-cover" href="asset/collections/polygons.html">

                                        <img src="asset/cdn/s/files/1/2030/2737/products/geometric-sun_480x4806024.jpg?v=1495836249" alt="Polygons" />

                                    </a>

                                    <a class="gallery-header" href="collections/polygons.html">
                                        <span class="title">
                                        Polygons
                                        </span>
                                    </a>

                                    </div>
                                </div>


                                <div class="col s12 m6 gallery-item gallery-filter" >
                                    <div class="collection-item">
                                    <a class="gallery-cover" href="collections/fillscreen-style.html">

                                        <img src="asset/cdn/s/files/1/2030/2737/products/overhead_480x480e92d.jpg?v=1499414076" alt="Fillscreen Style" />

                                    </a>


                                    <a class="gallery-header" href="collections/fillscreen-style.html">
                                        <span class="title">

                                        Fillscreen Style

                                        </span>
                                    </a>
                                    </div>
                                </div>

                                <div class="col s12 m6 gallery-item gallery-filter">
                                    <div class="collection-item">
                                    <a class="gallery-cover" href="collections/horizontal.html">

                                        <img src="asset/cdn/s/files/1/2030/2737/collections/sintel-bamboo_480x480e0ef.jpg?v=1506895971" alt="Horizontal" />

                                    </a>

                                    <a class="gallery-header" href="collections/horizontal.html">
                                        <span class="title">

                                        Horizontal

                                        </span>
                                    </a>

                                    </div>
                                </div>
                                </div>
                            </div>


                            </div>

                        </main>
                </div>
        );
    }
}

export default Home;