import React, { Component } from "react";

export default class PokeItem extends Component {
    render() {
        const { charPokemon } = this.props;
        const {
            url_image,
            pokemon
        } = charPokemon;
        
        return (
            
            charPokemon.name
             ? <div>
                 <p><img
                    alt={ url_image }
                    src={ url_image }/></p>
                 <p>name: { pokemon }</p>
            
             </div>
        );
    }
}