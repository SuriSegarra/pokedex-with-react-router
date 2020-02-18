import React, { Component } from 'react';
import request from 'superagent';
import PokeItem from './PokeItem.js';
// import { Link } from 'react-router-dom';
import { getPokemon } from './API.js';

export default class Home extends Component  {
   
    state = {nameSearch: null, currentPokemonArr: []
    }
    handleSearch = async (e) => {
        e.preventDefault();
        const data = await request.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.nameSearch}`)

        this.setState({
            currentPokemonArr: data.body.results,
    
        })
     console.log(data)
    }
    render(){

console.log(this.state.currentPokemonArr)
        
        const handleNameChange = e => {
            this.setState({ ...this.state,nameSearch: e.target.value});
        }
       
        return (
            <div>
                <main>
                    <button onClick={
                    this.nameSearch
                    }>Name</button>

                    <section className='options'>
                        <label>
                            Name: 
                            <input type='text' name='name' onChange={handleNameChange}/>
                        </label>
                    </section>
                    <ul className='pokemons'>{
                        this.state.currentPokemonArr.map(pokemonObj => <PokeItem pokemon={pokemonObj}/> )
                    }</ul>
                </main>
            </div>
        )
    }
}