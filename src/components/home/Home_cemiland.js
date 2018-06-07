import React, { Component } from 'react' ;
import axios from 'axios';

class Home_cemiland extends Component{

    constructor(){
        super();
        this.state ={
            userInput:'',
        }
    }

    cari(){

        var url = `https://developers.zomato.com/api/v2.1/search?q=kebab`
        axios.get(url).then((data_zomato) => {
            console.log(data_zomato.restaurants);
        });
    }

    render(){
        return(
                <div>
                    <button>A</button>
                </div>
        );
    }
}

export default Home_cemiland;