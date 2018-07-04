import React, { Component } from 'react';
import axios from 'axios';
import {Card} from 'primereact/components/card/Card';

class Food extends Component {

    constructor() {
        super();
        this.state = {
          resto: [],
          inputUser: '',
        }
    }

    componentDidMount() {
        var urlUser = `https://developers.zomato.com/api/v2.1/search?q=madiun`;
        var config = {
          headers: {'user-key' :'5c93a9595788cb334cb5832209121070'}
        }
        
        axios.get(urlUser, config)
        .then((ambilData) => {
          console.log(ambilData.data.restaurants);
          this.setState({
            resto: ambilData.data.restaurants,
          })
        })
    }

    render() {

        const dataResto = this.state.resto.map((item, index) => {
            var nama = item.restaurant.name;
            var alamat = item.restaurant.location.address;
            // var foto = item.restaurant.thumb;
            
            let header = <img alt={nama} src={item.restaurant.thumb}/>;
            return (
            // <li key="index">
            // <h1>{nama}</h1>
            // <p>{alamat}</p>
            // <img src={foto} alt=""/>
            // </li>item.restaurant.thumb
            
            <div className="ui-g-12 ui-md-6 ui-lg-3" key={index} >
                <Card title={nama} subtitle={alamat} style={{width: '100%'}} className="ui-card-shadow " header={header}>
                    
                </Card>
            </div>

            )
        })

        return (
            <div className="Article">

                <center>
                <h1> Madiun Food</h1>
                    {/* <h1>
                    
                    </h1> */}
                    {/* <button onClick={() => {this.klikZomato()}} className="btn btn-success">Get Data</button> */}
                    
                    <div class="container">
                        {dataResto}
                    </div>
                    
                    {/* <table>
                    {dataResto}
                    </table> */}
                </center>
                <hr />
            </div>
        );
    }
}

export default Food;