import React, {Component} from 'react'
import Aux from '../../hoc/AuxComponent'
import Burger from './../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios'
import {connect} from 'react-redux'
import * as actionTypes from '../../store/actions'

const INGREDIENT_PRICES = {
    cheese: 0.4,
    meet: 2.5,
    salad: 0.5,
    bacon: 1.6
}
class BurgerBuilder extends Component{
    state = {
        //ingredients: {
        //    cheese: 0,
        //    meet: 0, 
        //    salad: 0,
        //    bacon: 0
        //},
        totalPrice: 4,
        purchaseable: false,
        purchasing: false, //when click button Order now --> true
    }

    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients).map(igKey => {
            return ingredients[igKey];
        }).reduce((sum,el) => {
            return sum+el;
        },0);
        this.setState({purchaseable: sum > 0})
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updateCount = oldCount + 1;
        const updateIngredients = {
            ...this.state.ingredients
        }
        updateIngredients[type] = updateCount;
        
        const ingredientPrice = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const updatedPrice = ingredientPrice + oldPrice;

        this.setState({totalPrice: updatedPrice, ingredients: updateIngredients})
        this.updatePurchaseState(updateIngredients);
    }
    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0){
            return;
        }
        const updateCount = oldCount - 1;
        const updateIngredients = {
            ...this.state.ingredients
        }
        updateIngredients[type] = updateCount;
        
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const updatedPrice = oldPrice - priceDeduction;

        this.setState({totalPrice: updatedPrice, ingredients: updateIngredients});
        this.updatePurchaseState(updateIngredients);
    }
    purchaseHandler = () => {
        this.setState({purchasing: true});
    }
    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }
    purchaseContinueHandler = () => {
        // const order = {
        //     ingredients: this.state.ingredients,
        //     price: this.state.price,
        //     customer: {
        //         name: 'Iskra',
        //         location: 'Bulgaria'
        //     }
        // }
        // axios.post('/orders.json', order)
        //     .then(response => {console.log(response)})
        //     .catch(error => {console.log(error)})
        const queryParams=[];
        for(let i in this.state.ingredients){
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.props.ings[i]));
        }
        const queryString = queryParams.join('&');
        this.props.history.push({
                pathname: '/checkout',
                search: '?' + queryString
            });
    }
    render() {
        let orderSummary =  <OrderSummary 
        ingredients={this.props.ings}
        price={this.state.totalPrice}
        purchaseCancled={this.purchaseCancelHandler}
        purchaseContinue={this.purchaseContinueHandler}/>

        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                <Burger ingredients={this.props.ings}/>
                <BuildControls 
                    ingredientAdded={this.props.onIngredientsAdded}
                    ingredientRemoved={this.props.onIngredientsRemove}
                    purchaseable={this.state.purchaseable}
                    price={this.state.totalPrice}
                    ordered={this.purchaseHandler}/>
            </Aux>
        )
    }
}
const mapStateToProps = state => {
    return {
        ings: state.ingredients
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onIngredientsAdded: (ingName) => dispatch({type: actionTypes.ADD_INGREDIENT, ingredientName: ingName}),
        onIngredientsRemove: (ingName) => dispatch({type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingName})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);