import React from 'react';
import { Link } from 'react-router-dom';

const RecipeItem = ({ recipe }) => {
  const {
    idMeal,
    strMeal,
    strMealThumb,
    strArea,
    strInstructions,
    strCategory,
  } = recipe;

  return (
    <div className="recipe__item">
      <div className="img-container">
        <img src={strMealThumb} alt={strMeal} />
      </div>
      <div className="recipe__details">
        <h2 className="recipe__name">{strMeal}</h2>
        <p className="recipe__instructions">
          {strInstructions.substring(0, 100) + '...'}
        </p>
        <ul className="recipe__info">
          <li>
            Category <strong>{strCategory}</strong>
          </li>
          <li>
            Area <strong>{strArea}</strong>
          </li>
        </ul>
        <Link to={`/recipe/${idMeal}/`} className="link link--recipe">
          View Recipe
        </Link>
      </div>
    </div>
  );
};

export default RecipeItem;
