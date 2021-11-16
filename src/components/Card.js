import React, { Component } from 'react'

class Card extends Component {
    render() {
        const { image, movieReleaseDate, movieTitle, movieOverview } = this.props
        return (
                <div className="col-4">
                <div style={{ backgroundImage: `url('https://image.tmdb.org/t/p/w300${image}')`,backgroundPosition: 'center', height:'300px'}}>
                    </div>
                    <div>
                        <p>{movieReleaseDate}</p>
                        <p>{movieTitle}</p>
                        <p>{movieOverview}</p>
                    </div>
                </div>
        )
    }
}

export default Card