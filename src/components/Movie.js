import React, { Component } from 'react';
import axios from 'axios';
import {Card} from 'primereact/components/card/Card';

class Article extends Component {

    constructor() {
        super();
        this.state = {
          movie: [],
        //   inputUser: '',
        }
    }


    componentDidMount() {
      
        
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=70019597619c8491d3d89055a06e87ee')
        .then((ambilData) => {
          console.log(ambilData.data.results);
          this.setState({
            movie: ambilData.data.results,
          })
        })
    }


    render() {

        const dataMovie = this.state.movie.map((item, index) => {
            var judul = item.title;
            var overview = item.overview;
            // var img = 'https://image.tmdb.org/t/p/w500'+item.backdrop_path;
            
            let header = <img alt="bjhsx" src={'https://image.tmdb.org/t/p/w500'+item.backdrop_path}/>;
            return (
                // <li key="index">
                // <h1>{title}</h1>
                // <p>{overview}</p>
                // {/* <img src={foto} alt=""/> */}
                // </li>
                
                <div className="ui-g-12 ui-md-6 ui-lg-3" key={index} >
                    <Card title={judul} subtitle={overview} style={{width: '100%'}} className="ui-card-shadow " header={header}>
                        
                    </Card>
                </div>

            )
        })
      
        return (
            <div className="Movie">
                <h1>Ini Movie</h1>
                <div class="container">
                    {dataMovie}
                </div>
            </div>
        );
    }
}

export default Article;