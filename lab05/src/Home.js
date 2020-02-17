import React, { Component } from 'react';
import PokeItem from './components/PokeItem.js';
// import Page from './Page.js';

export default class Home extends Component  {
    constructor(props){
        super(props)
       this.state = { currentPokemonArr: [], nameSearch:null}
    }
        render(){
            // let increment = () => {
            //     console.log('state', this.state)
            //     let nextPage = this.state.page + 1
            //     this.setState({...this.state, page: nextPage })
            // }
            // let decrement = () => {
            //     console.log('state', this.state)
            //     let backPage = this.state.page - 1
            //     this.setState({...this.state, page: backPage })
            // }

        let mappedPokemonName = this.state.currentPokemonArr.filter (pokemon => {
            if(!this.state.nameSearch) return true;
            return pokemon.pokemon === this.state.nameSearch;
        })
        .map( pokemon => {
            return <PokeItem pokemon={pokemon}/>
        });
         const handleNameChange = e => {
            this.setState({ ...this.state, nameSearch: e.target.value});
        };
        const filterPoke = (filterType) => {
            let mappedPokemon 
            if (filterType === 'name') {

                mappedPokemon =  mappedPokemonName 
            
            this.setState({...this.state, currentPokemonArr: mappedPokemon})
           
            return mappedPokemon
        }
    }
    let currentPokemon = () => {
        
        if (this.state.currentPokemonArr) {
            return this.state.currentPokemonArr[this.state.page]
        } else {
            return null;
        }
    }
    // let currentPokemon = () => {
        
    //     if (this.state.currentPokemonArr) {
    //         return this.state.currentPokemonArr[this.state.page]
    //     } else {
    //         return null;
    //     }
    // }

         return (
        <div>
            <main>
                <button onClick={() =>{
                    filterPoke('name');}}>Name</button>
                    <section className='options'>
                        <label>
                            Name:
                            <input type='text' name='name' onChange={handleNameChange}/>
                        </label>
                    </section>
                    
                    <section className='list-section'>
                <ul className='pokemons'>{currentPokemon()}</ul>
                    </section>
                    {/* <Page nextPage={increment} BackPage={decrement}/> */}
            </main>
        </div>
    )
  }
}