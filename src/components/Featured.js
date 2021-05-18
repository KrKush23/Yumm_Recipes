import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Featured = ({ random, getRandomRecipe }) => {
  // using as componentDidMount()
  useEffect(() => {
    getRandomRecipe();
    //eslint-disable-next-line
  }, []);

  const {
    idMeal,
    strMeal,
    strMealThumb,
    strInstructions,
    strArea,
    strCategory,
  } = random;

  if (random.length === 0) {
    return null;
  } else {
    return (
      <section className="section-featured">
        <h2 className="heading-secondary">Featured</h2>
        <div className="recipe__item recipe__item--featured">
          <div className="img-container img-container--featured ">
            <img src={strMealThumb} alt={strMeal} />
          </div>
          <div className="recipe__details recipe__details--featured">
            <h2 className="recipe__name">{strMeal}</h2>
            <p className="recipe__instructions recipe__instructions--featured">
              {strInstructions && strInstructions.substring(0, 500) + '...'}
            </p>
            <ul className="recipe__info">
              <li>
                Category <strong>{strCategory}</strong>
              </li>
              <li>
                Area <strong>{strArea}</strong>
              </li>
            </ul>
            <Link
              to={`/recipe/${idMeal}/`}
              className="link link--recipe link--featured"
            >
              View Recipe
            </Link>
          </div>
        </div>
      </section>
    );
  }
};

export default Featured;
