import React from 'react'
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import './Burger.css'

const burger = (props) => {
    //Object.keys --> Array ["salad", "cheese"]
    let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {return [...Array(props.ingredients[igKey])].map((_,i) => {
            return <BurgerIngredients key={igKey+i} type={igKey} />
        });
    })
    .reduce((arr, el) => {
        return arr.concat(el)
    }, []);
    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Start adding ingredients!</p>
    }
    return (
        <div className="Burger">
            <BurgerIngredients type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredients type="bread-bottom"/>
        </div>
    )
}

export default burger;