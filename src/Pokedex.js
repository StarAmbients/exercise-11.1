import React from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {

    constructor (props){
        super(props)
        this.state = {
            indexArr: 0
        }
        this.changeIndex = this.changeIndex.bind(this)
    }

    changeIndex() {
        const { pokemons } = this.props
        this.setState((prev) => ({
            indexArr: indexArr > pokemons.length -1 ? prev.indexArr + 1 : prev.indexArr
        }))
    }

    render() {
        const { pokemons } = this.props
        const { indexArr } = this.state
        return (
            <div className="pokedex">
                <button onClick={this.changeIndex}>Próximo Pokémon</button>
                {<Pokemon key={pokemons[indexArr].id} pokemon={pokemons[indexArr]} />}
            </div>
        );
    }
}

export default Pokedex;