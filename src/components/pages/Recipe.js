import React, { Fragment, useEffect } from 'react';
import ReactPlayer from 'react-player';

const Recipe = ({ loading, getRecipe, recipe, match }) => {
  useEffect(() => {
    getRecipe(match.params.idMeal);
    //eslint-disable-next-line
  }, []);

  const {
    strMeal,
    strMealThumb,
    strInstructions,
    strArea,
    strCategory,
    strYoutube,
    ingredients,
    measures,
  } = recipe;

  if (recipe.length === 0) {
    return null;
  } else if (loading) {
    return (
      <div>
        <h1>Fetching data...</h1>
      </div>
    );
  } else {
    return (
      <Fragment>
        <div className="recipe__header">
          <div className="img-container">
            <img src={strMealThumb} alt={strMeal} />
          </div>
          <h2 className="recipe__title">{strMeal}</h2>
        </div>

        <section className="section-details">
          <div className="details">
            <h3 className="details__title">Category</h3>
            <p className="details__info">{strCategory}</p>
          </div>
          <div className="details">
            <h3 className="details__title">Area</h3>
            <p className="details__info">{strArea}</p>
          </div>
          <div className="details">
            <h3 className="details__title">Ingredients</h3>
            <ul className="details__list details__list--left">
              {ingredients &&
                ingredients.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
            <ul className="details__list details__list--right">
              {measures &&
                measures.map((item, index) => <li key={index}>- {item}</li>)}
            </ul>
          </div>
          <div className="details">
            <h3 className="details__title">Recipe</h3>
            <div className="details__info">
              <p>{strInstructions}</p>
              <ReactPlayer
                controls
                url={strYoutube}
                className="details__video"
              />
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
};

export default Recipe;
