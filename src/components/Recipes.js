import React from 'react';
import RecipeItem from './RecipeItem';

export const Recipes = ({ loading, recipes }) => {
  if (loading) {
    return (
      <div>
        <h2>Fetching data...</h2>
      </div>
    );
  } else if (recipes.length === 0) {
    return null;
  } else {
    return (
      <section className="section-list">
        <h2 className="heading-secondary">Search Results</h2>
        <div className="recipe__list">
          {recipes.map((recipe) => {
            return <RecipeItem key={recipe.idMeal} recipe={recipe} />;
          })}
        </div>
      </section>
    );
  }
};

export default Recipes;
