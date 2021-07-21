import React, {Component} from 'react'
import Aux from '../../hoc/AuxComponent'
import Burger from './../../components/Burger/Burger';

class BurgerBuilder extends Component{
    state = {
        ingredients: {
            cheese: 0,
            meet: 0, 
            salad: 0,
            bacon: 0
        }
    }
    render() {

        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <div>Controls</div>
            </Aux>
        )
    }
}

export default BurgerBuilder;