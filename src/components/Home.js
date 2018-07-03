import React, { Component } from 'react';
import Slider from 'react-animated-slider';
// import Home_space from './home/Home_space';
import 'react-animated-slider/build/horizontal.css';
import './css/slider-animations.css';
import './css/styles.css';

class Home extends Component {

    render() {
        const content = [
            {
                title: 'Vulputate Mollis Ultricies Fermentum Parturient',
                description:
                'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
                button: 'Read More',
                image: 'https://i.imgur.com/ZXBtVw7.jpg',
                user: 'Luan Gjokaj',
                userProfile: 'https://i.imgur.com/JSW6mEk.png'
            },
            {
                title: 'Tortor Dapibus Commodo Aenean Quam',
                description:
                'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.',
                button: 'Discover',
                image: 'https://i.imgur.com/DCdBXcq.jpg',
                user: 'Erich Behrens',
                userProfile: 'https://i.imgur.com/0Clfnu7.png'
            },
            {
                title: 'Phasellus volutpat metus',
                description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.',
                button: 'Buy now',
                image: 'https://i.imgur.com/DvmN8Hx.jpg',
                user: 'Bruno Vizovskyy',
                userProfile: 'https://i.imgur.com/4KeKvtH.png'
            }
        ];
        return (
                <div className="Home">
                        <main role="main" id="MainContent">
                        <Slider autoplay={1000}>
                                {content.map((item, index) => (
                                <div
                                    key={index}
                                    style={{ background: `url('${item.image}') no-repeat center center` }}
                                >
                                    <div className="center">
                                        <h1>{item.title}</h1>
                                        <p>{item.description}</p>
                                        <button>{item.button}</button>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                        {/* <Home_space /> */}

                        </main>
                </div>
        );
    }
}

export default Home;