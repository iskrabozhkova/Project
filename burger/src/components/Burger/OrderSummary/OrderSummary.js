import React from 'react'
import Aux from '../../../hoc/AuxComponent'
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
        return (
            <li key={igKey}>
                <span style={{textTransorm: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
            </li>)
    })
    return(
        <Aux>
            <h3>Your Order</h3>
            <p>Burger with following ingredients: </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <Button clicked={props.purchaseCancled}>CANCEL</Button>
            <Button clicked={props.purchaseContinue}>CONTINUE</Button>
        </Aux>
    )
};

export default orderSummary;