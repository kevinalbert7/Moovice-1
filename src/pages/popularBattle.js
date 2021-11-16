import React, { Component } from 'react'

import Card from '../components/Card';

class PopularBattle extends Component {
    constructor () {
        super ()

        this.state = {
            movies: [],
            currentBattle: 0,
        }
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=74ff4d5b18f55c304a239fadf716fe2f")
        .then(response => response.json())
        .then(data => {
            this.setState({movies: data.results});
        })
        .catch(error => console.error(error));
    }

    render() {
        console.log("state de movies dans PopularBattle:", this.state.movies.slice(0,2))
        return (
            <div>
                <h1>popularBattle</h1>
                {this.state.movies.slice(0,2).map((element) => (                  
                    <Card 
                        key={element.id} 
                        image={element.poster_path}
                        movieTitle={element.title} 
                        movieReleaseDate={element.release_date}
                        movieOverview={element.overview} 
                    />
                    ))
                }
            </div>
        )
    }
}

export default PopularBattle