
import React, {Component} from 'react'
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary'

class Checkout extends Component{
    state={
        ingredients: {
            salad:1,
            meat: 1,
            cheese: 2
        }
    }
    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients=[];
        for(let param in query.entries()){
            ingredients[param[0]] = +param[1];
        }
        this.setState({ingredients: ingredients});
    }
    checkoutCancelHandler = () => {
        this.props.history.goBack();
    }
    checkoutContinueHandler = () => {
        this.props.history.replace('/checkout/conatactInfo');

    }
    render(){
        return(
            <div>
                <CheckoutSummary 
                ingredients={this.state.ingredients}
                checkoutCancel={this.checkoutCancelHandler}
                checkoutContinue={this.checkoutContinueHandler}
                />
            </div>
        )
    }
}

export default Checkout;
