import React, { Component } from 'react'

class Popular extends Component {
    constructor () {
        super ()

        this.state = {
            movies: [],
        }
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=74ff4d5b18f55c304a239fadf716fe2f")
        .then(response => response.json())
        .then(data => {
            this.setState({movies: data.result});
        })
        .catch(error => console.error(error));
    }
    
    render() {
        console.log("state de movies:", this.state.movies)
        return (
            <div>
                <h1>Popular</h1>
                {this.state.movies.map(data =>
                    <div>
                        <img src={"https://www.pngall.com/wp-content/uploads/1/Film-High-Quality-PNG.png"}/>
                        <p>{this.state.movie.title}</p>
                        <p>{this.state.movie.year}</p>
                        <p>{this.state.movie.description}</p>
                    </div> 
                )}
            </div>
        )
    }
}

export default Popular