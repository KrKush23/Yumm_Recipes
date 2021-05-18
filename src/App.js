import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';

import Search from './components/Search';
import Recipes from './components/Recipes';
import Recipe from './components/pages/Recipe';
import Featured from './components/Featured';

import './style.css';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [recipe, setRecipe] = useState({});
  const [random, setRandom] = useState({});
  const [loading, setLoading] = useState(false);

  // Function to search recipes ========================
  const searchRecipes = async (text) => {
    setLoading(true);
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`
    );

    setRecipes(res.data.meals);
    setLoading(false);
  };

  // Function to get a single recipe ========================
  const getRecipe = async (id) => {
    setLoading(true);
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );

    const newRecipe = res.data.meals.map((meal) => ({
      ...meal,
      ingredients: [
        meal.strIngredient1,
        meal.strIngredient2,
        meal.strIngredient3,
        meal.strIngredient4,
        meal.strIngredient5,
        meal.strIngredient6,
        meal.strIngredient7,
        meal.strIngredient8,
        meal.strIngredient9,
        meal.strIngredient10,
        meal.strIngredient11,
        meal.strIngredient12,
        meal.strIngredient13,
        meal.strIngredient14,
        meal.strIngredient15,
        meal.strIngredient16,
        meal.strIngredient17,
        meal.strIngredient18,
        meal.strIngredient19,
        meal.strIngredient20,
      ].filter((item) => item !== '' && item !== ' ' && item !== null),
      measures: [
        meal.strMeasure1,
        meal.strMeasure2,
        meal.strMeasure3,
        meal.strMeasure4,
        meal.strMeasure5,
        meal.strMeasure6,
        meal.strMeasure7,
        meal.strMeasure8,
        meal.strMeasure9,
        meal.strMeasure10,
        meal.strMeasure11,
        meal.strMeasure12,
        meal.strMeasure13,
        meal.strMeasure14,
        meal.strMeasure15,
        meal.strMeasure16,
        meal.strMeasure17,
        meal.strMeasure18,
        meal.strMeasure19,
        meal.strMeasure20,
      ].filter((item) => item !== '' && item !== ' ' && item !== null),
    }));

    setRecipe(newRecipe[0]);
    setLoading(false);
  };

  // Function to get random recipe ========================
  const getRandomRecipe = async () => {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/random.php`
    );
    setRandom(res.data.meals[0]);
  };

  return (
    <Router>
      <div>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Fragment>
                <header className="header header--primary">
                  <h1>Yumm Recipes</h1>
                </header>
                <Search searchRecipes={searchRecipes} />
                <Featured random={random} getRandomRecipe={getRandomRecipe} />
                <Recipes loading={loading} recipes={recipes} />
              </Fragment>
            )}
          />
          <Route
            exact
            path="/recipe/:idMeal"
            render={(props) => (
              <Fragment>
                <header className="header header--secondary">
                  <h1>
                    <Link to={`/`} className="link">
                      Yumm Recipes
                    </Link>
                  </h1>
                </header>
                <Recipe
                  {...props}
                  recipe={recipe}
                  loading={loading}
                  getRecipe={getRecipe}
                />
              </Fragment>
            )}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
