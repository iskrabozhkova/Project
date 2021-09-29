import React, { useState, useEffect, useCallback } from 'react';
import IngredientList from './IngredientList'
import IngredientForm from './IngredientForm';
import Search from './Search';

const Ingredients = () =>  {
  const [userIngredients, setUserIngredients] = useState([]);

  //useEffect(() => {
  //  fetch('https://hooks-project-cae6d-default-rtdb.firebaseio.com/ingredients.json')
  //  .then(response => response.json())
  //  .then(responseData => {
  //    const loadedIngredients = [];
  //    for(const key in responseData){
  //      loadedIngredients.push({
  //        id: key,
  //        title: responseData[key].title,
  //        amount: responseData[key].amount
  //      })
  //    }
  //    setUserIngredients(loadedIngredients);
  //  })
  //}, [])

  const addIngredientHandler = ingredient => {
    fetch('https://hooks-project-cae6d-default-rtdb.firebaseio.com/ingredients.json', {
      method: 'POST',
      body: JSON.stringify(ingredient),
      headers: {'Content-Type': 'application/json'}
    }).then(response => {
      return response.json();
    }).then(responseData => {
      setUserIngredients(prevIngredients => [
        ...prevIngredients,
        {id: responseData.name, ...ingredient}
      ])
    });
  }

  const onRemoveItemHandler = ingredientId =>{
    setUserIngredients(prevIngredients => prevIngredients.filter(ingredient => ingredient.id !== ingredientId))
  }

  const filteredIngredients = useCallback( filteredIngredients => {
    setUserIngredients(filteredIngredients);
  }, [])
  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler}/>

      <section>
        <Search onLoadedIngredients={filteredIngredients}/>
        <IngredientList ingredients={userIngredients} onRemoveItem={onRemoveItemHandler}/>
      </section>
    </div>
  );
}

export default Ingredients;
