import React, { Component } from "react";

export default class PokeItem extends Component {
    render() {
        return (
            <li>
                <div className='title-container'>
                    <h2>{this.props.pokemon.pokemon}</h2>
                </div>

                <div className='image'>
                    <img
                    alt={this.props.pokemon.url_image}
                    src={this.props.pokemon.url_image}/>
                </div>
                
            </li>

         );
    }
}