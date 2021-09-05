import React from 'react'
import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'
import './CheckoutSummary.css'

const checkoutSummary = (props) => { 
    return(
        <div>
            <h1 style={{textAlign: 'center'}}>We hope it tastes well!</h1>
            <div style={{width: '100%'}}>
                <Burger ingredients={props.ingredients}/>
            </div>
            <div style={{textAlign: 'center'}}>
                <Button clicked={props.checkoutCancel}>CANCEL</Button>
                <Button clicked={props.checkoutContinue}>CONTINUE</Button>
            </div>
        </div>
    )
}

export default checkoutSummary;